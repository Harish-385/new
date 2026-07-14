import React from 'react'
import { ExternalLink, FileText } from 'lucide-react'
import './LibraryPage.css'

export default function LibraryPage({ flatPage }: { flatPage?: any }) {
  // Using static content as requested by the user, for perfect alignment and layout
  return (
    <div className="library-page-container">
      {/* 1. ABOUT LIBRARY */}
      <div className="library-content">
        <h3 className="library-heading library-heading-center">ABOUT LIBRARY</h3>
        <p className="library-paragraph">
          RIT Library is located in the first floor of Main Block and it is spread over 404 sq.m. The Library has a good collection of books covering various branches of Engineering, Humanities & Science and other books related to Competitive Examinations. The Library has Acquisition Section, Technical Section, Circulation Section, Reference Section, Periodical Section and Digital Library Section. The Air-conditioned Reading Hall of Library can accommodate around 150 members at time.
        </p>

        {/* Side by side images */}
        <div className="library-image-split">
          <div className="library-image-column">
            <h4 className="library-subheading-center">AIRCONDITIONED READING HALL</h4>
            <img src="/media/generic/infrastructure-library/air-conditioned.jpg" alt="Airconditioned Reading Hall" className="library-full-image" />
          </div>
          <div className="library-image-column">
            <h4 className="library-subheading-center">STACK AREA</h4>
            <img src="/media/generic/infrastructure-library/stack.jpg" alt="Stack Area" className="library-full-image" />
          </div>
        </div>

        {/* 2. LIBRARY AUTOMATION */}
        <h3 className="library-heading library-heading-center" style={{ marginTop: '40px' }}>LIBRARY AUTOMATION</h3>
        <p className="library-paragraph">
          Library materials and services are automated using KOHA Integrated Library Automation Software. All the transactions are fully computerized. The bar-coded ID and the Scanner are used for charging and discharging the books and Web OPAC facilities are also available. The software contains various modules such as Enquiry, Circulation, Administration, and self-renewal, etc., An Web OPAC (Web Online Public Access Catalogue) has been created and 1 terminal is provided to facilitate access to the library resources, and 1 terminal for the e-gate
        </p>

        <h4 className="library-subheading-center" style={{ marginTop: '20px' }}>CIRCULATION COUNTER / OPAC / E-GATE REGISTER</h4>
        <img src="/media/generic/infrastructure-library/circular.jpg" alt="Circulation Counter" className="library-full-image-large" />

        {/* 3. DIGITAL LIBRARY */}
        <h3 className="library-heading library-heading-center" style={{ marginTop: '40px' }}>DIGITAL LIBRARY</h3>
        <p className="library-paragraph">
          The Digital Library has 1200 NPTEL (National Programme on Technology Enhanced Learning) Videos in various branches of Engineering and Basic Sciences.<br/>
          The Digital Library also has a collection of 436 CD-ROMs and 11 multimedia systems provided with internet connections. Internet connection is available to the students and faculty members for accessing digital collections, such as e-books, e-journals, etc.
        </p>
        
        <img src="/media/generic/infrastructure-library/digital.jpg" alt="Digital Library" className="library-full-image-large" />

        {/* 4. INSTITUTIONAL MEMBERSHIP */}
        <h3 className="library-heading">INSTITUTIONAL MEMBERSHIP</h3>
        <div className="library-grid-list">
          {[
            'Central Manufacturing Technology Institute',
            'Indian Society of Technical Education',
            'The Institution of Engineers',
            'CSI Communication',
            'DELNET (Developing Library Network)'
          ].map((item, idx) => (
            <div key={idx} className="library-grid-item">
              <div className="library-grid-dot"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* 5. LIBRARY RESOURCES */}
        <h3 className="library-heading">LIBRARY RESOURCES</h3>
        <h4 className="library-subheading">Books</h4>
        <p className="library-paragraph">AICTE Recommended Indian author and Foreign author Books</p>
        
        <div className="library-table-wrapper">
          <table className="library-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Departments</th>
                <th>Titles</th>
                <th>Volumes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Civil Engineering</td><td>519</td><td>2254</td></tr>
              <tr><td>2</td><td>Computer Science and Engineering</td><td>697</td><td>2924</td></tr>
              <tr><td>3</td><td>Electrical and Electronics Engineering</td><td>544</td><td>2387</td></tr>
              <tr><td>4</td><td>Electronics and Communication Engineering</td><td>711</td><td>3421</td></tr>
              <tr><td>5</td><td>Mechanical Engineering</td><td>797</td><td>4406</td></tr>
              <tr><td>6</td><td>B.Tech Artificial Intelligence & Data Science</td><td>99</td><td>881</td></tr>
              <tr><td>7</td><td>B.Tech Information Technology</td><td>71</td><td>395</td></tr>
              <tr><td>8</td><td>B.Tech Computer Science and Business Systems</td><td>79</td><td>482</td></tr>
              <tr><td>9</td><td>Humanities & Science</td><td>812</td><td>2911</td></tr>
              <tr><td>10</td><td>General</td><td>830</td><td>3023</td></tr>
              <tr style={{ fontWeight: 'bold', background: '#f8fafc' }}>
                <td colSpan={2} style={{ textAlign: 'center' }}>TOTAL</td>
                <td>5270</td>
                <td>21952</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 6. PRINTED JOURNALS */}
        <h3 className="library-heading">PRINTED JOURNALS</h3>
        <div className="library-table-wrapper">
          <table className="library-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Departments</th>
                <th>No.of Journals</th>
                <th>International Journals</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Civil Engineering</td><td>6</td><td rowSpan={9} style={{ verticalAlign: 'middle', textAlign: 'center', background: '#f1f5f9' }}>As subscribed E-journals</td></tr>
              <tr><td>2</td><td>Computer Science Engineering</td><td>6</td></tr>
              <tr><td>3</td><td>Electrical & Electronics Engineering</td><td>8</td></tr>
              <tr><td>4</td><td>Electronics and Communication Engineering</td><td>11</td></tr>
              <tr><td>5</td><td>Mechanical Engineering</td><td>9</td></tr>
              <tr><td>6</td><td>Artificial Intelligence and Data Science</td><td>8</td></tr>
              <tr><td>7</td><td>B.Tech Computer Science and Business Systems</td><td>8</td></tr>
              <tr><td>8</td><td>B.Tech Information Technology</td><td>7</td></tr>
              <tr><td>9</td><td>Humanities & Science</td><td>5</td></tr>
            </tbody>
          </table>
        </div>

        <p className="library-paragraph"><strong>Magazines</strong> - 42 Magazines</p>
        <p className="library-paragraph"><strong>Newspapers</strong> - 8 Dailies</p>

        {/* 7. INTERNATIONAL JOURNALS */}
        <h3 className="library-heading">INTERNATIONAL JOURNALS (e-journals)</h3>
        <div className="library-table-wrapper">
          <table className="library-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Package</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>IEEE XPLORE ASPP 197 Titles Back File 1997 Onwards</td><td><a href="#" target="_blank" rel="noopener noreferrer">IEEE Access</a></td></tr>
              <tr><td>2</td><td>Elsevier Science Direct Engineering + Computer Science 275 Journals - Back File 2000 Onwards.</td><td><a href="#" target="_blank" rel="noopener noreferrer">Elsevier Science Direct</a></td></tr>
              <tr><td>3</td><td>Developing Library Network (DELNET)</td><td><a href="#" target="_blank" rel="noopener noreferrer">DELNET</a></td></tr>
              <tr><td>4</td><td>Institute of Engineers (India)</td><td><a href="#" target="_blank" rel="noopener noreferrer">IE(I)</a></td></tr>
              <tr><td>5</td><td>Quillbot Premium Access</td><td><a href="#" target="_blank" rel="noopener noreferrer">Quillbot</a></td></tr>
            </tbody>
          </table>
        </div>

        {/* 8. OPEN ACCESS */}
        <h3 className="library-heading">OPEN ACCESS</h3>
        <p className="library-paragraph">
          The National Digital library of India is a virtual repository of learning resources which is not only just a repository with a search/browse facility but also provides a host of services containing textbooks, articles, videos, audio books, lectures, simulations, fiction and all other kinds of learning media for the learners/users community.
        </p>
        <div className="library-table-wrapper">
          <table className="library-table">
            <tbody>
              <tr>
                <td style={{ width: '50px' }}>1</td>
                <td>National Digital Library of India</td>
                <td><a href="#" target="_blank" rel="noopener noreferrer">NDL</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 9. REMOTE ACCESS FACILITY */}
        <h3 className="library-heading">REMOTE ACCESS FACILITY</h3>
        <p className="library-paragraph">
          The Indian Access Management Federation (INFED) has adopted Shibboleth, a standard-based open source software, for authenticating authorized users from institutions and providing them seamless access to e-resources from anywhere, anytime. Shibboleth offers a mechanism for users to access multiple resources within a federated single sign-on framework. The goal of the INFED is to allow users to access internal and external resources seamlessly using a single, institutionally controlled identity. This would not only allow authorized users to access e-resources from anywhere, anytime, but would also circumvent the requirement of maintaining multiple passwords for multiple resources in multiple domains.
        </p>
        <p className="library-paragraph">
          Our RIT Library provides remote access facilities to faculty members and students to enhance research and education. The RIT Library has created a user ID based on an email address for remote/mobile access to e-journals subscribed by our institute.
        </p>
        <p className="library-paragraph">
          A notification email will be received from <strong>sgou.idp@mail.inflibnet.ac.in</strong> after creating a username and password.
        </p>
        <p className="library-paragraph">
          <strong>INFED Remote Access Link : </strong>
          <a href="https://idp.ritrjpm.edu.in/" target="_blank" rel="noopener noreferrer">https://idp.ritrjpm.edu.in/</a>
        </p>
        <p className="library-paragraph">
          These e-journals can be accessed outside the RIT campus 24/7 through INFED (INFLIBNET) Remote Access.
        </p>

        {/* 10. SERVICES */}
        <h3 className="library-heading">SERVICES</h3>
        <ul className="library-standard-list">
          <li>Circulation Services (Issue, Return, Renewal, Reservations, Reminders)</li>
          <li>Reference Services (Encyclopedia, Dictionary, Project Reports, University Question Papers, Manuals, Year Books)</li>
          <li>Current Resources Awareness Service</li>
          <li>Scanning and Printing</li>
          <li>Reprographic Services</li>
        </ul>

        {/* 11. LIBRARY RULES AND REGULATIONS */}
        <h3 className="library-heading">LIBRARY RULES AND REGULATIONS</h3>
        <ul className="library-standard-list">
          <li>Complete silence is to be observed in the Library.</li>
          <li>Always wear your ID card and maintain proper dress code while entering the Library.</li>
          <li>Keep your personal belongings like bag, files, personal books, note books etc., at the property counter.</li>
          <li>Users must scan their ID card in the system at the entrance during entry as well as out.</li>
          <li>Avoid using mobile inside in Library.</li>
          <li>Eatable items are not allowed inside the Library.</li>
          <li>Users should leave the Books / Journals on the Tables after reading.</li>
          <li>Dont move any furniture from its respective place</li>
          <li>Avoid scribbling in the Library Books, Journals, other documents / Tables in any form including marking underlining as it is considered as violation of Library rules and will lead to initiate disciplinary action.</li>
          <li>Bring your Library ID cards for borrowing library books. Do not use others ID cards for borrowing books.</li>
          <li>Reference books are exclusively for reference purpose only within the library and will not be issued outside.</li>
          <li>Get assistance from the library staff whenever you require.</li>
          <li>Any clarification required about any of the above rules and regulations contact Librarian.</li>
        </ul>

        {/* Library Timings */}
        <div className="library-grid-list" style={{ marginTop: '20px' }}>
          <div className="library-grid-item">
            <div className="library-grid-dot"></div>
            <div>
              <strong style={{ display: 'block', marginBottom: '8px' }}>1. Library Hours</strong>
              <div style={{ color: '#475569', fontSize: '0.95rem' }}>
                Monday-Saturday : 09.00 a.m. - 05.00 p.m.<br/>
                Sunday : 09.00 a.m. - 01.00 p.m.
              </div>
            </div>
          </div>
          <div className="library-grid-item">
            <div className="library-grid-dot"></div>
            <div>
              <strong style={{ display: 'block', marginBottom: '8px' }}>2. Circulation Section</strong>
              <div style={{ color: '#475569', fontSize: '0.95rem' }}>
                Monday-Saturday : 09.30 a.m. - 04.30 p.m.
              </div>
            </div>
          </div>
          <div className="library-grid-item">
            <div className="library-grid-dot"></div>
            <div>
              <strong style={{ display: 'block', marginBottom: '8px' }}>3. Digital Library Section</strong>
              <div style={{ color: '#475569', fontSize: '0.95rem' }}>
                Monday-Saturday : 09.00 a.m. - 05.00 p.m.
              </div>
            </div>
          </div>
          <div className="library-grid-item">
            <div className="library-grid-dot"></div>
            <div>
              <strong style={{ display: 'block', marginBottom: '8px' }}>4. Reference Section</strong>
              <div style={{ color: '#475569', fontSize: '0.95rem' }}>
                Monday-Saturday : 09.00 a.m. - 05.00 p.m.<br/>
                Sunday : 09.00 a.m. - 01.00 p.m.
              </div>
            </div>
          </div>
        </div>

        {/* 12. PDF Document */}
        <a href="/media/generic/infrastructure-library/LIBRARY_COMMITTEE_2019-20.pdf" target="_blank" rel="noopener noreferrer" className="library-document-link">
          <FileText size={20} className="library-doc-icon" />
          <div className="library-doc-info">
            <span className="library-doc-title">LIBRARY COMMITTEE 2019-20</span>
            <span className="library-doc-meta">PDF Document</span>
          </div>
          <ExternalLink size={16} className="library-doc-external" />
        </a>

      </div>
    </div>
  )
}
