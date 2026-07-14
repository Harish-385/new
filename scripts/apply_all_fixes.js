import fs from 'fs';
import path from 'path';

// Define directories
const baseDir = 'c:/Users/Harish S/webpage';
const publicDir = path.join(baseDir, 'public');
const scrapedDir = path.join(publicDir, 'assets/scraped_images');
const clustraMediaDir = path.join(publicDir, 'media/cse/Department_Association_Clustra');

// 1. Copy Image Files
const copyJobs = [
  {
    src: 'ad698e98_Poster_Design_1.jpg',
    dest: 'Poster_Design_2026_1.jpg'
  },
  {
    src: 'fc0028d7_Poster_Design_2.jpg',
    dest: 'Poster_Design_2026_2.jpg'
  },
  {
    src: 'f1a9ead6_poster_design_1.jpg',
    dest: 'Poster_Design_2024_1.jpg'
  },
  {
    src: 'f8d29338_poster_design_2.jpg',
    dest: 'Poster_Design_2024_2.jpg'
  },
  {
    src: 'cf9eb2b6_Fields_CS-1.jpg',
    dest: 'Fields_CS-1.jpg'
  },
  {
    src: 'bf7fe3f9_Fields_CS-2.jpg',
    dest: 'Fields_CS-2.jpg'
  }
];

console.log('--- Copying Clustra Images ---');
// Ensure destination directory exists
if (!fs.existsSync(clustraMediaDir)) {
  fs.mkdirSync(clustraMediaDir, { recursive: true });
}

