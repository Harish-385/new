import React from 'react'
import './TransportPage.css'

export default function TransportPage({ flatPage }: { flatPage?: any }) {
  return (
    <div className="transport-page-container">
      <div className="transport-content">
        <h3 className="transport-heading-center">Transport</h3>
        <p className="transport-paragraph">
          RIT has excellent transport facilities with 20+ buses. Our buses connect towns and places that include Virudhunagar, Sivakasi, Srivilliputhur, Krishnankoil, Sankarankovil, and all areas of Rajapalayam. The buses are driven by experienced drivers with utmost care to ensure safety and punctuality.
        </p>

        <h3 className="transport-heading-center" style={{ marginTop: '30px' }}>Drivers Details</h3>
        
        <div className="transport-info-box">
          <div className="transport-info-row">
            <strong>Transport Incharge: N.Govindaraju, Mob.No: 9629284690</strong>
          </div>
          <div className="transport-info-row">
            <strong>Transport coordinator: L.Karthikeyan, AP/Mech Mob.No: 9715540479</strong>
          </div>
        </div>

        <div className="transport-table-wrapper">
          <table className="transport-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Driver Name</th>
                <th>Mobile Number</th>
                <th>Vehicle Registration Number</th>
                <th>Route No</th>
                <th>Route Name</th>
                <th>Starting Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Mr.B.Moorthi</td><td>9894668646</td><td>TN 67 AM 9785</td><td>1</td><td>Old Bus Stand, RJPM</td><td>08.20AM</td></tr>
              <tr><td>2</td><td>Mr.A.Gurumoorthy</td><td>9786470807</td><td>TN 67 AM 9877</td><td>2</td><td>Kollakondan Villakku</td><td>08.00AM</td></tr>
              <tr><td>3</td><td>Mr.M.Muthuvelpandi</td><td>9787764316</td><td>TN 67 AL 2292</td><td>3</td><td>Thenmalai</td><td>07.30AM</td></tr>
              <tr><td>4</td><td>Mr.C.Rameshwaran</td><td>9944414028</td><td>TN 67 AL 2305</td><td>4</td><td>Malayadipatti - RJPM</td><td>08.10AM</td></tr>
              <tr><td>5</td><td>Mr.G.Murugan</td><td>9487297578</td><td>TN 67 AL 2944</td><td>5</td><td>Thendral Nagar - RJPM</td><td>08.25AM</td></tr>
              <tr><td>6</td><td>Mr.S.Mariyappan</td><td>8883477365</td><td>TN 84 - 3620</td><td>6</td><td>Vasudevanallur</td><td>07.30AM</td></tr>
              <tr><td>7</td><td>Mr.C.Sundarraj</td><td>9025242536</td><td>TN 84 - 3637</td><td>7</td><td>New Bus Stand - RJPM</td><td>08.20AM</td></tr>
              <tr><td>8</td><td>Mr.K.Raju</td><td>9791561199</td><td>TN 84 - 3648</td><td>9</td><td>Krishnankoil</td><td>07.30AM</td></tr>
              <tr><td>9</td><td>Mr.K.Sankar</td><td>9942359928</td><td>TN 84 - 5808</td><td>10</td><td>JawaherMaithanam, RJPM</td><td>08.20AM</td></tr>
              <tr><td>10</td><td>Mr.P.Muneeswaran</td><td>9791025181</td><td>TN 84 A 9045</td><td>12</td><td>Attai Mill</td><td>07.50AM</td></tr>
              <tr><td>11</td><td>Mr.G.Vishnuvaradhan</td><td>9080228810</td><td>TN 84 A 9040</td><td>13</td><td>Theradi Stop- SRIVI</td><td>08.10.AM</td></tr>
              <tr><td>12</td><td>Mr.V.Pulugandi</td><td>9655463237</td><td>TN 84 A 9046</td><td>14</td><td>Mamsapuram</td><td>08.15AM</td></tr>
              <tr><td>13</td><td>Mr.G.Muthukumar</td><td>8870815821</td><td>TN 84 A 9034</td><td>15</td><td>R.R.Nagar, RJPM</td><td>08.15 AM</td></tr>
              <tr><td>14</td><td>Mr.M.Gurunathan</td><td>8143987207</td><td>TN 84 A 9055</td><td>16</td><td>S.Ramalingapuram</td><td>08.00AM</td></tr>
              <tr><td>15</td><td>Mr.M.Paramasivam</td><td>9787506114</td><td>TN 84 C 3078</td><td>17</td><td>Bus Stand - SRIVI</td><td>08.05AM</td></tr>
              <tr><td>16</td><td>Mr.P.Balamurugan</td><td>8056457883</td><td>TN 84 C 3070</td><td>18</td><td>Ramakrishnapuram, SRIVI</td><td>08.05AM</td></tr>
              <tr><td>17</td><td>Mr.S.Kannan</td><td>9655717809</td><td>TN 84 C 3051</td><td>19</td><td>Ganthi Statue - RJPM</td><td>08.30AM</td></tr>
              <tr><td>18</td><td>Kumar K</td><td>9626768029</td><td>TN 84 C 3085</td><td>20</td><td>Kaliyamman Kovil - RJPM</td><td>08.30AM</td></tr>
              <tr><td>19</td><td>Mr.R.Pandiyaraj</td><td>9655578154</td><td>TN 84 C 3053</td><td>21</td><td>Sivakasi(Housing Board)</td><td>07.40AM</td></tr>
              <tr><td>20</td><td>Mr.S.Jayaganesan</td><td>9787772803</td><td>TN 84 Q 2970</td><td>22</td><td>Thiruvengadam</td><td>07.35AM</td></tr>
              <tr><td>21</td><td>Mr.R.Yogeshkumar</td><td>9500318042</td><td>TN 84 Q 2965</td><td>23</td><td>Sithurajapuram - Sivakasi</td><td>07.25AM</td></tr>
              <tr><td>22</td><td>Mr.R.Selvakumar</td><td>9487257513</td><td>TN 84 Q 2986</td><td>24</td><td>Virudhunagar</td><td>07.00AM</td></tr>
              <tr><td>23</td><td>Mr.R.Sivakumar</td><td>9442534601</td><td>TN 84 U 6366</td><td>25</td><td>Railway Station, SNKL</td><td>07.40AM</td></tr>
              <tr><td>24</td><td>Mr.N.Ganesan</td><td>9884824131</td><td>TN 84 U 6352</td><td>26</td><td>Rayagiri</td><td>07.25AM</td></tr>
              <tr><td>25</td><td>Mr.G.Senthil Kumar</td><td>6379437127</td><td>TN 84 U 6558</td><td>27</td><td>Kadayanallur</td><td>07.10AM</td></tr>
              <tr><td>26</td><td>Mr.R.Kalimuthu</td><td>9585271800</td><td>TN 84 AZ 3600</td><td>28</td><td>Mottamalai - RJPM</td><td>08.00AM</td></tr>
              <tr><td>27</td><td>Mr.K.Senthil Kumar</td><td>9940842108</td><td>TN 84 AZ 3559</td><td>29</td><td>Bus Stand , SNKL</td><td>07.40AM</td></tr>
              <tr><td>28</td><td>Mr.R.Kalamegam</td><td>7867027589</td><td>TN 84 AZ 3504</td><td>30</td><td>Alangulam</td><td>07.40AM</td></tr>
              <tr><td>29</td><td>Mr.S.Velmurugan</td><td>9585875780</td><td>TN 84 AZ 3972</td><td>31</td><td>Cornation-Sivakasi</td><td>07.25AM</td></tr>
              <tr><td>30</td><td>Mr.A.Muthukrishnan</td><td>7092454418</td><td>TN 84 AZ 3976</td><td>32</td><td>Kansapuram</td><td>07.10.AM</td></tr>
            </tbody>
          </table>
        </div>

        <img src="/media/generic/infrastructure-transport/bus-img.jpg" alt="RIT Transport Buses" className="transport-full-image-large" />
      </div>
    </div>
  )
}
