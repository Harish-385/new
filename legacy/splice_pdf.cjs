const fs = require('fs');
const lines = fs.readFileSync('src/components/FacultyProfilePage.tsx', 'utf8').split(/\r?\n/);
const start = lines.findIndex(l => l.includes('data.pdfUrl &&'));
const end = lines.findIndex((l, idx) => idx > start && l.includes(')}'));
const newBlock = `                  {data.pdfUrl ? (
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
                  )}`.split('\n');
lines.splice(start, end - start + 1, ...newBlock);
fs.writeFileSync('src/components/FacultyProfilePage.tsx', lines.join('\r\n'));
console.log('Fixed by line splicing:', fs.readFileSync('src/components/FacultyProfilePage.tsx', 'utf8').includes('PDF Not Available'));
