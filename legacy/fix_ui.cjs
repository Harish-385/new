const fs = require('fs');
let content = fs.readFileSync('src/components/FacultyProfilePage.tsx', 'utf8');

// Fix Vidwan ID logic
const replaceSocials = `<div className="profile-external-links">
                <h3>Academic & Research Profiles</h3>
                <div className="links-grid">
                  {data.socials.map((link) => (
                    link.url === '#' ? (
                      <div key={link.label} className="ext-profile-link" style={{ opacity: 0.6, cursor: 'not-allowed', display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                        <span>{link.label} (Unavailable)</span>
                      </div>
                    ) : (
                      <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="ext-profile-link">
                        <span>{link.label}</span>
                        <ExternalLink size={12} />
                      </a>
                    )
                  ))}
                </div>
              </div>`;

content = content.replace(/<div className="profile-external-links">[\s\S]*?<\/div>\s*<\/div>/, replaceSocials);


// Fix PDF logic
const replacePdf = `{data.pdfUrl ? (
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

content = content.replace(/\{data\.pdfUrl && \([\s\S]*?\}\)\}/, replacePdf);

fs.writeFileSync('src/components/FacultyProfilePage.tsx', content);
console.log('Fixed UI issues.');