for (const job of copyJobs) {
  const srcPath = path.join(scrapedDir, job.src);
  const destPath = path.join(clustraMediaDir, job.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${job.src} to ${job.dest}`);
  } else {
    console.error(`ERROR: Source image not found at ${srcPath}`);
  }
}

// 2. Parser function for Press Releases
function parsePressReleaseFilename(filename) {
  let name = filename.replace(/\.[^/.]+$/, "");
  
  let datePart = "";
  let sourcePart = "";
  
  let dateMatch = name.match(/(\d{2})\.(\d{2})\.(\d{4})/);
  if (dateMatch) {
    datePart = `${dateMatch[1]}.${dateMatch[2]}.${dateMatch[3]}`;
    sourcePart = name.substring(0, dateMatch.index).trim();
  } else {
    let dateMatch2 = name.match(/(\d{2})(\d{2})(\d{4})/);
    if (dateMatch2) {
      datePart = `${dateMatch2[1]}.${dateMatch2[2]}.${dateMatch2[3]}`;
      sourcePart = name.substring(0, dateMatch2.index).trim();
    } else {
      let dateMatch3 = name.match(/(\d{2})(\d{2})(\d{2})$/);
      if (dateMatch3) {
        let year = parseInt(dateMatch3[3]) < 50 ? "20" + dateMatch3[3] : "19" + dateMatch3[3];
        datePart = `${dateMatch3[1]}.${dateMatch3[2]}.${year}`;
        sourcePart = name.substring(0, dateMatch3.index).trim();
      }
    }
  }

  if (sourcePart.startsWith("Press_")) {
    sourcePart = sourcePart.replace(/^Press_/, "");
  }
  if (sourcePart.startsWith("2022-2023_")) {
    sourcePart = sourcePart.replace(/^2022-2023_\d+-/, "");
  }
  sourcePart = sourcePart.replace(/\s+\d+$/, "").replace(/_\d+$/, "").trim();
  sourcePart = sourcePart.replace(/[_-]+/g, " ").trim();

  let lowerSource = sourcePart.toLowerCase();
  if (lowerSource.includes("dinakaran")) {
    sourcePart = "Dinakaran";
  } else if (lowerSource.includes("dinamalar")) {
    sourcePart = "Dinamalar";
  } else if (lowerSource.includes("hindu english") || lowerSource.includes("hindhu english")) {
    sourcePart = "The Hindu English";
  } else if (lowerSource.includes("hindu tamil thisai") || lowerSource.includes("hindu tamildhisai") || lowerSource.includes("hindu tamil dhisai") || lowerSource.includes("hindu tamil")) {
    sourcePart = "The Hindu Tamil Thisai";
  } else if (lowerSource.includes("times of india")) {
    sourcePart = "Times of India";
  } else if (lowerSource.includes("thinamani")) {
    sourcePart = "Thinamani";
  } else if (lowerSource.includes("thina suriyan")) {
    sourcePart = "Thina Suriyan";
  }

  return { source: sourcePart, date: datePart };
}

// 3. JSON Modification Function
function fixJsonFile(jsonFilePath) {
  console.log(`\n--- Modifying JSON: ${jsonFilePath} ---`);
  if (!fs.existsSync(jsonFilePath)) {
    console.error(`ERROR: JSON file not found at ${jsonFilePath}`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

  if (!data.cse) {
    console.error(`ERROR: CSE department key not found in ${jsonFilePath}`);
    return;
  }

  // --- FIX 1: Department Association Clustra ---
  const clustraKey = "Department Association Clustra";
  if (data.cse[clustraKey] && data.cse[clustraKey].content) {
    const content = data.cse[clustraKey].content;
    let modifiedClustra = false;

    for (let i = 0; i < content.length; i++) {
      const item = content[i];

      // A. AY 2025-2026 Poster Design
      if (item.type === 'paragraph' && item.text && item.text.includes('Poster Design on 10.01.2026') && item.text.includes('S. Natarajansri and N. Yazhini')) {
        console.log('Found AY 2025-2026 Poster Design event. Updating images...');
        // The next two elements should be our new images
        if (i + 1 < content.length && content[i + 1].type === 'image') {
          content[i + 1].src = '/media/cse/Department_Association_Clustra/Poster_Design_2026_1.jpg';
        }
        if (i + 2 < content.length && content[i + 2].type === 'image') {
          content[i + 2].src = '/media/cse/Department_Association_Clustra/Poster_Design_2026_2.jpg';
        }
        modifiedClustra = true;
      }

      // B. AY 2024-2025 Poster Design
      if (item.type === 'paragraph' && item.text && item.text.includes('Poster Design event on 23.09.2024') && item.text.includes('Advaith K S and Karthikayan K')) {
        console.log('Found AY 2024-2025 Poster Design event. Updating images...');
        // The next two elements should be our new images
        if (i + 1 < content.length && content[i + 1].type === 'image') {
          content[i + 1].src = '/media/cse/Department_Association_Clustra/Poster_Design_2024_1.jpg';
        }
        if (i + 2 < content.length && content[i + 2].type === 'image') {
          content[i + 2].src = '/media/cse/Department_Association_Clustra/Poster_Design_2024_2.jpg';
        }
        modifiedClustra = true;
      }

      // C. AY 2021-2022 Webinar on Fields in CS (Missing Images)
      if (item.type === 'paragraph' && item.text && item.text.includes('Webinar on Fields in CS') && item.text.includes('Ms.S.Yeshwanthini')) {
        console.log('Found AY 2021-2022 Webinar on Fields in CS event. Checking for missing images...');
        // Check if the next elements are already images
        let nextIsImage = false;
        if (i + 1 < content.length && content[i + 1].type === 'image') {
          nextIsImage = true;
        }
        if (!nextIsImage) {
          console.log('Injecting missing Fields in CS images...');
          const newImages = [
            {
              type: 'image',
              src: '/media/cse/Department_Association_Clustra/Fields_CS-1.jpg',
              alt: 'Image'
            },
            {
              type: 'image',
              src: '/media/cse/Department_Association_Clustra/Fields_CS-2.jpg',
              alt: 'Image'
            }
          ];
          content.splice(i + 1, 0, ...newImages);
          // adjust loop index to account for splice
          i += 2;
        } else {
          console.log('Fields in CS images already present. Updating paths...');
          content[i + 1].src = '/media/cse/Department_Association_Clustra/Fields_CS-1.jpg';
          if (i + 2 < content.length && content[i + 2].type === 'image') {
            content[i + 2].src = '/media/cse/Department_Association_Clustra/Fields_CS-2.jpg';
          }
        }
        modifiedClustra = true;
      }
    }

    if (modifiedClustra) {
      console.log('Clustra department association images updated.');
    } else {
      console.warn('WARNING: Clustra section events matching text not found!');
    }
  } else {
    console.error(`ERROR: Clustra department association section not found!`);
  }

  // --- FIX 2: Press Release Dates ---
  const pressReleaseKey = "Press Release";
  if (data.cse[pressReleaseKey] && data.cse[pressReleaseKey].content) {
    const content = data.cse[pressReleaseKey].content;
    let addedCount = 0;

    for (let i = 0; i < content.length; i++) {
      const item = content[i];
      if (item.type === 'image' && item.src && item.src.startsWith('/media/cse/Press_Release/')) {
        const filename = item.src.split('/').pop() || '';
        const parsed = parsePressReleaseFilename(filename);

        if (!parsed.source || !parsed.date) {
          console.error(`ERROR: Could not parse source/date for ${filename}`);
          continue;
        }

        const expectedText = `Source: ${parsed.source} Dated On: ${parsed.date}`;

        // Check if followed by paragraph
        let hasParagraph = false;
        if (i + 1 < content.length && content[i + 1].type === 'paragraph') {
          const nextText = content[i + 1].text || '';
          if (nextText.includes('Source:')) {
            hasParagraph = true;
            // update if incorrect
            if (nextText !== expectedText) {
              console.log(`Updating existing caption: "${nextText}" -> "${expectedText}"`);
              content[i + 1].text = expectedText;
            }
          }
        }

        if (!hasParagraph) {
          console.log(`Injecting caption for ${filename}: "${expectedText}"`);
          content.splice(i + 1, 0, {
            type: 'paragraph',
            text: expectedText
          });
          addedCount++;
          // skip the injected element in the loop
          i++;
        }
      }
    }
    console.log(`Added ${addedCount} missing press release captions.`);
  } else {
    console.error(`ERROR: Press Release section not found!`);
  }

  // Write changes back
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Successfully saved ${jsonFilePath}`);
}

// Run updates on both JSON files
const subpagesPath = path.join(baseDir, 'src/data/department_subpages.json');
const originalPath = path.join(baseDir, 'original_dept.json');

fixJsonFile(subpagesPath);
fixJsonFile(originalPath);
