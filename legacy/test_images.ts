import { isValidDepartmentImage } from './src/utils/deptHelpers'
import { resolveLocalScrapedImage } from './src/utils/localScrapedImages'

const urls = [
  "/media/aids/Faculty_Awards_and_Achievements/angel_aiml.jpg",
  "/media/aids/Faculty_Awards_and_Achievements/anadhi_ai.jpg",
  "/media/aids/Faculty_Awards_and_Achievements/NPTEL_Pradeepha_AD.jpg",
  "/media/aids/Faculty_Awards_and_Achievements/NPTEL_Jothilakshmi_AD.jpg"
];

for (const url of urls) {
  const valid = isValidDepartmentImage(url, 'aids', '', '');
  const local = resolveLocalScrapedImage(url);
  console.log(url, "-> isValid:", valid, "localSrc:", local);
}
