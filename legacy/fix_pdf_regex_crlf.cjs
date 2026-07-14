const fs = require('fs');
let content = fs.readFileSync('src/components/FacultyProfilePage.tsx', 'utf8');

const rx = /\{data\.pdfUrl && \([\s\S]*?\}\)\}/;

const newBlock = `{data.pdfUrl ? (
                    <div className="profile-section-box doc-pdf-box">
                      <h3>Original CV / Bio-data Source</h3>
                      <p>View the fully detailed official PDF bio-data statement for academic citation and credentials verification.</p>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
                        <a 
                          href={data.pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="pdf-download-btn"
                          style={{ textDecoration: 'none' }}
                        >
                          <BookOpen size={16} />
                          <span>View Original Biodata PDF</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="profile-section-box doc-pdf-box" style={{ opacity: 0.7 }}>
                      <h3>Original CV / Bio-data Source</h3>
                      <p>The official PDF bio-data statement has not been uploaded yet.</p>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
                        <button 
                          className="pdf-download-btn"
                          disabled
                          style={{ textDecoration: 'none', cursor: 'not-allowed', filter: 'grayscale(1)' }}
                        >
                          <BookOpen size={16} />
                          <span>PDF Not Available</span>
                        </button>
                      </div>
                    </div>
                  )}`;

// Ensure newBlock has \r\n endings to match the rest of the file
content = content.replace(rx, newBlock.replace(/\n/g, '\r\n'));
fs.writeFileSync('src/components/FacultyProfilePage.tsx', content);
console.log('Replaced PDF block via Regex:', content.includes('PDF Not Available'));
