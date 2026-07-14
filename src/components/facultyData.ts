import { resolveLocalScrapedImage } from '../utils/localScrapedImages'

export interface FacultyData {
  name: string
  designation: string
  department: string
  email: string
  secondaryEmail: string
  mobile: string
  image: string | null
  office: string
  bioSummary: string
  researchAreas: string[]
  socials: { label: string; url: string }[]
  pdfUrl: string | null
  education: { degree: string; field: string; university: string; year: string }[]
  experience: { role: string; org: string; duration: string }[]
  metrics: {
    citationsScopus: number
    citationsCrossRef: number
    hIndex: number
    journals: number
    bookChapters: number
    conferences: number
    coauthors: number
    altmetrics: any[]
    scopeIndexedArticles?: number
  } | null
  projects: any[]
  patents: any[]
  honours: { title: string; body: string; year: string }[]
  memberships: { body: string; details: string; year: string }[]
  journalPubs: string[]
  conferencePubs: string[]
}

export const facultyDataMap: Record<string, FacultyData> = {
  kaliappan: {
    name: 'Dr. M. KALIAPPAN',
    designation: 'Professor & Head',
    department: 'Artificial Intelligence and Data Science',
    email: 'kaliappan@ritrjpm.ac.in',
    secondaryEmail: 'kalsrajan@yahoo.co.in',
    mobile: '9003613335 / 233417',
    image: '/media/aids/Faculty_Profile/HodAd.jpeg',
    office: 'RIT Campus, HOD Cabin, Department of AI & DS',
    bioSummary: 'With over two decades of academic and research experience, his research focuses on Artificial Intelligence, Big Data Analytics, Neural Networks, and Robotic Process Automation.',
    researchAreas: ['Artificial Intelligence', 'Big Data Analytics', 'Ad hoc Networks', 'Neural Networks and Deep Learning', 'Robotic Process Automation'],
    socials: [
      { label: 'Vidwan ID: 168525', url: 'https://ritrjpm.irins.org/profile/168525' },
      { label: 'Google Scholar', url: 'https://scholar.google.co.in/citations?user=egJ_ihQAAAAJ' },
      { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Drm_Kaliappan_me_phd' },
      { label: 'ORCID ID', url: 'https://orcid.org/0000-0001-6177-7428' },
      { label: 'Scopus ID: 55315684100', url: 'http://www.scopus.com/authid/detail.url?authorId=55315684100' }
    ],
    pdfUrl: '/media/faculty/_Dr.M.Kaliappan-Biodata-31.10.2023.pdf',
    education: [
      { degree: 'Ph.D', field: 'Information and Communication Engineering', university: 'Anna University, Chennai', year: '2015' },
      { degree: 'M.E', field: 'Computer Science and Engineering', university: 'Manonmaniam Sundaranar University, Tirunelveli', year: '2011' },
      { degree: 'B.E', field: 'Computer Science and Engineering', university: 'Madurai Kamaraj University, Madurai', year: '1999' }
    ],
    experience: [
      { role: 'Professor and Head', org: 'Ramco Institute of Technology, Rajapalayam', duration: '20.10.2021 - Present' },
      { role: 'Professor', org: 'Ramco Institute of Technology, Rajapalayam', duration: '02.11.2020 - 19.10.2021' },
      { role: 'Associate Professor', org: 'Ramco Institute of Technology, Rajapalayam', duration: '01.11.2018 - 01.11.2020' },
      { role: 'Associate Professor', org: 'National Engineering College, Kovilpatti', duration: '01.08.2016 - 26.10.2018' },
      { role: 'Assistant Professor (SG)', org: 'National Engineering College, Kovilpatti', duration: '06.08.2012 - 30.07.2016' },
      { role: 'Assistant Professor', org: 'National Engineering College, Kovilpatti', duration: '01.11.2011 - 05.08.2012' },
      { role: 'Lecturer', org: 'National Engineering College, Kovilpatti', duration: '01.12.2006 - 31.10.2011' },
      { role: 'Lecturer', org: 'SACS MAVMM Engg College, Madurai', duration: '14.08.2006 - 30.11.2006' }
    ],
    metrics: {
      citationsScopus: 1560,
      citationsCrossRef: 1307,
      hIndex: 21,
      journals: 64,
      bookChapters: 5,
      conferences: 27,
      coauthors: 451,
      altmetrics: [],
      scopeIndexedArticles: 50
    },
    projects: [
      {
        title: 'Automatic Book Reading System for Visually Impaired Person Using Deep Learning',
        agency: 'Institution of Engineers (India) Limited, Kolkata',
        status: 'Completed',
        role: 'CO-PI',
        budget: 'INR 20,000',
        duration: '2019 - 2020'
      }
    ],
    patents: [
      {
        title: 'SMART PROSTHETIC ARM USING ARTIFICIAL INTELLIGENCE AND ELECTROMYOGRAPHY SIGNALS',
        inventors: 'M. Kaliappan, S. Selva Birunda, R. Ramana',
        number: 'Patent No. 132616',
        status: 'Published',
        date: '2025-12-22',
        filedDate: '2025-12-01',
        org: 'RAMCO INSTITUTE OF TECHNOLOGY'
      }
    ],
    honours: [
      { title: "IUCEE Educator Certification", body: "Completed IUCEE International Engineering Educators Certification Program (IIEECP) with distinction.", year: "2019" },
      { title: "NPTEL Active SPOC Appreciation", body: "Received appreciation for Active NPTEL-SPOC based on performance and participation of candidates for the JAN-APR 2019 semester.", year: "2019" },
      { title: "COVID-19 Academic Continuity Appreciation", body: "Received Letter of Appreciation ensuring a smooth completion of the various academic activities in the COVID-19 impacted semester.", year: "2020" },
      { title: "IEEE Bangladesh Panel Member", body: "Acted as Panel member in Virtual Conference Organizers' Panel organized by IEEE Bangladesh section.", year: "2020" },
      { title: "IEEE GCCE Co-Chair", body: "Acted as session Co-Chair in IEEE 8th Global Conference on Consumer Electronics (GCCE 2019), Toyonaka-city, Osaka, Japan.", year: "2019" },
      { title: "Emerging Technology Reviewer Nominee", body: "Nominated as reviewer for International Conference on Emerging Technology and Interdisciplinary Sciences (ICETIS-2021).", year: "2021" },
      { title: "Anna University PhD Supervisor", body: "Recognized as Supervisor for Ph.D/M.S (By Research) programme under Anna University, Chennai.", year: "2018" }
    ],
    memberships: [
      { body: "Institution of Engineers (India) Limited (IEI)", details: "Life Member - (M-163955-7)", year: "-" },
      { body: "Computer Society of India (CSI)", details: "Member", year: "-" }
    ],
    journalPubs: [
      'Pradeepa S, Niveda Gaspar, Vimal.S, Subbulakshmi.P, Ahmed Alkhayyat, Kaliappan.M, "Classifying Promoters by Interpreting the Hidden Information of DNA Sequences for disease prediction in clinical laboratories using Gaussian Decision Boundary Estimation", Intelligent Decision Technologies, IOS Press, Oct 2023, IF 1.0, SCI.',
      'Azhagu Jaisudhan Pazhani.A, P. Gunasekaran, Vimal Shanmuganathan, Sangsoon Lim, Kaliappan Madasamy, Rajesh Manoharan and Amit Verma, "Peer–Peer Communication Using Novel Slice Handover Algorithm for 5G Wireless Networks", Journal of Sensor and Actuator Networks, Vol.11, No.82, November, 2022. SCI.',
      'L.Ganesan, C.Umarani, M.Kaliappan, Vimal Shanmuganathan, Seifedine Kadry, Yunyoung Nam, "Texture Image Analysis for Larger Lattice Structure using Orthogonal Polynomial framework", Journal of Information Technology and Control, Vol. 51, No. 3, September 2022, SCI, IF: 1.22.',
      'Karpagarajesh, G., Santhana Krishnan, R., Harold Robinson, S. Vimal, S. Thamizharasan, P. Subbulakshmi, M. Kaliappan, "Comparative analysis of FSO, OFC and diffused channel links in photonics using artificial intelligence based S-band, C-band and L-band of the attenuation metrics", Optical and Quantum Electronics, Vol. 54, No.420, PP.1-20, June 2022.',
      'K. Lakshmi Narayanan, R. Santhana Krishnan, Y. Harold Robinson, E. Golden Julie, S. Vimal, V. Saravanan, M. Kaliappan, "Banana Plant Disease Classification using Hybrid Convolutional Neural Network", Computational Intelligence and Neuroscience, Hindawi, Vol.2022, Article ID 9153699, Feb.2022, SCI, IF 3.633.',
      'S. Gopikumar, J. Rajesh Banu, Y. Harold Robinson, S. Raja, S. Vimal, Danilo Pelusi & M Kaliappan, "Geo Spatial Based Real Time Monitoring on Eutrophic Evaluation of Porunai River Basin for Pollution Risk Assessment", European Journal of Remote Sensing, pp:1-14, Feb 2022, SCIE, IF 3.71.',
      'S Vimal, Y Harold Robinson, M Kaliappan, Abdulellah A Alaboudi, Ashish Kr Luhach and Noor Zaman, "AI based Forecasting of Influenza Patterns from Twitter Information using Random Forest algorithm", Human-centric Computing and Information Sciences, Vol.11, No.33, pp.1-14, 2021, SCI, IF:3.7.',
      'M. Kaliappan, S. Vimal, K. Vijayalakshmi, Mi Young Lee, S. Manikandan, "OSDDY: Embedded system based Object Surveillance Detection System with small drone using Deep YOLO", EURASIP Journal on Image and Video Processing, Article no: 19, pp.2-14, 2021.',
      'Kaliappan Madasamy, Vimal Shanmuganathan, Gaurav Dhiman, K.Vijayalakshmi, P.SureshKumar, "Enhancing the QOS of far field networking and communication using the optical properties of graphene", Materials Today: Proceedings, Online March 2021 (Scopus Indexed).',
      'S. Vimal, Y. Harold Robinson, M. Kaliappan, K. Vijayalakshmi, Sanghyun Seo, "A method of progression detection for glaucoma using K-means and the GLCM algorithm toward smart medical prediction", Journal of Supercomputing, Published online: March 2021, SCIE, IF 2.6.',
      'S.Vimal, Y. Harold Robinson, M.Kaliappan, Subbulakshmi Pasupathi and A.Suresh, "Q Learning MDP Approach to Mitigate Jamming Attack Using Stochastic Game Theory Modelling With WQLA in Cognitive Radio Networks", Journal of Platform Technology, Vol. 9, No. 1, March 2021.',
      'R Venkatesh, C Bala Subramanian, M Kaliappan, "Rainfall Prediction using Generative Adversarial Networks with Convolution Neural Network", Soft Computing (Springer), Published online January 2021, SCI, IF: 3.05.',
      'Subbulakshmi Pasupathi, Vimal Shanmuganathan, Kaliappan Madasamy, Harold Robinson Yesudhas & Mucheol Kim, "Trend analysis using agglomerative hierarchical clustering approach for time series big data", The Journal of Supercomputing, Published online January 2021, SCI, Impact Factor: 2.469.',
      'V. Jackins, S. Vimal, Kaliappan, M., Mi Young Lee, "AI-based smart prediction of clinical disease using random forest classifier and Naive Bayes", Journal of Supercomputing, Published online Nov 2020, SCI, IF.2.4.',
      'M. Kaliappan, A.Niranjana Devi, R.Sandhiya, D.Lakshmanan, S.Selvakumari, "Water Tank Monitoring and Flame Detection Application Using LORA", Journal of Green Engineering, Vol.10, No.9, pp. 5748–5762, October 2020. Scopus Indexed.',
      'B. Vijayalakshmi, K. Ramar, M. Kaliappan, NZ Jhanjhi, Sahil Verma, K. Vijayalakshmi, S. Vimal, Kavita, Uttam Ghosh, "An Attention Based Deep Learning Model For Traffic Flow Prediction Using Spatio Temporal Features Towards Sustainable Smart City", International Journal of Communication Systems, Published online November 2020.',
      'M. Sivaram, M.Kaliappan, S. Jeya Shobana, M. Viju Prakash, V. Porkodi, K.Vijayalakshmi, S.Vimal, A.Suresh, "Secure Storage Allocation Scheme using Fuzzy Based Heuristic Algorithm for Cloud", Journal of Ambient Intelligence and Humanized Computing, IF 1.91, Published Online 14 May 2020.',
      'Ruben Gonzalez Crespo, Vimal S, Manju Khari, L. Kalaivani, Nilanjan Dey, M Kaliappan, "Energy enhancement using multi-objective ant colony optimization with double Q learning algorithm for IOT based cognitive radio networks", Computer Communications (Elsevier), IF:2.76, Vol. 154, 15, 2020, pp. 481-490.',
      'R.Venkatesh, C.Bala subramanian, M.Kaliappan, "Development of Big Data Predictive Analytics Model for Disease Prediction using Machine learning Technique", Journal of Medical Systems (Springer), Vol.43, Article number: 272, 2019, IF:2.09.',
      'R.Geetha, S.Siva subramanian, M.Kaliappan, S.Vimal, Dr.Suresh Annamalai, "Cervical Cancer Identification With Synthetic Minority Oversampling Technique And PCA Analysis Using Random Forest Classifier", Journal of Medical Systems (Springer), IF:2.09, Vol.43, Article number: 286, 2019.',
      'Nattar kannan, S. Siva Subramanian, M. Kaliappan, S.Vimal, A. Suresh and P. Subbulakshmi, "Artificial Intelligence based attack mitigation Using Stochastic Game Theory Modelling with WQLA in Cognitive Radio Networks", Journal of Web Engineering, IF: 0.4, Vol. 17, No.6, pp.3599 – 3618, 2018.',
      'S. Vimal, M. Kaliappan, A. Suresh, P. Subbulakshmi, Sanjeev Kumar, and Dinesh Kumar, "Development of Cloud Integrated Internet of Things Based Intruder Detection System", Journal of Computational Theoretical Nanoscience, Vol.15, pp.3570–3575, 2018.',
      'S. Vimal, L. Kalaivani, M. Kaliappan, A. Suresh, Xiao-Zhi Gao, R. Varatharajan, "Development of secured data transmission using machine learning-based discrete-time partially observed Markov model and energy optimization in cognitive radio networks", Journal of Neural Computing and Applications, IF:4.66, Vol.32, pp.151-161, 2020.',
      'K. Nattar kannan, S.Sivasubramanian, M.Kaliappan, S.Vimal, "Predictive big data analytic on demonetization data using support vector machine", Cluster Computing (Springer), IF:1.8, Vol.22, pp.14709-14720, 2019.',
      'Suthagar Ilango, S.Vimal, M.Kaliappan, P. Subbulakshmi, "Optimization using artificial bee colony based clustering approach for big data", Cluster Computing (Springer), IF: 1.8, Vol.22, pp. 12169–12177, September 2019.',
      'S.Vimal, L. Kalaivani, M.Kaliappan, "Collaborative approach on mitigating spectrum sensing data hijack attack and dynamic spectrum allocation based on CASG modeling in wireless cognitive radio networks", Cluster Computing (Springer), IF:1.8, Vol.22, pp.10491-10501, 2019.',
      'M.Kaliappan, Dr.B.Paramasivan, Susan Agustine, "Enhancing Energy Efficiency and Load Balanced Clustering Technique in MANET using Genetic Algorithms", Journal of Network and Computer Applications (Elsevier), IF: 6.28, Vol.73, pp.35-43, 2016.',
      'M. Kaliappan, E. Mariappan, M. Viju Prakash, and B. Paramasivan, "Load Balanced Clustering Technique in MANET using Genetic Algorithms", Defence Science Journal, IF:0.58, Vol. 66, No. 3, 2016, pp.251-258.',
      'E. Mariappan, M. Kaliappan, S. Vimal, "Energy Efficient Routing Protocol Using Grover’s Searching Algorithm for MANET", Asian Journal of Information Technology, Vol.14, no.24, pp.4986-4994, 2016.',
      'M.Kaliappan, Dr.B.Paramasivan, "Enhancing secure routing in Mobile Ad Hoc Networks using a Dynamic Bayesian Signalling Game model", Computers & Electrical Engineering (Elsevier), IF:0.816, Vol.4, pp.301-313, 2015.',
      'M.Viju Prakash, M. Kaliappan, B. Paramasivan, "Energy Efficient Dynamic Load Balanced Clustering Protocol using Memory Enhanced Genetic Scheme and Elitism based Immigrant Genetic Scheme for MANET", Journal of Pure and Applied Microbiology, Vol. 9, Nov. 2015.',
      'Balasubramanian Paramasivan, Maria Johan Viju Prakash, and Madasamy Kaliappan, "Development of a Secure Routing Protocol using Game Theory Model in Mobile Ad Hoc Networks", Journal of Communications and Networks, IF:1.0, Vol. 17, No. 1, pp.75-83, February 2015.',
      'M.Kaliappan, Paramasivan, B, "Development of secure cluster based multipath routing scheme for MANET", International Journal of Applied Engineering Research, vol.10, no.12, pp.31565-31583, 2015.',
      'M.Kaliappan, Dr.B.Paramasivan, "Secure and Fair Cluster Head Selection Protocol for Enhancing Security in Mobile Ad Hoc Networks", Scientific World Journal, IF:1.2, Volume 2014, Article ID 608984, 6 pages, 2014.',
      'M.Kaliappan, Dr.B.Paramasivan, K.Mohaideen pitchai, K.Bhavaneswari, "Enhancement of Security and Congestion Adaptiveness in Dynamic Source Routing Protocol", International Journal of Networking and Communication Engineering, Vol.4, No.7, pp. 266-370, June 2012.'
    ],
    conferencePubs: [
      'Kaliappan Madasamy, Vimal Shanmuganathan, Nithish, Vishakan, Vijayabhaskar, Muthukumar, Balamurali Ramakrishnan, Ramnath.M, "Benign and Malignant Cancer Prediction using Deep Learning and Generating Pathologist Diagnostic Report", Second International Conference on Internet of Things and Health (IoTHIC-2023), October 20-21 2023, Istanbul, Turkey.',
      'Karpagavalli. C, Kaliappan. M, Amuthachenthiru. K, "Radial Basis Function Neural Network for Intrusion Detection and Feed Forward Artificial Neural Network for Attack Mitigation in IoT", Second International Conference on Augmented Intelligence and Sustainable Systems (ICAISS 2023), IEEE.',
      'K.Vijayalakshmi, M.Kaliappan, R.Siva Ranjini, M.Sasi Rekha, and R.Selva Ishwarya, "Automatic Book Reading System for Visually Impaired Person using Deep Learning", National Web Conference on Challenges and Innovation in Engineering And Technology (NWCCIET-2021).',
      'M.Kaliappan, K.Vijayalakshmi, and P.Rajarajeswari, "Automatic Questionnaire Generator using Deep Learning", National Web Conference on Challenges and Innovation in Engineering And Technology (NWCCIET-2021).',
      'S. Vimal, Y. Harold Robinson, M. Kaliappan, K. Vijayalakshmi, Sanghyun Seo, "Progression Detection of Glaucoma using K-Means and GLCM Algorithm", The 22nd International Conference on Artificial Intelligence (ICAI\'20), Las Vegas, USA.',
      'P. Subbulakshmi, S. Vimal, M. Kaliappan, Y. Harold Robinson, Mucheol Kim, "Trend Analysis using Agglomerative Hierarchical Clustering Approach for Time Series Big Data", The 22nd International Conference on Artificial Intelligence (ICAI\'20), Las Vegas, USA.',
      'V. Jackins, S. Vimal, M. Kaliappan, Mi Young Lee, "Prediction of Clinical Disease with AI based Multiclass Classification using Naive-Bayes and Random Forest Classifier", The 22nd International Conference on Artificial Intelligence (ICAI\'20), Las Vegas, USA.',
      'M.Kaliappan, C.A Yogaraja, A.Niranjana Devi, R.Sandhiya, and S.Selvakumari, "Water Tank Monitoring and Flame Detection using LORA", International Web Conference on Smart Engineering Technologies (IWCSET-2020), Rajapalayam.',
      'R.Venkatesh, M.Kaliappan, C. Balasubramanian, K.R.Geerthanapriya, "Rainfall Prediction System Using Generative Adversarial Networks", International Web Conference on Smart Engineering Technologies (IWCSET-2020), Rajapalayam.',
      'M. Kaliappan, B. Vijayalakshmi, Manikandan, M.Shrimalavika, G.Shunmugavalli and A. VijayaMalini, "SEO Analysis for B2B websites using Google Webmaster tools", International Web Conference on Smart Engineering Technologies (IWCSET-2020), Rajapalayam.',
      'M Kaliappan, B Paramasivan, T. Dhivya, "Development of Energy Efficient Dynamic Load Balanced Clustering Protocol Using Dynamic Genetic Algorithm in MANET", National Conf. on Frontiers in Applied Sciences And Computer Technology (FACT’15).',
      'M Kaliappan, G.Murugeswari, "Secure Congestion Adaptive Routing protocol for Mobile Adhoc Network", Intelligent Computing in Communication & Automation (NCICCA-2011).',
      'B.Paramasivan, K. Mohaideen Pitchai, M.Kaliappan, "A Novel routing protocol for improving energy efficiency using fuzzy logic in wireless sensor networks", IEEE Sensor 2012.',
      'M Kaliappan, B Paramasivan, "Enhancing Energy Efficiency in Mobile Adhoc Network Using Agglomerative Hierarchical Clustering Technique", ASCENT 2015.',
      'M.Kaliappan, "Secure Congestion Adaptive Routing protocol for Mobile Adhoc Networks", National Conference on Emerging Trends in Computing Technologies, 2011.',
      'S. Rimlon Shibi, M. Kaliappan, L. Jerart Julus, "IPSec Provisioning in WiMAX Networks to Enhance the Security", International Conference on Recent Trends in Computational Methods, Communication and Controls, 2012.',
      'G. Sivakumar, M.Kaliappan, L. Jerart Julus, "Enhancing the Performance of MANET using EESCP", International Conference on Pattern Recognition, Informatics and Medical Engineering (PRIME 2012).',
      'S. Rimlon Shibi, M. Kaliappan, L. Jerart Julus, "Analysis and Security Enhancement in Wimax Networks", Emerging Technology Trends in Advanced Engineering Research (ICEN 2012).',
      'S. Rimlon Shibi, M. Kaliappan, L. Jerart Julus, "Development of Energy Efficiency and Secure Communication Protocol in MANET", Emerging Trends in Computer & Communication Technologies (EMICS’12).',
      'S.M.R.Sreedhar Surya Prakash, S.Vinoth, M.Kaliappan, "Energy Efficient Routing Protocol Based On Grover’s Searching Algorithm For Mobile Adhoc Networks", National Conference on Recent Trends In Information Technology, 2014.',
      'J Vivek narayanan, M Kaliappan, "Automatic Polling Service in Electronic Voting Machine", National Conf. on Frontiers in Applied Sciences And Computer Technology (FACT’15).',
      'P.Bagavath, J.Subash, H.Venkatesh, M. Kaliappan, "Optimal Double Route Search for Enhancing Energy Efficiency in Mobile Adhoc Network", National Conference on Recent Issues in Network Galaxy (RING’14).',
      'T.Dhivya, M Kaliappan, "Enhancing energy efficient dynamic load balanced clustering protocol using Dynamic Genetic Algorithm in MANET", International Conference on Innovations in Communications and Computer Engineering (ICICCE’15).',
      'M.Kaliappan, R.Sujitha, P.Subbulakshmi, A.H.Ragamathu nisa begum, "Security Enhancement In MANET Using Game Theory Approach", International Conference on Advanced Computing, Machines and Embedded Technology, 2013.',
      'K. Amsaveni, M. Kaliappan, P.Subbulakshmi, Dr.D.Manimegalai, "An Energy Efficient Leader Election Model In MANET Using Mechanism Design Theory", International Conference on Advanced Computing, Machines and Embedded Technology, 2013.',
      'R.Sujitha, M.Kaliappan, P.Subbulakshmi, "A Comprehensive Survey on Security Enhancement in Mobile Adhoc Networks using Game theory Approaches", International Conference on Egovernance And Cloud Computing Services (Egov’12).',
      'K. Amsaveni, M.Kaliappan, P.Subbulakshmi, B.Paramasivan, "A Survey On Leader Election Models In Mobile Ad Hoc Networks", International Conference on Egovernance And Cloud Computing Services (Egov’12).'
    ]
  },
  anandhi: {
    name: 'Dr. S.V. ANANDHI',
    designation: 'Associate Professor – Grade II',
    department: 'Artificial Intelligence and Data Science',
    email: 'anandhi@ritrjpm.ac.in',
    secondaryEmail: 'svanandhi2020@gmail.com',
    mobile: '9486856060',
    image: '/media/faculty/305_Dr.Anandhi_Picture.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: 'With over 19 years of teaching experience, her research focuses on Image Processing, Deep Learning, and Multivariate Analysis.',
    researchAreas: ['Image Processing', 'Deep Learning', 'Multivariate Analysis'],
    socials: [],
    pdfUrl: '/media/faculty/305_AD_Dr.Anadhi_Profile.pdf',
    education: [
      { degree: 'Ph.D', field: 'Information and Communication Engineering', university: 'Anna University, Chennai', year: '2024' },
      { degree: 'M.E', field: 'Computer Science and Engineering', university: 'Anna University, Tirunelveli', year: '2010' },
      { degree: 'B.E', field: 'Computer Science and Engineering', university: 'Anna University, Chennai', year: '2006' }
    ],
    experience: [
      { role: 'Associate Professor – Grade II', org: 'Ramco Institute of Technology, Rajapalayam', duration: '04.06.2025 - Present' },
      { role: 'Assistant Professor', org: 'Dr. Sivanthi Aditanar College of Engineering, Tiruchendur', duration: '01.06.2012 - 02.06.2025' },
      { role: 'Lecturer', org: 'Dr. Sivanthi Aditanar College of Engineering, Tiruchendur', duration: '27.07.2006 - 31.05.2012' }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 2,
      journals: 11,
      bookChapters: 0,
      conferences: 35,
      coauthors: 25,
      altmetrics: []
    },
    projects: [
      {
        title: 'Detection of disease in leaf using Image segmentation',
        agency: 'Tamil Nadu State Council for Science and Technology (TNSCST)',
        status: 'Completed',
        role: 'Guide / PI',
        budget: 'INR 7,500',
        duration: '2013 - 2014'
      }
    ],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: [
      'S. V. Anandhi, "Threshold based Forest Fire Detection in Utharkhand Region using Landsat Satellite Images", Indian Journal Of Technical Education, Volume 47, pp. 1-11, 2024.'
    ],
    conferencePubs: [
      'S.V.Anandhi, K.Kavitha, "Detecting Intrusions In Multi Tier Web Application Using Double Guard", International Conference On Recent Trends In Engineering Technology (ICRTET), CSI, 2014.'
    ]
  },
  selvabirunda: {
    name: 'Ms. S. SELVA BIRUNDA',
    designation: 'Assistant Professor',
    department: 'Artificial Intelligence and Data Science',
    email: 'sbirunda@gmail.com',
    secondaryEmail: 'selvabirunda@ritrjpm.ac.in',
    mobile: '8220082523',
    image: '/media/faculty/225_Dr.S.Selva_Birundha_1.jpeg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: 'Pursuing her Ph.D. and having over 10 years of academic experience, her research interests include Artificial Intelligence, Machine Learning, Deep Learning, and Wireless Sensor Networks.',
    researchAreas: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Wireless Sensor Networks'],
    socials: [
      { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=22Vw5jkAAAAJ&hl=en' },
      { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Selva-Birunda' },
      { label: 'ORCID ID', url: 'https://orcid.org/0000-0002-9122-5250' }
    ],
    pdfUrl: '/media/faculty/225_Ms.SSelvaBirunda-Profile.pdf',
    education: [
      { degree: 'Ph.D (Pursuing)', field: 'Computer Science and Engineering (AI & DS)', university: 'Kalasalingam Academy of Research and Education (Part Time)', year: 'Pursuing' },
      { degree: 'M.Tech', field: 'Computer Science and Engineering', university: 'Kalasalingam University', year: '2012' },
      { degree: 'B.E', field: 'Computer Science and Engineering', university: 'V.P.M.M Engineering College for Women / Anna University Chennai', year: '2010' }
    ],
    experience: [
      { role: 'Assistant Professor', org: 'Ramco Institute of Technology, Rajapalayam', duration: '03.08.2022 - Present' },
      { role: 'Assistant Professor', org: 'V.P.M.M Engineering College for Women, Srivilliputhur', duration: '15.05.2013 - 31.05.2018' }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 8,
      journals: 2,
      bookChapters: 1,
      conferences: 7,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: 'Produced 100% Result', body: 'Database Management Systems (DBMS) and Principles of Programming Languages (PPL)', year: 'Academic Achievement' }
    ],
    memberships: [],
    journalPubs: [
      'Birunda, S. S., & Devi, R. K., "Improving Energy Efficient Aspect of Spam Classification Framework using Ensemble Machine Learning", Solid State Technology, 63(5), 9032-9039, 2020.'
    ],
    conferencePubs: [
      'S. Selva Birunda, "A review on word embedding techniques for text classification", International Conference on Sentiment Analysis and Deep Learning (ICSADL \'20), 2021.'
    ]
  },
  ramnath: {
    name: 'Mr. M. RAMNATH',
    designation: 'Assistant Professor',
    department: 'Artificial Intelligence and Data Science',
    email: 'ramnath@ritrjpm.ac.in',
    secondaryEmail: 'ramnath25@gmail.com',
    mobile: '9944693617',
    image: '/media/faculty/240_ad_ram.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: 'Pursuing his Ph.D. and having over 12 years of teaching experience, his research areas include Networking, Artificial Intelligence, Machine Learning, Deep Learning, Sentiment Analysis, and Natural Language Processing.',
    researchAreas: ['Networking', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Sentiment Analysis', 'Natural Language Processing'],
    socials: [
      { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=blSpSbQAAAAJ&hl=en' },
      { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ramnath-Muthusamy-2' },
      { label: 'ORCID ID', url: 'https://orcid.org/0000-0002-9397-9320' }
    ],
    pdfUrl: '/media/faculty/240_Mr.Ramnath_AD.pdf',
    education: [
      { degree: 'Ph.D (Pursuing)', field: 'Information and Communication Engineering', university: 'Anna University', year: 'Pursuing' },
      { degree: 'M.E', field: 'Network Engineering', university: 'VelTech MultiTech Dr. Rangarajan Dr. Shakuntala Engineering College / Anna University', year: '2011' },
      { degree: 'B.Tech', field: 'Information Technology', university: 'Francis Xavier Engineering College, Tirunelveli / Anna University', year: '2009' }
    ],
    experience: [
      { role: 'Assistant Professor', org: 'Ramco Institute of Technology, Rajapalayam', duration: '05.06.2023 - Present' },
      { role: 'Assistant Professor', org: 'Thamirabharani Engineering College, Tirunelveli', duration: '23.05.2018 - 03.06.2023' },
      { role: 'Assistant Professor', org: 'JP College of Engineering, Tenkasi', duration: '04.06.2012 - 30.04.2018' },
      { role: 'Assistant Professor', org: 'St. Mother Theresa Engineering College, Tuticorin', duration: '03.06.2011 - 31.05.2012' }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 3,
      journals: 6,
      bookChapters: 0,
      conferences: 4,
      coauthors: 5,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [
      { body: 'International Computer Science and Engineering Society (ICSES)', details: 'Member ID: 39893', year: '-' },
      { body: 'International Association of Engineers (IAENG)', details: 'Member ID: 279792', year: '-' }
    ],
    journalPubs: [
      'M. Ramnath and D. Kani Jesintha, "Dynamic analysis of agent network in self-organisation using service level agreement technique", International Journal of Engineering and Science Invention, Vol. 4, Issue 3, March 2015.'
    ],
    conferencePubs: [
      'M. Ramnath, "PMG based handoff in wireless mesh networks", National Conference (NCAT\'11), 2011.'
    ]
  },
  "karpagavalli": {
    name: "MRS.C.KARPAGAVALLI. M.E.(PH.D)",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "karpagavalli@ritrjpm.ac.in",
    secondaryEmail: "ckvalli08@gmail.com",
    mobile: "9047918934",
    image: '/media/faculty/232_Karpagavalli.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "Pursuing her Ph.D. with active research interests in the Internet of Things, Artificial Intelligence, and Machine Learning, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Internet of Things", "Artificial Intelligence", "Machine Learning"],
    socials: [
      { label: 'Google Scholar', url: "https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=2&user=m_XVSXMAAAAJ" },
      { label: 'ResearchGate', url: "https://www.researchgate.net/profile/C-Karpagavalli" },
      { label: 'ORCID ID', url: "https://orcid.org/0000-0001-8073-4941" }
    ],
    pdfUrl: '/media/faculty/232_C.Karpagavalli-Bio-Data.pdf',
    education: [
      { degree: "Ph.D (Pursuing)", field: "Information and Communication Engineering", university: "Thiagarajar College of Engineering / Anna University, Chennai", year: "Pursuing" },
      { degree: "M.E", field: "Computer Science and Engineering", university: "PSR Engineering College / Anna University, Chennai", year: "2013" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "SCAD College of Engineering and Technology / Anna University, Chennai", year: "2005" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "08.12.2022 - Present" },
      { role: "Assistant Professor", org: "Amrita College of Engineering and Technology, Nagercoil", duration: "24.02.2021 - 07.12.2022" },
      { role: "Assistant Professor", org: "SCAD College of Engineering and Technology, Cheranmahadevi", duration: "26.06.2013 - 20.02.2021" }
    ],
    metrics: {
      citationsScopus: 73,
      citationsCrossRef: 65,
      hIndex: 3,
      journals: 7,
      bookChapters: 0,
      conferences: 5,
      coauthors: 10,
      altmetrics: []
    },
    projects: [],
    patents: [
      {
        title: "IoT based water quality monitoring for Textile Industry",
        inventors: "Dr.V.Priya, Dr.S.Sudhakar, Dr.S.Sharavanan, Dr.A.Vishnu Priya, Mrs.C.Karpagavalli, Dr. M.B.Suresh, Ms. K.Vidhya, Dr. Pankaj Dadheech, Mr. Gourav Purohit",
        number: "202041012885",
        status: "Published",
        date: "2020-05-08",
        filedDate: "2020-03-24",
        org: "Indian Patent Office"
      }
    ],
    honours: [
      { title: "Anna University Rank", body: "Secured Anna University 34th Rank in M.E., Computer Science and Engineering for the Academic year 2012-2013.", year: "2013" },
      { title: "Best Outgoing Student", body: "Certificate of Merit for M.E (CSE) at PSR Engineering College, Sivakasi, 2011-2013 Batch.", year: "2013" },
      { title: "Outstanding Performance", body: "Award of credit and honor for Outstanding Performance in SCAD Development Activities for the year 2015.", year: "2015" }
    ],
    memberships: [
      { body: "Computer Society of India (CSI)", details: "Member", year: "-" }
    ],
    journalPubs: [
      "C.Karpagavalli, R.Suganya, P.J.Beslin Pajila, 'Authentication Using Blockchain Novel Enhanced Authentication Algorithm', International Journal of Advanced Science and Technology, Volume. 29, No. 7, (2020), pp. 11930 – 11940.",
      "P.J.Beslin Pajila, C.Karpagavalli, G.Vijayarani, Mangaiyarkarasi.T, Madhubalashanmu.R, 'Effective way to Analyze and Rupture the Assessment using ESB Algorithm', International Journal of Recent Technology and Engineering, Volume-8 Issue-6, March 2020.",
      "P.J.Beslin Pajila, P.Jenifer, C.Karpagavalli, 'Software Defined Networking Based Protection against DDOS in IOT', International Journal of Innovative Technology and Exploring Engineering, Volume-9 Issue-5, March 2020.",
      "C.Karpagavalli, S. Sakthi selvi, V. Latha, M.Kalaiarasi, J.Epsiba, 'Enabling Identity- Based Integrity Auditing and Data Sharing with Sensitive Information Hiding for Secure Cloud Storage', Journal of Emerging Technologies and Innovative Research, April 2020, Volume 7, Issue 4.",
      "C.Karpagavalli, M. Karthika, J. Mercy, A. Kavinaya, K. Athirsta Devi, 'System modelling and performance Cloud Security Based Trust Assessment', Journal of Emerging Technologies and Innovative Research, April 2020, Volume 7, Issue 4.",
      "M.Christina Ranjitham, C.Karpagavalli, D.Asir 'Novel Technique to Protect the Stealing of Authorization Code Using Hybrid Approach', IJRESM, Volume-2, Issue-12, December-2019.",
      "C.Karpagavalli, J.Esther Rani, J.Santhiya, G.Sajitha 'Efficient Bio Signals Monitoring System using Wireless Sensors' IJESC, Volume 9, Issue No.3, 2019."
    ],
    conferencePubs: [
      "DDoS attack detection and mitigation in IoT environment via software defined network – A survey, SMART’22, St.Mother Theresa Engineering College, Tuticorin, 2022.",
      "Efficient Bio Signals and Health Monitoring System Using Wireless Sensor, ICCT’19, Jayaraj Annapackiam CSI College of Engineering, Nazareth, 2019.",
      "An Automatic Restoration Framework for Image Enhancement, ICCTRD’13, SCAD College of Engineering and Technology, Cheranmahadevi, 2013.",
      "Defect Detection and Removal of Artifacts in Photographs, NACIPAN ’13, National Engineering College, Kovilpatti, 2013.",
      "An automatic framework for image restoration and enhancement, Emerging Trends in Computing, PSR Engineering College, Sivakasi, 2012."
    ]
  },
  "sankaralakshmi": {
    name: "MRS.B.SANKARALAKSHMI B.E.M.TECH.",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "sankaralakshmi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "8939743254",
    image: '/media/faculty/272_Sankari-Photo-jpg.JPG',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Computer Science & Engineering, Nomadic Computing, Mobile Computing, and Digital Image Processing, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Nomadic Computing", "Mobile Computing", "Digital Image Processing", "Computer Science"],
    socials: [],
    pdfUrl: '/media/faculty/272_BIODATA-SankariRIT.pdf',
    education: [
      { degree: "B.Ed", field: "Computer Science", university: "Angel College of Education, Rajapalayam / TNTEU, Chennai", year: "2021" },
      { degree: "M.Tech", field: "Information Technology", university: "PSN College of Engineering and Technology / Anna University, Tirunelveli", year: "2009" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "PSN College of Engineering and Technology / Anna University, Chennai", year: "2006" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "05.06.2024 - Present" },
      { role: "Assistant Professor", org: "PSN College of Engineering and Technology, Tirunelveli", duration: "01.06.2009 - 08.02.2013" },
      { role: "Assistant Professor", org: "PSN College of Engineering and Technology, Tirunelveli", duration: "12.06.2006 - 31.08.2007" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 0,
      bookChapters: 0,
      conferences: 1,
      coauthors: 2,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "TRB Polytechnic Lecturer Selection", body: "Shortlisted for Certificate Verification for Lecturers in Government Polytechnic Colleges by Teachers Recruitment Board.", year: "2022" }
    ],
    memberships: [],
    journalPubs: ["Publications listed in the official bio-data file."],
    conferencePubs: [
      "Implementation of Multichannel Communications Using Stop-and-Wait ARQ, International Conference on Computational Systems and Communication Technology (CSCT), Einstein College of Engineering, May 2010.",
      "National Seminar on Contemporary Research Avenues in Nomadic Computing, National Engineering College, Kovilpatti, December 2009.",
      "Workshop on Challenges in Mobile Computing, Einstein College of Engineering, Tirunelveli, March 2010.",
      "Third National Seminar on Research Issues in Digital Image Processing, Mepco Schlenk Engineering College, Sivakasi, March 2010.",
      "Fourth National Seminar on Research Issues in Digital Image Processing, Mepco Schlenk Engineering College, Sivakasi, March 2011."
    ]
  },
  "anitha": {
    name: "B. ANITHA M.E.",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "anitha@ritrjpm.ac.in",
    secondaryEmail: "anithabalan.official@gmail.com",
    mobile: "9443388165",
    image: '/media/faculty/332_Anitha_Photo.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Deep Learning, Leukemia Blood Cancer Detection, Natural Language Processing, and Quantum Computing, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Deep Learning", "Medical Image Processing", "Natural Language Processing", "Quantum Computing"],
    socials: [],
    pdfUrl: '/media/faculty/332_ANITHA_PROFILE.pdf',
    education: [
      { degree: "M.E", field: "Computer Science and Engineering", university: "VV College of Engineering / Anna University", year: "2025" },
      { degree: "B.Tech", field: "Information Technology", university: "Dr. Sivanthi Aditanar College of Engineering / Anna University", year: "2023" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology, Rajapalayam", duration: "23.10.2025 - Present" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 0,
      bookChapters: 0,
      conferences: 3,
      coauthors: 2,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "Best Paper Award", body: "Received Best Paper Award at the International Conference ICETEMA 2025 organized by PET College of Engineering.", year: "2025" },
      { title: "Academic Topper", body: "Secured Academic Topper status at VV College of Engineering.", year: "2025" },
      { title: "Best Project Award", body: "Received Best Project Award at Dr. Sivanthi Aditanar College of Engineering.", year: "2023" },
      { title: "Quantum Computing Certification", body: "Completed 'Quantum Computing' certification course by CDAC & IIT Rookie (Meity).", year: "2025" },
      { title: "NLP Master Class", body: "Completed 21-day Master Class on Natural Language Processing by Pantech e Learning.", year: "2024" },
      { title: "Advanced Python Master Class", body: "Completed 21-day Master Class on Advanced Python Programming by Pantech e Learning.", year: "2024" },
      { title: "Raspberry Pi Master Class", body: "Completed 21-day Master Class on Raspberry Pi by Pantech e Learning.", year: "2024" }
    ],
    memberships: [],
    journalPubs: [],
    conferencePubs: [
      "Acute Lymphoblastic Leukemia Detection and Classification using Deep CNN and ML classifiers, International Conference on Emerging Trends in Engineering, Management and Applications (ICETEMA-2K25), PET College of Engineering, Vallioor, April 2025.",
      "Leukemia blood cancer detection using convolutional neural network (CNN), National Grand Research Competition (NGRC 2025), DMI College of Engineering, Aralvaimozhi, May 2025.",
      "Deep learning based leukemia detection, National Conference on Pure and Discrete Mathematics, St. John’s College, Tirunelveli, February 2025."
    ]
  },
  "dhanalakshmi": {
    name: "DHANALAKSHMI K",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "dhanalakshmi@ritrjpm.ac.in",
    secondaryEmail: "ishwaryaranju1999@gmail.com",
    mobile: "9789288508",
    image: '/media/faculty/333_Dhanalakshmi_Photo.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Edge Computing, Cloud Storage Security, and Android Mobile Application Development, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Edge Computing", "Cloud Storage Security", "Android App Development"],
    socials: [],
    pdfUrl: '/media/faculty/333_Dhanalakshmi_Profile.pdf',
    education: [
      { degree: "M.E", field: "Computer Science and Engineering", university: "P.S.R. Engineering College / Anna University, Chennai", year: "2025" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "P.S.R.Rengasamy College of Engineering for women / Anna University, Chennai", year: "2021" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "03.09.2025 - Present" },
      { role: "System Admin", org: "P.S.R. Engineering College, Sivakasi", duration: "01.09.2021 - 30.06.2023" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 1,
      bookChapters: 0,
      conferences: 0,
      coauthors: 2,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "Android App Development Certification", body: "Completed Android App Development training program at Soft Skill Technology.", year: "2020" },
      { title: "Dot Net Framework Training", body: "Completed Dot Net Framework 4.5 (C#) and SQL Server 2005 training at Iconix Software Solution.", year: "2020" },
      { title: "Uniq Android Training", body: "Completed Android App Development training program at Uniq Technologies.", year: "2020" },
      { title: "Web Developing Program", body: "Completed Web Developing Program at Iconix Software Solution.", year: "2020" }
    ],
    memberships: [],
    journalPubs: [
      "Dhanalakshmi K, 'An Approach for Enhancing Security of Data using Edge Computing for Cloud Storage', Journal of Huazhong University of Science and Technology, Volume 50, Issue 03, March 2021."
    ],
    conferencePubs: []
  },
  "revathi": {
    name: "MRS. B.REVATHI M.E.",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "revathib@ritrjpm.ac.in",
    secondaryEmail: "revas85@gmail.com",
    mobile: "9751855561",
    image: '/media/faculty/224_revathi-1.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "Pursuing her Ph.D. with active research interests in Machine Learning and Deep Learning, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Machine Learning", "Deep Learning"],
    socials: [
      { label: 'Vidwan Profile', url: "https://vidwan.inflibnet.ac.in/profile/290637" },
      { label: 'Google Scholar', url: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=0ybnsisAAAAJ" },
      { label: 'ResearchGate', url: "https://www.researchgate.net/profile/B-Revathi-3" },
      { label: 'ORCID ID', url: "https://orcid.org/0000-0001-6444-7395" }
    ],
    pdfUrl: '/media/faculty/_B.Revathi-Biodata-21.10.2024.pdf',
    education: [
      { degree: "Ph.D (Pursuing)", field: "Electronics and Communication Engineering", university: "Anna University, Chennai", year: "Pursuing" },
      { degree: "M.E", field: "Computer & Communication", university: "National Engineering College, Kovilpatti", year: "2014" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "Mepco Schlenk Engineering College, Sivakasi", year: "2011" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "28.07.2022 - Present" },
      { role: "Assistant Professor", org: "Mangayarkarasi College of Engineering, Madurai", duration: "06.01.2017 - 30.06.2022" }
    ],
    metrics: {
      citationsScopus: 51,
      citationsCrossRef: 45,
      hIndex: 4,
      journals: 10,
      bookChapters: 0,
      conferences: 12,
      coauthors: 14,
      altmetrics: []
    },
    projects: [],
    patents: [
      {
        title: "System And Model For Clinical Decision Support System For Risk Categorization Using Machine Learning",
        inventors: "M. Ramnath, S. Selva Birunda, B. Revathi",
        number: "202341084874",
        status: "Filed & Published",
        date: "2023-12-12",
        filedDate: "2023-12-12",
        org: "RAMCO INSTITUTE OF TECHNOLOGY"
      }
    ],
    honours: [],
    memberships: [
      { body: "IAENG", details: "Life Member (251514)", year: "-" },
      { body: "ISTE", details: "Life Member (LM 135797)", year: "-" }
    ],
    journalPubs: [
      "B.Revathi, C.UshaRani, 'Rainfall Prediction Using Machine Learning Classification Algorithms', International Journal of Creative Research Thoughts, Volume: 09, Issue No: 01, Jan 2021.",
      "B.Revathi, S.Sameera Begum, S.Kalaivani, M.Akshaya 'An Optimization Framework for Mortality Predictions in Imbalanced High-Dimensional ICU Big data', International Research Journal of Modernization In Emerging Technology and Science, Volume: 02, Issue No: 03, March 2020.",
      "B.Revathi, S.Elancheelan, R. Sathish, 'Detection of disorders in Plant Leaf using Machine Learning', International Research Journal of Modernization In Emerging Technology and Science, Volume: 02, Issue No: 03, March 2020.",
      "P.Anushya, P.Jothilakshimi, S.Pavithra, B.Revathi 'New Approach from K-Nearest Neighbor Data Classification', Seventh Sense Research Group, March 2019.",
      "K.Nagalakshmi, P.Nanthini, A.Saranya, B.Revathi, 'Detect fake identities Using Machine Learning', Seventh Sense Research Group, March 2019.",
      "B.Revathi, S.Chidambaram, 'Sequential Covering Strategy Based classification Approach Using Ant Colony Optimization', International Journal of Innovative Research in Science, Engineering and Technology (Scopus Indexed), Volume: 03, Issue No: 03, March 2014.",
      "Selva Birunda S, Nagaraj P, Jency A Jebamani B, Revathi B, 'A Structured Analysis on IPL 2022 matches by approaching various Data Visualization and Analytics', 2023 International Conference on Computer Communication and Informatics (ICCCI), Coimbatore, India, 2023.",
      "Revathi B, Kezial Elizabeth. S. K, Nagaraj P, Selva Birunda S, Nithya.D, 'Particle Swarm Optimization based Detection of Diabetic Retinopathy using a Novel Deep CNN', 2023 third IEEE International Conference on Artificial Intelligence and Smart Energy (ICAIS), Coimbatore, India, 2023.",
      "Revathi, B., Usharani, C., Elizabeth, S. K., Nagaraj, P., & Nithya, D. (2024, April). Deep Learning Classification Techniques on Detecting Diabetic Retinopathy Dataset. 2024 International Conference on Inventive Computation Technologies (ICICT).",
      "Usharani C, Revathi, B., Selvapandian, A., & Elizabeth, S. K. (2024). Lung Cancer Detection in CT Images Using Deep Learning Techniques: A Survey Review. EAI Endorsed Transactions on Pervasive Health and Technology."
    ],
    conferencePubs: [
      "Sequential Covering Strategy Based classification Approach Using Ant Colony Optimization, ICIET’14, K.L.N College of Engineering, Madurai, 2014.",
      "Detect Fake Identities Using Machine Learning, ICTER’19, Mangayarkarasi College of Engineering, Madurai, 2019.",
      "New Approach from K-Nearest Neighbor Data Classification, ICTER’19, Mangayarkarasi College of Engineering, Madurai, 2019.",
      "Emergency Vehicle Assistance Using Android Application, ICRACIA’21, Kumarasamy College of Engineering, Karur, 2021.",
      "A Structured Analysis on IPL 2022 matches by approaching various Data Visualization and Analytics, ICCCI, Sri Shakthi Institute of Engineering and Technology, 2023.",
      "Particle Swarm Optimization based Detection of Diabetic Retinopathy using a Novel Deep CNN, ICAIS, JCT College of Engineering, 2023.",
      "Analysis of Breast Cancer Using Novel Machine and Deep Learning Approach, ICRTICT’24, St. Peter’s College of Engineering and Technology, 2024.",
      "Improving Classification Accuracy using feature Selection Techniques, VISION’14, Government College of Engineering, Tirunelveli, 2014.",
      "Robotics, Artificial Intelligence and Machine Learning, RVS Educational Trust’s Group of Institutions, Dindugul, 2019.",
      "Detection of disorders in Plant Leaf using Machine Learning, SCAC’20, PSNA College of Engineering, Dindugul, 2020.",
      "An Optimization Framework for Mortality Predictions in Imbalanced High-Dimensional ICU Big data, SCAC’20, PSNA College of Engineering, Dindugul, 2020.",
      "IOT Enabled Automated Effective Incubator System with sub Bug System for child caring, NCRTCS’24, SRM Madurai College of Engineering and Technology, Madurai, 2024."
    ]
  },
  "usharani": {
    name: "MRS.C.USHARANI M.E.",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "usharanic@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "7845840338 / 9751653478",
    image: '/media/faculty/239_usharani_AD.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "Pursuing her Ph.D. with active research interests in Deep Learning and Federated Learning, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Deep Learning", "Federated Learning"],
    socials: [
      { label: 'Vidwan Profile', url: "https://vidwan.inflibnet.ac.in/profile/390511" },
      { label: 'ResearchGate', url: "https://www.researchgate.net/profile/Usharani-c" },
      { label: 'ORCID ID', url: "https://orcid.org/0009-0009-1075-7019" }
    ],
    pdfUrl: '/media/faculty/_C.USHARANI_BIODATA-1.pdf',
    education: [
      { degree: "Ph.D (Pursuing)", field: "Information and Communication Engineering", university: "Anna University, Chennai", year: "Pursuing" },
      { degree: "M.E", field: "Computer Science and Engineering", university: "K.L.N College of Information Technology, Sivagangai / Anna University, Chennai", year: "2015" },
      { degree: "B.Tech", field: "Information Technology", university: "Velammal College of Engineering, Madurai / Anna University, Chennai", year: "2012" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "17.05.2023 - Present" },
      { role: "Assistant Professor", org: "Mangayarkarasi College of Engineering, Madurai", duration: "03.07.2019 - 31.03.2023" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 4,
      bookChapters: 0,
      conferences: 7,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "Anna University Rank", body: "Secured Anna University 41st Rank in M.E., Computer Science and Engineering for the Academic year 2014-2015.", year: "2015" },
      { title: "School First Rank", body: "Secured School first in SSLC and received best student award.", year: "2008" }
    ],
    memberships: [
      { body: "IAENG", details: "Member (253446)", year: "-" }
    ],
    journalPubs: [
      "B. Revathi, C. Usharani, S. K. Kezial Elizabeth, N. P and D. Nithya, 'Deep Learning Classification Techniques on Detecting Diabetic Retinopathy Dataset', 2024 International Conference on Inventive Computation Technologies (ICICT), Lalitpur, Nepal, 2024.",
      "C.Usharani, B.Revathi, A.Selvapandian, & S.K.Elizabeth, 'Lung Cancer Detection in CT Images Using Deep Learning Techniques: A Survey Review', EAI Endorsed Transactions on Pervasive Health and Technology, 10, 2024.",
      "I. Anantraj, B. Umarani, C. Karpagavalli, C.Usharani and S. J. Lakshmi, 'Quantum Computing\\'s Double-Edged Sword Unravelling the Vulnerabilities in Quantum Key Distribution for Enhanced Network Security', 2023 International Conference on Next Generation Electronics (NEleX), Vellore, India, 2023.",
      "B.Revathi, C.Usharani, 'Rainfall Prediction Using Machine Learning Classification Algorithms', International Journal of Creative Research Thoughts, Volume: 09, Issue No: 01, Jan 2021."
    ],
    conferencePubs: [
      "IOT Enabled Automated Effective incubator system with sub bag system for child caring, NCON’24, SRM Madurai College of Engineering and Technology, 2024.",
      "Automatic Detection of Covid 19 Lung infection in CT images, ICRACIA’21, Kumarasamy College of Engineering, Karur, 2021.",
      "Conference Presentation, SCAC’20, PSNA college of Engineering and Technology, Dindigul, 2020.",
      "Augmented Reality and deep learning with its application in medical diagnosis, ICITR’19, Karpagam College of Engineering, Coimbatore, 2019.",
      "Optimized of energy and Message Overheads in WSN Using Grid Communication, ICIESMS’15, Vickram College of Engineering, Enathi, 2015.",
      "Analysis of Data mining Techniques, ICETET, 14, Pandian Saraswathi Yadhav Engineering College, Sivagangai, 2014.",
      "Survey on Tree Clustered structured based Data aggregation Techniques in WSN, ICDASDC’14, K.L.N. College of Information Technology, Sivagangai, 2014."
    ]
  },
  "muthueshwaran": {
    name: "MR. R. MUTHU ESHWARAN M.E. (PH.D.)",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "muthueshwaran@ritrjpm.ac.in",
    secondaryEmail: "mailtorme@gmail.com",
    mobile: "+91-7092884289",
    image: '/media/faculty/299_AD_MuthuEshwaran.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Artificial Intelligence, Machine Learning, and Deep Learning, he contributes to engineering education and advanced research projects.",
    researchAreas: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
    socials: [
      { label: 'Google Scholar', url: "https://scholar.google.com/citations?user=N0DVC7YAAAAJ&hl=en" },
      { label: 'ORCID ID', url: "https://orcid.org/0000-0002-4303-5428" }
    ],
    pdfUrl: '/media/faculty/_MUTHUESHWARANR_faculty_profile.pdf',
    education: [
      { degree: "Ph.D (pursuing)", field: "Information and Communication Engineering", university: "Anna University", year: "Pursuing" },
      { degree: "M.E", field: "Computer Science and Engineering", university: "Kamaraj College of Engineering and Technology, Virudhunagar", year: "2023" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "Kamaraj College of Engineering and Technology, Virudhunagar", year: "2020" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "14.08.2024 - Present" },
      { role: "Assistant Professor", org: "AAA College of Engineering and Technology, Sivakasi", duration: "07.06.2024 - 13.08.2024" }
    ],
    metrics: {
      citationsScopus: 121,
      citationsCrossRef: 110,
      hIndex: 4,
      journals: 4,
      bookChapters: 0,
      conferences: 2,
      coauthors: 9,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "NPTEL Soft Skills Elite", body: "Completed NPTEL Online Certification Course on 'Soft Skills' and secured Elite Certificate.", year: "2023" },
      { title: "Infosys DL Certification", body: "Completed 'Deep Learning for Developers' certification course on Infosys Springboard.", year: "2023" }
    ],
    memberships: [
      { body: "International Association of Engineers (IAENG)", details: "Member ID: 376815", year: "-" }
    ],
    journalPubs: [
      "R. Muthu Eshwaran, 'Harnessing the Potential of Bellamya eburnea Shell-Derived Nanoparticles Through Electro-mechanical Optimization in the Performance of PCL Bio-composites: A Green Insulation Revolution', Waste and Biomass Valorization, Springer Netherlands, Vol. 15, Issue 4, September 2023.",
      "R. Muthu Eshwaran, 'Multi-analytical investigation of the physical, chemical, morphological, tensile, and structural properties of Indian mulberry (Morinda tinctoria) bark fibers', Heliyon, Elsevier, Vol. 9, Issue 11, November 2023.",
      "R. Muthu Eshwaran, 'Comparative investigation of imaging techniques, pre-processing and visual fault diagnosis using artificial intelligence models for solar photovoltaic system – A comprehensive review', Measurement, Elsevier, Vol. 232, June 2024.",
      "R. Muthu Eshwaran, 'Energy Monitoring for Renewable Energy System Using Machine Learning Algorithms', Recent Advances in Electrical & Electronic Engineering, Bentham Science, Vol. 17, Issue 10, October 2023."
    ],
    conferencePubs: [
      "Assortment of influencing parameters for bifacial solar photovoltaic module with ecofriendly reflective material using Placket Burman approach, First International Conference on Research and Innovation (IECRI 2022), Delta University, Egypt, November 2022.",
      "A technical review on the Short term load forecasting using Machine Learning Algorithms, National Conference on Industry 5.0: Emerging Technology to Transform the Globe (NCCI 2023), NITTTR Chennai, April 2023."
    ]
  },
  "angelhepzibah": {
    name: "MRS. R. ANGEL HEPZIBAH M.E.",
    designation: "Assistant Professor – Grade II",
    department: "Artificial Intelligence and Data Science",
    email: "angel@ritrjpm.ac.in",
    secondaryEmail: "rangelhepzibah@gmail.com",
    mobile: "9025464900",
    image: '/media/faculty/297_AD_ANGEL.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "Pursuing her Ph.D. with over 18 years of academic experience, her research interests include the Internet of Things, Wireless Sensor Networks, and Computer Networking.",
    researchAreas: ["Internet of Things", "Wireless Sensor Networks", "Networking"],
    socials: [
      { label: "Vidwan ID: 489957", url: "https://ritrjpm.irins.org/profile/489957" }
    ],
    pdfUrl: '/media/faculty/_Mrs.R.AngelHepzibah_faculty_profile.pdf',
    education: [
      { degree: "Ph.D (Pursuing)", field: "Information and Communication Engineering", university: "Anna University, Chennai", year: "Pursuing" },
      { degree: "M.E", field: "Computer Science and Engineering", university: "Anna University, Trichy", year: "2010" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "CSI Institute of Technology, Thovalai", year: "2005" }
    ],
    experience: [
      { role: "Assistant Professor – Grade II", org: "Ramco Institute of Technology, Rajapalayam", duration: "09.08.2024 - Present" },
      { role: "Assistant Professor", org: "Jayaraj Annapackiam CSI College of Engineering, Nazareth", duration: "03.08.2009 - 08.08.2024" },
      { role: "Lecturer", org: "Infant Jesus College of Engineering, Keelavallanadu", duration: "09.01.2007 - 22.07.2009" },
      { role: "Lecturer", org: "Dr. G. U. Pope College of Engineering, Sawyerpuram", duration: "30.01.2006 - 08.01.2007" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 14,
      bookChapters: 0,
      conferences: 3,
      coauthors: 12,
      altmetrics: []
    },
    projects: [],
    patents: [
      {
        title: "Blockchain Based Secure Communication Protocol for IOT Device",
        inventors: "Dr. N. Nisha Rosebel, Mrs. B. Jafny Benshia, Mrs. R. Angel Hepzibah, Mrs. G. Princely Linda Mary, Mr. I. Solomon, Mrs. K. M. Annammal, Mrs. A. Jenifus Selvarani & Mr. J. Viniston Suthahar",
        number: "202441078478",
        status: "Published",
        date: "2024-10-25",
        filedDate: "2024-10-16",
        org: "RAMCO INSTITUTE OF TECHNOLOGY"
      }
    ],
    honours: [],
    memberships: [],
    journalPubs: [
      "Dr. E. Mariappan, Mr. D. Asir, Mrs. R. Angel Hepzibah, Dr. S. Ramasamy, Prof. A. George Klington, 'A Review Paper on Web of Things & its Smart Applications', Journal of Information and Computational Science, Volume 12 – Issue 4 2022 (ISSN:1548 – 7741)",
      "Mrs. R. Angel Hepzibah, Dr. Roselin, Dr. E. Mariappan, Mr. D. Asir and Dr. S. Ramasamy, 'A Survey of Privacy in Internet of Things', Journal of Information and Computational Science, Volume 12 – Issue 4 2022 (ISSN:1548 – 7741)",
      "Dr. E. Mariappan, Mr. D. Asir, Mrs. R. Angel Hepzibah, Prof. A. George Klington and Mrs. R. Kavitha, 'A survey on IoT: Security Threats and Solution Architectures', Journal of Information and Computational Science, Volume 12 – Issue 4 2022 (ISSN:1548 – 7741)",
      "Mrs. R. Angel Hepzibah, Dr. S. Ramasamy, Dr. E. Mariappan, Mr. D. Asir and Prof. George Klington, 'Overview on Internet of Things', Journal of Information and Computational Science, Volume 12 – Issue 4 2022 (ISSN:1548 – 7741)",
      "Dr. E. Mariappan, Mr. D. Asir, Mrs. R. Angel Hepzibah, Dr. S. Ramasamy and Prof. George Klington, 'Data Integration on Sematic Web Technologies', Journal of Information and Computational Science, Volume 12 – Issue 4 2022 (ISSN:1548 – 7741)",
      "Dr. E. Mariappan, Mr. D. Asir, Mrs. R. Angel Hepzibah, Prof. A. George Klington and Mrs. C. Thangam, 'Enhancing the Lifetime of Wireless Sensor Network using Efficient Clustering Methods', Journal of Information and Computational Science, Volume 12 – Issue 4 2022 (ISSN:1548 – 7741)",
      "Dr. E. Mariappan, Mr. D. Asir, Mrs. R. Angel Hepzibah, Mrs. C. Thangam and Dr. A. Lourdes Mary, 'Model-Driven Security Policy Enforcement Framework and its Apps Deployed in Edge Servers', Journal of Information and Computational Science, Volume 12 – Issue 4 2022 (ISSN:1548 – 7741)",
      "Dr. E. Mariappan, Mr. D. Asir, Mrs. R. Angel Hepzibah, Dr. S. Ramasamy and Mrs. A. Kavitha, 'Semantic Data Integration on the Internet of Things', Journal of Information and Computational Science, Volume 12 – Issue 4 2022 (ISSN:1548 – 7741)",
      "Mrs. R. Angel Hepzibah and Dr. E. Mariappan, 'Internet of Things (IoT) – A Survey', Journal of Emerging Technologies and Innovative Research, Volume 8 – Issue 10 October 2021 (ISSN - 2349-5162)",
      "Dr. E. Mariappan, Mr. D. Asir, Dr. T. Jasperline, Dr. P. Elamparithi, Dr. A. Jegadeesh, Dr. M. Kaliappan, Mr. M. Ramnath, Mrs. R. Angel Hepzibah, 'Enhanced Solar Plant Positionain Using Moth-Flame Optimization Technique', African Journal of Biomedical Research, pp: 4405 – 4412, October 2024.",
      "Dr. Mariappan E, Dr. Anna Lakshmi A, Amala Princeton X, Vetrivel P, Dr. Ramasamy S, Angel Hepzibah R, Dr. Kaliappan, Ramnath M, 'An Examining Cluster Behaviour Analytically Using K-means, EM and K* means Algorithm', Journal of Tianjin University Science and Technology, pp: 124 – 135, Vol: 57, Issue: 10:2024.",
      "Angel Hepzibah R, Anna Lakshmi A, Mariappan E, Kaliappan M, Sugel Anandh O, Amala Princeton X, Ramnath M, Karpagavalli C, 'Dragonfly Algorithm Based Approach for Solar Power Plant Optimization in IEEE 69 -Bus Network', International Journal of Science, Mathematics and Technology Learning, Volume 32, No.2, 2024.",
      "Dr. E. Mariappan, R. Angel Hepzibah, 'Analyzing Public Opinion Through Twitter Sentiment Analysis Technique', Gradiva Review Journal, PAGE NO: 190-193, 2023.",
      "Anna Lakshmi A, Ramasamy S, Mariappan E, Kaliappan M, Ramnath M, Angel Hepzibah R, 'Maximizing Solar Energy Efficiency Through Grasshopper Algorithm-Based Site Selection(Accepted)', J. Electrical Systems Vol-Issue (2024): 1-12."
    ],
    conferencePubs: [
      "Android Application for preventing crime against women, National Conference on Innovative Computing Techniques and Applications (NCICTA – 18), March 2018",
      "Low priority Congestion control for High-Speed Networks, National Conference on Advanced VLSI, Image Processing and Communication Systems (NAVIES – 11), April 2011",
      "Optimizing the cost and increasing networks using EBRP, CSIR Sponsored National Conference on Data Mining and Image Processing. (NCDMIP’10), February 2010"
    ]
  },
  "logapriya": {
    name: "MS. V. LOGAPRIYA M.E.",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "logapriya@ritrjpm.ac.in",
    secondaryEmail: "logapriyaragavan@gmail.com",
    mobile: "9445968059",
    image: '/media/faculty/298_AD_LOGAPRIYA.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Machine Learning, Internet of Things, and Medical Image Processing, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Machine Learning", "Internet of Things", "Medical Image Processing"],
    socials: [
      { label: 'ORCID ID', url: "https://orcid.org/0009-0004-8581-3197" }
    ],
    pdfUrl: '/media/faculty/_Ms.V.Logapriya_Faculty_profile.pdf',
    education: [
      { degree: "M.E", field: "Computer Science and Engineering", university: "P.S.R. Engineering College / Anna University, Chennai", year: "2022" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "P.S.R.Rengasamy College of Engineering for Women / Anna University, Tirunelveli", year: "2019" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "31.07.2024 - Present" },
      { role: "Assistant Professor", org: "P.S.R. Engineering College, Sivakasi", duration: "01.07.2022 - 10.06.2024" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 2,
      bookChapters: 0,
      conferences: 0,
      coauthors: 2,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "University First Rank", body: "Secured 1st Rank in University examinations in M.E., Computer Science and Engineering.", year: "2022" },
      { title: "FDP Organizer", body: "Organized a Five Days Faculty Development Program under ATAL Academy.", year: "2023" }
    ],
    memberships: [],
    journalPubs: [
      "V. Logapriya, 'Skin disease detection using region based convolutional neural networks', International Research Journal of Modernization in Engineering Technology and Science, Volume 06, Number 1, January 2024.",
      "V. Logapriya, 'Effective analysis in health care monitoring system', International Journal of Creative Research Thoughts, February 2022."
    ],
    conferencePubs: []
  },
  "ramana": {
    name: "MRS.R.RAMANA M.TECH.B.TECH. PHD(PURSUING)",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "ramana@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "7558131141",
    image: '/media/faculty/284_Ramana.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Computer Vision, Deep Learning, and 3D Object Recognition, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Computer Vision", "Deep Learning", "3D Object Recognition"],
    socials: [
      { label: 'ORCID ID', url: "https://orcid.org/0000-0003-4970-2938" }
    ],
    pdfUrl: '/media/faculty/_Ramana_faculty_profile.pdf',
    education: [
      { degree: "Ph.D (pursuing)", field: "Computer Science and Engineering", university: "Kalasalingam Academy of Research and Education", year: "Pursuing" },
      { degree: "M.Tech", field: "Computer Science and Engineering", university: "Kalasalingam Academy of Research and Education", year: "2018" },
      { degree: "B.Tech", field: "Computer Science and Engineering", university: "Kalasalingam University", year: "2016" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "2024 - Present" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 5,
      bookChapters: 0,
      conferences: 3,
      coauthors: 5,
      altmetrics: []
    },
    projects: [],
    patents: [
      {
        title: 'SMART PROSTHETIC ARM USING ARTIFICIAL INTELLIGENCE AND ELECTROMYOGRAPHY SIGNALS',
        inventors: 'M. Kaliappan, S. Selva Birunda, R. Ramana',
        number: 'Patent No. 132616',
        status: 'Published',
        date: '2025-12-22',
        filedDate: '2025-12-01',
        org: 'RAMCO INSTITUTE OF TECHNOLOGY'
      }
    ],
    honours: [
      { title: "Digital Dreamz Coordinator", body: "Successfully Coordinated Digital Dreamz’ 15 at Kalasalingam University.", year: "2015" },
      { title: "Cambridge English ESOL", body: "Achieved Council of Europe Level A2 in Cambridge English Entry Level Certificate in ESOL International (Entry 2) (Business).", year: "2015" },
      { title: "ICMC Conference Organizer", body: "Organized ICMC International level conference at Kalasalingam Academy of Research and Education.", year: "2018" },
      { title: "NPTEL Certifications", body: "Completed NPTEL Certification Courses in Cloud Computing and Artificial Intelligence with 70%.", year: "2018" },
      { title: "EMC Cloud Certification", body: "Successfully completed EMC Cloud Computing Certification Course.", year: "2018" }
    ],
    memberships: [],
    journalPubs: [
      "Ramana. R, B.S.Murugan, 'YOLOv4Tiny: Bearing Angle Based Pose Estimation and Semantic Segmentation For 3D Object Detection From LiDAR Point Cloud & RGB-D Data', Wireless Personal Communications (Under Review), 2021.",
      "Ramana. R, B.S.Murugan, 'A novel model for eliminating overlapping issues in 3D object recognition using dove swarm optimization based light GBM', International Journal of Information Technology (Singapore), 2023 (Scopus Indexed).",
      "Ramana. R, B.S.Murugan, 'An Efficient Pelican Optimization based CNN BiLSTM to Detect and Classify 3D Objects', IEEE International Conference on Knowledge Engineering and Communication Systems (ICKES 2022) (Scopus Indexed).",
      "Ramana. R, B.S.Murugan, 'Detection of multiple small 3D Objects using point cloud images by ASP Network 3D Object Detection Model', Design Engineering, 2021.",
      "Selva Birunda S, Nagaraj P, Krishna Narayanan S, Muthamil Sudar K, Muneeswaran V & Ramana R, 'Fake Image Detection in Twitter using Flood Fill Algorithm and Deep Neural Networks', 12th International Conference on Cloud Computing, Data Science & Engineering (Confluence 2022) (Scopus Indexed)."
    ],
    conferencePubs: [
      "Detection of multiple small 3D objects using point cloud images by ASP Network 3D Object Detection Model, ICACST’21, Online, 2021.",
      "Virtual reality, P.E.T. Engineering College, 2017.",
      "Secure Multicast Group Communication for IOT Applications using WSN, International Conference on Emerging Trends in Computing, Communication and Automation, Srividhya College of Engineering, 2018."
    ]
  },
  "vetrivel": {
    name: "MR. P. VETRIVEL M.E.",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "vetrivel@ritrjpm.ac.in",
    secondaryEmail: "vetrilev17@gmail.com",
    mobile: "9600211610",
    image: '/media/faculty/289_Vetrivel.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Network Security, Cryptography, Internet of Things, and Deep Learning, he contributes to engineering education and advanced research projects.",
    researchAreas: ["Network Security", "Cryptography", "Internet of Things", "Deep Learning"],
    socials: [],
    pdfUrl: '/media/faculty/_Vetrivel_Profile.pdf',
    education: [
      { degree: "M.E", field: "Computer Science and Engineering", university: "Mepco Schlenk Engineering College, Sivakasi", year: "2019" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "AAA College of Engineering and Technology, Sivakasi", year: "2017" }
    ],
    experience: [
      { role: "Assistant Professor", org: "AAA College of Engineering & Technology, Sivakasi", duration: "23.06.2022 - 20.07.2024" },
      { role: "Assistant Professor", org: "Sree Sowdambika College of Engineering, Aruppukottai", duration: "02.03.2020 - 15.06.2022" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 3,
      bookChapters: 0,
      conferences: 6,
      coauthors: 3,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "BEC Vantage Certification", body: "Completed Business English Certificate Vantage (BEC Vantage) with Grade B.", year: "2017" },
      { title: "Angular Developer Certification", body: "Completed 'ANGULAR- beginner to advanced' certification program on Udemy.", year: "2020" }
    ],
    memberships: [
      { body: "International Association of Engineers (IAENG)", details: "Member ID: 325234", year: "-" }
    ],
    journalPubs: [
      "P. Vetrivel, 'An efficient centralized group key management protocol for secure multicast communication', International Journal of Scientific Research in Engineering and Management, Volume 05, Issue 03, March 2021.",
      "P. Vetrivel, 'Detection of covid-19 based on automated chest image using semantic segmentation', International Journal of Scientific Research in Engineering and Management, Volume 05, Issue 03, March 2021.",
      "P. Vetrivel, 'Secure Message Transmission Using Centralized Group Key Distribution Protocol', International Journal of Research in Applied Science and Engineering Technology, Volume 10, Issue VI, June 2022."
    ],
    conferencePubs: [
      "Certificate less public key encryption and decryption scheme, International Conference at Karpagam College of Engineering and Technology, Coimbatore, January 2019.",
      "An efficient centralized group key management protocol for secure multicast communication, International Conference at Sri Vidya College of Engineering and Technology, Virudhunagar, March 2019.",
      "Detection of Lymphoma from The Bone Marrow Microscope Images Using CNN, International Conference at AAA College of Engineering and Technology, Sivakasi, April 2023.",
      "Decentralized Voting System Using Blockchain, International Conference at AAA College of Engineering and Technology, Sivakasi, April 2023.",
      "An Enhanced Super Resolution Approach to Image Resolution Using Deep Learning, International Conference at AAA College of Engineering and Technology, Sivakasi, April 2023.",
      "Fake News Detection Using Machine Learning, International Conference at AAA College of Engineering and Technology, Sivakasi, April 2023."
    ]
  },
  "pradeepha": {
    name: "S.PRADEEPHA M.E.",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "pradeepha@ritrjpm.ac.in",
    secondaryEmail: "pradeepha@hotmail.com",
    mobile: "9488487499",
    image: '/media/faculty/285_Pradeepha.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Web Services, Semantic Web Services Discovery, Data Mining, and Mobile Application Development, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Web Services", "Semantic Web Services", "Data Mining", "Mobile Application Development"],
    socials: [],
    pdfUrl: '/media/faculty/_pradeepha.pdf',
    education: [
      { degree: "M.E", field: "Computer Science and Engineering", university: "Anna University Regional Centre, Coimbatore", year: "2014" },
      { degree: "B.Tech", field: "Information Technology", university: "Kalasalingam University", year: "2012" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.07.2024 - Present" },
      { role: "Associate Developer", org: "Access Healthcare, Chennai", duration: "15.02.2017 - 10.05.2019" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 1,
      bookChapters: 0,
      conferences: 2,
      coauthors: 2,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "IBM Certification", body: "Completed IBM certification course on TIVOLI Directory Server V6.1.", year: "2011" },
      { title: "Asp.Net Inplant Training", body: "Completed Asp.Net inplant training program at HCL Madurai.", year: "2010" },
      { title: "Web Development Training", body: "Completed Web Development inplant training program at N-Dot Technologies, Coimbatore.", year: "2010" }
    ],
    memberships: [],
    journalPubs: [
      "S.Pradeepha, 'Augmenting the SWS Discovery by Categorization of Web service', International Journal of Advanced Research in Computer Science and Technology (IJARCST), Volume 2, Issue 1, January-March 2014."
    ],
    conferencePubs: [
      "Augmenting the SWS Discovery by Categorization of Web Service, International Conference on Hi-Tech Trends in Emerging Computational Technologies (ICECT 14), Sethu Institute of Technology, 2014.",
      "Enhancing the SWS Discovery by classify the Web Services, International Conference on Simulations in Computing Nexus (ICSCN 14), Coimbatore Institute of Engineering and Technology, 2014."
    ]
  },
  "santhikala": {
    name: "MRS. M. SANTHIKALA M.E.",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    email: "santhikala@ritrjpm.ac.in",
    secondaryEmail: "santhisss1983@gmail.com",
    mobile: "9042223616",
    image: '/media/faculty/286_Santhikala.jpg',
    office: 'RIT Campus, Department of AI & DS',
    bioSummary: "With active research interests in Machine Learning, Big Data Analytics, Blockchain, and Cyber Security, she contributes to engineering education and advanced research projects.",
    researchAreas: ["Machine Learning", "Big Data Analytics", "Blockchain", "Cyber Security"],
    socials: [
      { label: 'Vidwan ID', url: "https://vidwan.inflibnet.ac.in/profile/545058" }
    ],
    pdfUrl: '/media/faculty/_santhikala_faculty_profile.pdf',
    education: [
      { degree: "M.E", field: "Computer Science and Engineering", university: "Thiruvalluvar College of Engineering and Technology, Vandavasi / Anna University", year: "2011" },
      { degree: "B.E", field: "Computer Science and Engineering", university: "Anand Institute of Higher Technology, Chennai / Anna University", year: "2009" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "05.07.2024 - Present" },
      { role: "Assistant Professor", org: "Theni Kammavar Sangam College of Technology, Theni", duration: "28.11.2022 - 01.07.2024" },
      { role: "Assistant Professor", org: "Anand Institute of Higher Technology, Chennai", duration: "19.01.2012 - 29.05.2015" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 1,
      journals: 0,
      bookChapters: 0,
      conferences: 3,
      coauthors: 2,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "Blockchain & Cryptocurrencies Certification", body: "Completed Blockchain and Cryptocurrencies certification course by Mind Luster.", year: "2024" },
      { title: "UiPath RPA Certification", body: "Completed Naan Mudhalvan Robotic Process Automation Foundation Course provided by UiPath.", year: "2024" },
      { title: "Hyperledger Fabric Fundamentals", body: "Completed Hyperledger Fabric Fundamentals (JavaScript) Program at Kerala Blockchain Academy.", year: "2024" },
      { title: "Mathematics for Computer Science", body: "Completed Mathematics for Computer Science course from Edx - University of London.", year: "2024" },
      { title: "Cyber Security Certification", body: "Completed Cyber Security certification from Tech Mahindra Foundation.", year: "2024" },
      { title: "Linear Algebra Certification", body: "Completed Linear Algebra - Foundations to Frontiers from EDX - The University of Texas Systems.", year: "2024" }
    ],
    memberships: [],
    journalPubs: [],
    conferencePubs: [
      "A study on a complete Game Testing with its approaches, Scenarios and methods, International Conference on Science and Innovative Engineering (ICSIE’16), Jawahar Engineering College, Chennai, 2016.",
      "Privacy Preserving using tuple and threshold matching in distributed systems, National Conference on Computer and Communication Infrastructure (NCCI 2011), SMK Fomra Institute of Technology, 2011.",
      "Providing authentication for Data Integrity in Wireless Sensor Network, National Conference on Frontiers of Communication and Computing (AGNICON 2013), Agni College of Technology, Chennai, 2013."
    ]
  },

  "sdharmar": {
    name: "DR.S.DHARMAR",
    designation: "Professor & Head",
    department: "Department of Civil Engineering",
    email: "dharmar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/181_Dharmar.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor & Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gkarthikeyan": {
    name: "DR.G.KARTHIKEYAN",
    designation: "Associate Professor Grade - III",
    department: "Department of Civil Engineering",
    email: "karthikeyang@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/117_Mr.G.Karthikeyan.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D. (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor Grade - III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mindhumathi": {
    name: "DR.M.INDHUMATHI",
    designation: "Associate Professor",
    department: "Department of Civil Engineering",
    email: "indhumathi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/204_dr.indhumathim.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "tchockalingam": {
    name: "DR.T.CHOCKALINGAM",
    designation: "Associate Professor Grade - I",
    department: "Department of Civil Engineering",
    email: "chockalingam@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/120_Mr.T.Chockalingam.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Ph.D. (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor Grade - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "csubha": {
    name: "DR.C.SUBHA",
    designation: "Assistant Professor (SG)",
    department: "Department of Civil Engineering",
    email: "subha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/118_Mrs.C.Subha.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor (SG)", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rkalaimani": {
    name: "MRS.R.KALAIMANI",
    designation: "Assistant Professor Grade - II",
    department: "Department of Civil Engineering",
    email: "kalaimani@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/123_Mrs.R.Kalaimani.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor Grade - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rmuruganantham": {
    name: "MR.R.MURUGANANTHAM",
    designation: "Assistant Professor Grade - II",
    department: "Department of Civil Engineering",
    email: "murugananthamr@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/124_Mr.R.Muruganantham.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor Grade - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "amanickamamallan": {
    name: "MR.A.MANICKA MAMALLAN",
    designation: "Assistant Professor Grade - II",
    department: "Department of Civil Engineering",
    email: "manickamamallan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/126_Mr.A.ManickaMamallan.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor Grade - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "aleemamargret": {
    name: "MRS.A.LEEMA MARGRET",
    designation: "Assistant Professor Grade - II",
    department: "Department of Civil Engineering",
    email: "leemamargret@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/201_Leeema.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor Grade - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "vragavan": {
    name: "MR.V.RAGAVAN",
    designation: "Assistant Professor Grade - II",
    department: "Department of Civil Engineering",
    email: "vragavan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/200_Ragavan.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor Grade - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "bbharanibaanu": {
    name: "MRS. B. BHARANI BAANU",
    designation: "Assistant Professor",
    department: "Department of Civil Engineering",
    email: "bharanibaanu@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/293_bharani_b.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "vjeevanantham": {
    name: "MR.V.JEEVANANTHAM",
    designation: "Assistant Professor",
    department: "Department of Civil Engineering",
    email: "jeevanantham@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/294_Jeeva_V1.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "erbmuthukumarasamy": {
    name: "ER. B. MUTHUKUMARASAMY",
    designation: "Adjunct Faculty",
    department: "Department of Civil Engineering",
    email: "absmuthukumar@gmail.com",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/civil/Faculty_Profile/269_Er.B.Muthukumarasamy.jpg",
    office: "RIT Campus, Department of Civil Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E. (Civil) M.E.(Struct)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Adjunct Faculty", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kvijayalakshmi": {
    name: "DR.K.VIJAYALAKSHMI",
    designation: "Professor & Head",
    department: "Department of Computer Science and Engineering",
    email: "vijayalakshmik@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/102_faculty-cse.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor & Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mpandi": {
    name: "DR.M.PANDI",
    designation: "Professor",
    department: "Department of Computer Science and Engineering",
    email: "mpandi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/307_Pandi_M.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.E., Ph.D (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mswarnasudha": {
    name: "DR.M.SWARNA SUDHA",
    designation: "Associate Professor II",
    department: "Department of Computer Science and Engineering",
    email: "swarna@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/128_csestaff4.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D. (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "bvijayalakshmi": {
    name: "DR.B.VIJAYALAKSHMI",
    designation: "Associate Professor - II",
    department: "Department of Computer Science and Engineering",
    email: "vijayalakshmib@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/109_csestaff7.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Ph.D. (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "igethziahilapoornima": {
    name: "DR. I GETHZI AHILA POORNIMA",
    designation: "Associate Professor II",
    department: "Department of Computer Science and Engineering",
    email: "gethzi@ritrjpm.acin",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/209_GETHZI.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D (Anna University, Chennai).", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "asivaneshkumar": {
    name: "DR.A.SIVANESH KUMAR",
    designation: "Associate Professor - III",
    department: "Department of Computer Science and Engineering",
    email: "sivaneshkumar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/308_Sivaneshkumar_A.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.Tech., M.B.A., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor - III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "spoornam": {
    name: "DR.S.POORNAM",
    designation: "Associate Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "poornam@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/309_Poornam.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.E., Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kvigneshsaravanan": {
    name: "DR.K.VIGNESH SARAVANAN",
    designation: "Assistant Professor -III",
    department: "Department of Computer Science and Engineering",
    email: "vigneshk@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/116_Vignesh.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.Tech., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor -III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "smanjula": {
    name: "MS.S.MANJULA",
    designation: "Assistant Professor II",
    department: "Department of Computer Science and Engineering",
    email: "manjula@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/114_csestaff12.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kjeyakarthika": {
    name: "MRS.K.JEYAKARTHIKA",
    designation: "Assistant Professor - II",
    department: "Department of Computer Science and Engineering",
    email: "jeyakarthika@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/257_JEYAKARTHIKAK2.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.Tech.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kbalakarthik": {
    name: "MR.K.BALAKARTHIK",
    designation: "Assistant Professor - II",
    department: "Department of Computer Science and Engineering",
    email: "balakarthik@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/312_Balakarthik.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.Tech., Pursing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gsakthipriya": {
    name: "MS. G. SAKTHI PRIYA",
    designation: "Assistant Professor I",
    department: "Department of Computer Science and Engineering",
    email: "sakthipriya@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/198_gspriya1.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kjeyageetha": {
    name: "MS.K.JEYAGEETHA",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "jeyageetha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/233_kjg.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "svijayaamaladevi": {
    name: "MRS. S. VIJAYA AMALA DEVI",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "amaladevi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/256_vadevi.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mdhivya": {
    name: "MRS.M.DHIVYA",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "dhivyam@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/264_Dhivya_CSE.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "pdevisri": {
    name: "MRS. P. DEVISRI",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "devisri@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/279_devisri_1.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "asofiathangamary": {
    name: "MRS.A.SOFIA THANGA MARY",
    designation: "Assistant Professor",
    department: "Department of Computer Science and Engineering",
    email: "sofia@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/258_Sophia.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "BE., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mrrbalamurugan": {
    name: "MR R.BALA MURUGAN",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "balamurugan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/281_bala_1.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.Tech.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kpriya": {
    name: "MRS.K.PRIYA",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "priyak@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/280_PriyaK.png",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mrsrmadhu": {
    name: "MRS R.MADHU",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "madhu@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/282_madhu_1.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.Tech.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "prajarajeswari": {
    name: "MS.P.RAJARAJESWARI",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "rajarajeswari@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/300_pr_profile.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ckrishnakala": {
    name: "MRS. C. KRISHNAKALA",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "krishnakala@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/304_krishnakala-1.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D. (KARE)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "sshunmugapriya": {
    name: "MRS.S.SHUNMUGA PRIYA",
    designation: "Assistant Professor-I",
    department: "Department of Computer Science and Engineering",
    email: "shunmugapriya@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/310_Shanmugapriya.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "MCA., M.E., Pursing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "vvivek": {
    name: "MR.V.VIVEK",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "vvivek@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/311_Vivek_V.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "marunthathi": {
    name: "MRS.M.ARUNTHATHI",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "arunthathi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/313_Arunthathi.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mmahalakshmi": {
    name: "MS. M. MAHALAKSHMI",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "mahalakshmi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/314_Mahalakshmi.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "snandhini": {
    name: "MS.S.NANDHINI",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "nandhini@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/315_Nandhini_S.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mdeepalakshmi": {
    name: "MRS. M.DEEPA LAKSHMI",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "deepalakshmim@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/321_Deepa_Lakshmi.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.Tech.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gkanmani": {
    name: "MRS.G.KANMANI",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "kanmani@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/325_kanmani1.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rlatha": {
    name: "MRS. R.LATHA",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "rlatha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/335_Latha_CSE.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "psabeenaburvin": {
    name: "MRS.P.SABEENA BURVIN",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Engineering",
    email: "sabeena@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/334_1sabeena.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.Tech.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ramanujamsoundararajan": {
    name: "MR. RAMANUJAM SOUNDARARAJAN",
    designation: "Adjunct Faculty",
    department: "Department of Computer Science and Engineering",
    email: "ramanujam.soundararajan@al-enterprise.com",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/cse/Faculty_Profile/306_mr_ramanujam-1.jpg",
    office: "RIT Campus, Department of Computer Science and Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E. (Senior Technical Manager, Asia Pacific and Middle East Asia, Alcatel-Lucent India Pvt. Ltd., Bangalore)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Adjunct Faculty", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "skannanboyscastfellow": {
    name: "DR.S.KANNAN, BOYSCAST FELLOW",
    designation: "Professor & Head",
    department: "Department of Electrical and Electronics Engineering",
    email: "kannan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "94424 40249",
    image: "/media/eee/Faculty_Profile/131_faculty-eee1.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Professor and Head of the Department of Electrical and Electronics Engineering, a BOYSCAST Fellow (DST, Govt. of India) who pursued his fellowship at Iowa State University, USA. His research interest lies in Power System Engineering, and he is a Fellow of the Institution of Engineers (India) and Senior Member of IEEE.",
    researchAreas: ["Power System Engineering", "Generation Expansion Planning", "Multicriteria Decision Making"],
    socials: [
      { label: "Vidwan ID", url: "https://ritrjpm.irins.org/profile/168529" },
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?user=oOIZsUEAAAAJ&hl=en" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/Dr.S.Kannan_Bio_data_02.04.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Madurai Kamaraj University", year: "1991" },
      { degree: "M.E.", field: "Electrical and Electronics Engineering", university: "Madurai Kamaraj University", year: "1998" },
      { degree: "Ph.D.", field: "Power System Engineering", university: "Madurai Kamaraj University", year: "2005" },
      { degree: "PDF (BOYSCAST Fellowship)", field: "Power System Engineering", university: "Iowa State University, Ames, Iowa, USA", year: "2007" }
    ],
    experience: [
      { role: "Professor & Head, Dept. of EEE", org: "Ramco Institute of Technology, Rajapalayam", duration: "09.06.2014 - Till date" },
      { role: "Sr. Professor, Dept. of EEE", org: "Kalasalingam University, Krishnankoil", duration: "01.09.2012 - 07.06.2014" },
      { role: "Dean (Admissions & Student Affairs)", org: "Kalasalingam University, Krishnankoil", duration: "01.07.2012 - 07.10.2013" },
      { role: "Professor, Dept. of EEE", org: "Kalasalingam University, Krishnankoil", duration: "01.01.2008 - 31.08.2012" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "Special Appreciation as Coordinator, SRMC Mathematical Competition", body: "Coordinated the Srinivasa Ramanujam Mathematical Competitions for school students in Virudhunagar District.", year: "2021-22" },
      { title: "100% Result Award", body: "Recognized for producing 100% results in December-January.", year: "2019" }
    ],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Life Member (LM 28384)", year: "2000" },
      { body: "Institution of Engineers (India)", details: "Fellow (F-115344-3); Chartered Engineer (India)", year: "2010" },
      { body: "IEEE, USA", details: "Senior Member (No. 80760671), Power Engineering Society", year: "2007" },
      { body: "Institution of Electronics and Telecommunication Engineers", details: "Fellow (F-209728)", year: "2009" }
    ],
    journalPubs: [
      "S. Kannan, S. Jawahar, S. Mary Raja Slochanal and Narayana Prasad Padhy, 'Generation expansion planning with power flow constraints-Evolutionary strategy approach', Water and Energy International Journal, Vol. 60, No. 3, pp. 37-44, 2003.",
      "Refer to the official faculty profile document for the complete list of publications."
    ],
    conferencePubs: []
  },
  "kkarthikeyan": {
    name: "DR.K.KARTHIKEYAN",
    designation: "Professor",
    department: "Department of Electrical and Electronics Engineering",
    email: "karthikeyank@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "97900 61900",
    image: "/media/eee/Faculty_Profile/132_faculty-eee2.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Professor in the Department of Electrical and Electronics Engineering, an IUCEE certified International Engineering Educator, Tessolve certified STE Trainer, and an Anna University recognized Research Supervisor. Research interests span Generation Expansion Planning, Power System Optimization, Computational Intelligence, Machine Learning and Deep Learning, with 28 journal publications and 12 conference publications.",
    researchAreas: ["Generation Expansion Planning", "Power System Optimization", "Computational Intelligence", "Machine Learning & Deep Learning"],
    socials: [
      { label: "Vidwan ID", url: "https://ritrjpm.irins.org/profile/168527" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=WWgd0YQAAAAJ" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-4720-6060" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/Dr.%20K.%20Karthikeyan%20Profile%2001%2004%202026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Arulmigu Kalasalingam College of Engineering, Madurai Kamaraj University", year: "2002" },
      { degree: "M.E.", field: "High Voltage Engineering", university: "Jadavpur University", year: "2007" },
      { degree: "Ph.D.", field: "Power System Engineering (Generation Expansion Planning)", university: "Kalasalingam University", year: "2017" }
    ],
    experience: [
      { role: "Professor, Dept. of EEE", org: "Ramco Institute of Technology", duration: "01.02.2024 - Till date" },
      { role: "Associate Professor, Dept. of EEE", org: "Ramco Institute of Technology", duration: "01.06.2018 - 31.01.2024" },
      { role: "Assistant Professor (Senior Grade), Dept. of EEE", org: "Ramco Institute of Technology", duration: "01.07.2017 - 31.05.2018" },
      { role: "Assistant Professor, Dept. of EEE", org: "Ramco Institute of Technology", duration: "09.05.2013 - 30.06.2017" },
      { role: "Assistant Professor, Dept. of EEE / ECE", org: "Kalasalingam University", duration: "12.06.2008 - 30.04.2013" },
      { role: "Software Engineer", org: "HCL Technologies Ltd, Gurgaon", duration: "22.08.2007 - 30.05.2008" },
      { role: "Lecturer, Dept. of EEE", org: "Sree Sowdambika College of Engineering, Aruppukottai", duration: "12.07.2002 - 14.06.2005" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 28,
      bookChapters: 2,
      conferences: 12,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [
      { title: "Smart Uniform for Girl Children with Artificial Intelligence", inventors: "S. Periyanayagi, S. Kannan, B. Deepa Lakshmi, K. Karthikeyan, Moorthi Kanagaraj", status: "Granted", number: "International Patent", filedDate: "-", date: "17.12.2020" },
      { title: "IoT based Heart Health Monitoring and Early Disease Detection Device", inventors: "Narender Chinthamu, Monica Kalbande, Srikanth Cherukuvada, N Saranya, Prakash Chandra Sahoo, P. Janardhan Saikumar, Mohd Ashaq, K. Karthikeyan, S. Spandana", status: "Granted", number: "-", filedDate: "-", date: "28.05.2024" },
      { title: "Method for Controlling Eco Friendly Mow-Bot", inventors: "P. Ramkumar, N. Siva Suriya, R. Ajith Kumar, D. Kathik Prabhu, A. Guna, K. Karthikeyan", status: "Filed", number: "-", filedDate: "17.02.2021", date: "Published 26.02.2021" }
    ],
    honours: [
      { title: "Best Paper Award", body: "'Building energy simulation and optimal energy management control strategy using Energy plus and MATLAB', NWCCIET-2021 conducted by Ramco Institute of Technology.", year: "2021" }
    ],
    memberships: [],
    journalPubs: [
      "Venkata Saiteja Kalluri, K. Karthikeyan, et al., 'Boiler manufacturing demand forecasting enhanced by ConvLSTM networks and optimized with enhanced osprey optimization', International Journal on Interactive Design and Manufacturing (IJIDeM), 2025. (WoS, ESCI)",
      "S. Amosedinakaran, P. Anitha, R. Kannan, K. Karthikeyan, S. Suresh, A. Bhuvanesh, 'Paddy leaf disease identification and K-means cluster segmentation using multi-class SVM techniques', Measurement: Sensors, Vol. 42, 2025. (Scopus)",
      "K. Rajesh, K. Karthikeyan, S. Kannan and C. Thangaraj, 'Generation Expansion Planning based on Solar plants with Storage', Renewable and Sustainable Energy Reviews (Elsevier), Vol. 57, pp.953-964, 2016. (SCIE, Scopus)",
      "Refer to the official faculty profile document for the complete list of 28 journal publications."
    ],
    conferencePubs: [
      "Joel Ananth S, Rahul RS, Rishikanth R, K. Karthikeyan, 'Real time monitoring and alert system for electrical safety', NCASTM-25, Info Institute of Engineering, Coimbatore, 2025.",
      "Refer to the official faculty profile document for the complete list of 12 conference publications."
    ]
  },
  "bdeepalakshmi": {
    name: "DR.B.DEEPA LAKSHMI",
    designation: "Associate Professor",
    department: "Department of Electrical and Electronics Engineering",
    email: "deepalakshmi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "04563 233413",
    image: "/media/eee/Faculty_Profile/238_Dr.B.Deepa_faculty-ele2.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Associate Professor in the Department of Electrical and Electronics Engineering with over a decade of service at RIT. Her research focuses on Renewable Energy, Image Processing and Soft Computing.",
    researchAreas: ["Renewable Energy", "Image Processing", "Soft Computing"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=KBhlXOAAAAAJ" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/Dr.B.Deepa%20Lakshmi%20%20-%2011.04.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Manonmaniam Sundaranar University, Tirunelveli", year: "2001" },
      { degree: "M.E.", field: "Applied Electronics", university: "Anna University, Chennai", year: "2009" },
      { degree: "Ph.D.", field: "Electrical and Electronics Engineering", university: "Dr.M.G.R. Educational and Research Institute", year: "2017" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "June 2018 - Till date" },
      { role: "Assistant Professor (Senior Grade)", org: "Ramco Institute of Technology", duration: "June 2014 - May 2018" },
      { role: "Assistant Professor", org: "Sri Sairam Engineering College / New Prince Shri Bhavani College of Engg. & Tech.", duration: "July 2010 - May 2014" },
      { role: "Lecturer", org: "Saveetha Engineering College", duration: "July 2009 - June 2010" },
      { role: "Lecturer", org: "Prince Shri Venkateshwara Padmavathy Engineering College", duration: "Sep 2006 - Aug 2007" },
      { role: "Lecturer", org: "P.B. College of Engineering", duration: "July 2002 - Sep 2005" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [
      { title: "Smart Uniform for Girl Children with Artificial Intelligence", inventors: "S. Periyanayagi, S. Kannan, B. Deepa Lakshmi, K. Karthikeyan, Moorthi Kanagaraj", status: "Granted", number: "International Patent", filedDate: "-", date: "17.12.2020" }
    ],
    honours: [
      { title: "Certificate of Appreciation - 10 Years of Service", body: "Recognized for 10 years of service in RIT.", year: "-" },
      { title: "Best Class Advisor", body: "Received Certificate of Appreciation for Best Class Advisor.", year: "2017-18, 2019-20" }
    ],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Life Member (LM 101170)", year: "-" },
      { body: "Institution of Engineers India (IE(I))", details: "Associate Member (AM3050966)", year: "-" }
    ],
    journalPubs: [
      "Deepa Lakshmi.B, Rajendran.R.S., Jackrit Suthakorn & Branesh M.Pillai, 'Impact of CIGS, CdS and i-ZnO film thickness, temperature on efficiency enhancement of CIGS solar cells', Journal of Ceramic Processing Research, vol. 23, pp. 878-883, Dec 2022 (Web of Science)",
      "K Sujatha, RS Ponmagal, B Deepa Lakshmi, N Jayachitra, 'Precision manufacturing technology and measurements in steel rolling industry...', Materials Today Proceedings, vol. 38, pp. 2624-2628, Jan 2021 (Web of Science)",
      "S.Amosedinakaran, B.Deepa Lakshmi, A.Bhuvanesh, S.Kannan, 'Generation expansion planning under partially deregulated environment using firefly algorithm...', Journal of Green Engineering, vol. 10, Issue 8, pp. 4391-4404, August 2020 (Scopus)"
    ],
    conferencePubs: []
  },
  "dkarthikprabhu": {
    name: "DR.D.KARTHIK PRABHU",
    designation: "Associate Professor - I",
    department: "Department of Electrical and Electronics Engineering",
    email: "karthikprabuu@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "97505 88231",
    image: "/media/eee/Faculty_Profile/134_kprabhu.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Associate Professor - I in the Department of Electrical and Electronics Engineering, with research interests in Partial Discharge Signal Pattern Recognition, Denoising and Liquid Dielectrics, AI & ML and Deep Learning. Serves as Institute Admission Coordinator and IITM PALS innoWAH Project Contest Institute Coordinator.",
    researchAreas: ["Partial Discharge Signal Pattern Recognition", "Liquid Dielectrics", "AI & ML", "Deep Learning"],
    socials: [
      { label: "Vidwan ID", url: "https://ritrjpm.irins.org/profile/168528" },
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=ulntx9AAAAAJ" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-6081-1556" },
      { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57987862900" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/D.Karthik%20Prabhu%20Bio%20Data%20as%20on%2003.04.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Sri Subramanya College of Engineering and Technology, Palani", year: "2006" },
      { degree: "M.E.", field: "High Voltage Engineering", university: "National Engineering College, Kovilpatti", year: "2010" },
      { degree: "Ph.D.", field: "High Voltage Engineering", university: "Anna University, Chennai", year: "2023" }
    ],
    experience: [
      { role: "Associate Professor - I", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.02.2024 - Till date" },
      { role: "Assistant Professor (Senior Grade)", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.07.2017 - 31.01.2024" },
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "02.01.2014 - 30.06.2017" },
      { role: "Assistant Professor", org: "P.S.R.Rengasamy College of Engineering for Women, Sivakasi", duration: "14.06.2010 - 26.12.2013" },
      { role: "Lecturer", org: "S. Veerasamy Chettiar College of Engineering and Technology, Puliangudi", duration: "02.07.2007 - 30.06.2008" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 9,
      bookChapters: 1,
      conferences: 17,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [
      { title: "Eco-Friendly Mow-bot", inventors: "P.Ramkumar, N.Siva Suriya, R.Ajith Kumar, D.Kathik Prabhu, A.Guna, Dr.K.Karthikeyan", status: "Published", number: "202141006608", filedDate: "-", date: "17.02.2021" },
      { title: "State of charge based automatic charging controller with temperature monitoring system for Electric Vehicle batteries", inventors: "A.Guna, D.Karthik Prabhu, S.Kannan", status: "Published", number: "202241043872", filedDate: "-", date: "01.08.2022" },
      { title: "Autonomous Agriculture Robot for precision Farming", inventors: "P.Kayalvizhi, M.Varunganesh, N.Gokul, D.Karthik Prabhu, E.Thangam, S.Kannan", status: "Published", number: "202441037390", filedDate: "-", date: "17.05.2024" },
      { title: "Lake Guardian: Autonomous Robotic Boats For Debris Cleanup and Pollution Prevention", inventors: "D.Karthik Prabhu, E.Thangam, S.Kannan, R.Gowtham, N.Sathyanarayanaperumal, T.Venkatesh", status: "Published", number: "202541057403", filedDate: "-", date: "16.06.2025" }
    ],
    honours: [
      { title: "Best Class Advisor Award", body: "Received for the academic years 2016-17, 2017-18 and 2018-19.", year: "2016-2019" },
      { title: "IITM PALS Appreciation", body: "Received Appreciation (Certificate and Gift) for performing duties as innoWAH! Coordinator for RIT.", year: "2022-2025" }
    ],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Life time member (LM72132)", year: "-" },
      { body: "Institution of Engineers (India)", details: "Associate member (AM1917784)", year: "-" }
    ],
    journalPubs: [
      "D.Karthik Prabhu, R.V.Maheswari and B.Vigneshwaran, 'Deep Learning based Power Transformer Monitoring using Partial discharge Patterns', Intelligent Automation & Soft Computing, DOI:10.32604/iasc.2022.024128.",
      "Karthik Prabhu Durairaj, Ramasubbu Rengaraj, Anitha Perumalsamy, Bhuvanesh Ananthan, 'Assessing remaining life of reclaimed transformer oil...', Electrical Engineering, Springer Nature, https://doi.org/10.1007/s00202-024-02812-y.",
      "Karthik Prabhu Durairaj, Kala Rathi Mahalingam, Anitha Perumalsamy & Bhuvanesh Ananthan, 'Evaluating methyl ester from used cooking oil as liquid insulation with solid insulation for transformers', Electrical Engineering, Springer Nature, 2025. (SCI)",
      "Refer to the official faculty profile document for the complete list of 9 journal publications."
    ],
    conferencePubs: [
      "D.Karthik Prabhu and R. Karthik, 'Analysis of Dissolved Gases in Power Transformer using Expert System', NPES'10, Kalasalingam University, 2010.",
      "Refer to the official faculty profile document for the complete list of 17 conference publications."
    ]
  },
  "aarunkumar": {
    name: "DR.A.ARUN KUMAR",
    designation: "Associate Professor - I",
    department: "Department of Electrical and Electronics Engineering",
    email: "arunkumar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "98430 80689",
    image: "/media/eee/Faculty_Profile/136_faculty-eee4.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Associate Professor - I and Anna University recognized Research Supervisor in the Department of Electrical and Electronics Engineering. Research interests include Power Systems, Soft Computing Techniques, Internet of Things, Renewable Energy Systems and Energy Storage Systems. Currently serves as Controller of Examinations.",
    researchAreas: ["Power Systems", "Soft Computing Techniques", "Internet of Things", "Renewable Energy Systems", "Energy Storage Systems"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=S2jByOUAAAAJ" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/A.%20Arun%20Kumar_03.04.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Mepco Schlenk Engineering College, Sivakasi", year: "2012" },
      { degree: "M.E.", field: "Power Systems Engineering", university: "College of Engineering Guindy, Anna University Chennai", year: "2014" },
      { degree: "Ph.D.", field: "Power System Planning", university: "Anna University", year: "2024" }
    ],
    experience: [
      { role: "Associate Professor - I", org: "Ramco Institute of Technology, Rajapalayam", duration: "06.03.2024 - Till date" },
      { role: "Assistant Professor (Senior Grade)", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.01.2023 - 05.03.2024" },
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.06.2015 - 31.12.2022" },
      { role: "Assistant Professor", org: "M. Kumarasamy College of Engineering, Karur", duration: "16.06.2014 - 18.05.2015" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 15,
      bookChapters: 2,
      conferences: 8,
      coauthors: 8,
      altmetrics: []
    },
    projects: [
      { title: "LED Powered Endo Illuminator for Vitreous Surgery", agency: "Ministry of Micro, Small & Medium Enterprises (MSME)", status: "On-going", role: "PI", budget: "Rs. 14,50,000/-", duration: "1 year" }
    ],
    patents: [
      { title: "Multi Terminal Corrosion Free Service Line Clamp", inventors: "S. Jeyanthi, A. Arun Kumar, S. Kannan, G. Kanthimathi, O. Senthil Kumar", status: "Granted", number: "202141004396", filedDate: "01.02.2021", date: "-" },
      { title: "Electronic Control for Electric Vehicle", inventors: "S. Jeyanthi, A. Arun Kumar, R. Gajendra, K. Vignesh, E. Athinam", status: "Granted", number: "202241017752", filedDate: "28.03.2022", date: "-" },
      { title: "Safety-Enhanced Ceiling Fan System for Suicide Deterrence", inventors: "S. Jeyanthi, G. Dhana Bharathi Lakshmi, P.G. Gayathree, B. Jeyapadma, A. Arun Kumar", status: "Published", number: "202441062081", filedDate: "30.08.2024", date: "-" },
      { title: "Automatic System for Pandemic Preparedness in Smart Hospital", inventors: "A. Arun Kumar, M. Lakshmi, S. Jeyanthi", status: "Published", number: "202441063028", filedDate: "30.08.2024", date: "-" }
    ],
    honours: [
      { title: "Anna University Research Supervisor Recognition", body: "Received Research Supervisor Recognition from Anna University, Chennai (Recognition No. 4430021).", year: "2024" },
      { title: "Top 1% Achiever - NPTEL", body: "Ranked Top 1% All-India in NPTEL courses 'OBE and Accreditation' and 'Teaching and Learning in Engineering (TALE)'.", year: "2024-2025" },
      { title: "IUCEE International Educator Certification with Distinction", body: "Certified with Distinction under the IUCEE International Educator Certification Program.", year: "Fall 2023" }
    ],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Member", year: "-" },
      { body: "International Engineering and Technology Institute (IEANG)", details: "Member", year: "-" }
    ],
    journalPubs: [
      "Rajasekaran, S., Arun Kumar, A., Thangavel, C., & Arunachalam, K. P. (2025). 'Artificial intelligence enabled internet of things for modeling a smart power distribution system'. Journal of the Chinese Institute of Engineers. (SCIE)",
      "Arun Kumar, A., Geetha, M., Ramkumar, A. et al. (2024). 'Generation expansion planning incorporating the recuperation of older power plants for economic advantage'. Electrical Engineering (Springer). (SCIE)",
      "Arun Kumar, A. et al. (2024). 'Recuperation Based Multi-objective Generation Expansion Planning for a Real-world Power System'. Journal of Intelligent & Fuzzy Systems, vol. 45, no. 4, pp. 6751-6766. (SCIE)",
      "Refer to the official faculty profile document for the complete list of 15 journal publications."
    ],
    conferencePubs: [
      "Praveenkumar V, Sivasubramanian M, Sridhar S and Arun Kumar A, 'Smart Parking Solution for Urban', NCASTM-25, Info Institute of Engineering, 2025.",
      "Refer to the official faculty profile document for the complete list of 8 conference publications."
    ]
  },
  "ethangam": {
    name: "DR.E.THANGAM",
    designation: "Assistant Professor (Grade III)",
    department: "Department of Electrical and Electronics Engineering",
    email: "thangam@ritrjpm.ac.in",
    secondaryEmail: "mhs.tech01@gmail.com",
    mobile: "90034 57185",
    image: "/media/eee/Faculty_Profile/142_thangam_photo.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Assistant Professor (Grade III) in the Department of Electrical and Electronics Engineering. Research interests include Power System, Generation Expansion Planning, Programmable Logic Controllers, Electrical Machines, Protection and Switchgear.",
    researchAreas: ["Power System", "Generation Expansion Planning", "Programmable Logic Controllers", "Protection and Switchgear"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=2y3_YMMAAAAJ" },
      { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=58793568000" },
      { label: "ORCID", url: "http://www.orcid.org/0000-0002-4942-3931" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/E.%20Thangam%20Profile%2031.05.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Noorul Islam College of Engineering, Thuckalay", year: "2009" },
      { degree: "M.E.", field: "Power Systems Engineering", university: "Anna University, Chennai", year: "2013" },
      { degree: "Ph.D.", field: "Generation Expansion Planning", university: "Regional Centre of Anna University, Coimbatore", year: "2025" }
    ],
    experience: [
      { role: "Assistant Professor (Grade III), Dept. of EEE", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.08.2024 - Till date" },
      { role: "Assistant Professor (Senior Grade), Dept. of EEE", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.06.2018 - 31.07.2024" },
      { role: "Assistant Professor, Dept. of EEE", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.06.2016 - 31.05.2018" },
      { role: "Assistant Professor, Dept. of EEE", org: "Ranganathan Engineering College, Coimbatore", duration: "01.06.2014 - 30.04.2016" },
      { role: "Lecturer", org: "Ranganathan Engineering College, Coimbatore", duration: "01.06.2012 - 31.05.2014" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [
      { title: "Autonomous Agriculture Robot for precision Farming", inventors: "P.Kayalvizhi, M.Varunganesh, N.Gokul, D.Karthik Prabhu, E.Thangam, S.Kannan", status: "Published", number: "202441037390", filedDate: "-", date: "17.05.2024" },
      { title: "Lake Guardian: Autonomous Robotic Boats For Debris Cleanup and Pollution Prevention", inventors: "D.Karthik Prabhu, E.Thangam, S.Kannan, R.Gowtham, N.Sathyanarayanaperumal, T.Venkatesh", status: "Published", number: "202541057403", filedDate: "-", date: "16.06.2025" }
    ],
    honours: [
      { title: "100% Result Award - Protection and Switchgear (EE6702)", body: "Produced 100% result in the academic year 2016-17 Odd Semester.", year: "2016-17" },
      { title: "100% Result Award - Electrical Machines-II (EE6504)", body: "Produced 100% result in the academic year 2016-17 Odd Semester.", year: "2016-17" }
    ],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Life Time Member (LM93073)", year: "-" }
    ],
    journalPubs: [
      "Thangam E, Anandhakumar C, Karthik Prabhu D, Meenakshi Sundaravel S, Vigneshwar A S, 'Application Of An Automatic Three-Phase Power Supply Phase Selector In The Medical Ventilator', Journal of Pharmaceutical Negative Results, Vol 13, Special Issue 7, 2022.",
      "Refer to the official faculty profile document for detailed publication records."
    ],
    conferencePubs: []
  },
  "smeenakshisundaravel": {
    name: "MR.S.MEENAKSHI SUNDARAVEL",
    designation: "Assistant Professor (Senior Grade)",
    department: "Department of Electrical and Electronics Engineering",
    email: "sundaravelm@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "96295 20538",
    image: "/media/eee/Faculty_Profile/144_faculty-eee8.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Assistant Professor (Senior Grade) in the Department of Electrical and Electronics Engineering, with his Ph.D. thesis on Power Electronics and Drives submitted to Anna University in December 2025. Research interest is in Multilevel Inverters.",
    researchAreas: ["Multilevel Inverters", "Power Electronics and Drives"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=v29NkTwAAAAJ&hl=en&oi=ao" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/S.%20Meenakshi%20Sundaravel%20Biodata_31.3.26.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Francis Xavier Engineering College, Anna University", year: "2009" },
      { degree: "M.E.", field: "Power Electronics and Drives", university: "Einstein College of Engineering, Anna University", year: "2013" },
      { degree: "Ph.D.", field: "Power Electronics", university: "Mepco Schlenk Engineering College, Anna University", year: "Thesis submitted 29.12.2025" }
    ],
    experience: [
      { role: "Assistant Professor (Senior Grade)", org: "Ramco Institute of Technology", duration: "01.06.2018 - Till date" },
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "01.06.2016 - 31.05.2018" },
      { role: "Assistant Professor", org: "St. Mother Theresa Engineering College", duration: "01.06.2013 - 27.05.2016" },
      { role: "Lecturer", org: "SCAD College of Engineering and Technology", duration: "01.07.2010 - 01.07.2011" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Life Member", year: "-" },
      { body: "Institution of Engineers (India) (IE(I))", details: "Life Member", year: "-" }
    ],
    journalPubs: [
      "Meenakshi Sundaravel, S & Manikandan Bairavan Veerayan (2025), 'Reduced switch single source multilevel inverter topology for renewable photovoltaic system applications', Journal of Power Electronics, vol. 25, no. 3, pp. 440-457. (SCIE)",
      "Thangam E, Anandhakumar C, Karthik Prabhu D, Meenakshi Sundaravel S, Vigneshwar A S, 'Application Of An Automatic Three-Phase Power Supply Phase Selector In The Medical Ventilator', Journal of Pharmaceutical Negative Results, Vol 13, Special Issue 7, 2022."
    ],
    conferencePubs: []
  },
  "asvigneshwar": {
    name: "DR.A.S.VIGNESHWAR",
    designation: "Assistant Professor (Grade-III)",
    department: "Department of Electrical and Electronics Engineering",
    email: "viigneshs@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "99440 77705",
    image: "/media/eee/Faculty_Profile/146_faculty-eee9.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Assistant Professor (Grade-III) in the Department of Electrical and Electronics Engineering. His research interest is Power System Engineering, and he graduated with distinction earning Anna University's 3rd rank among 540 candidates in his Master's programme.",
    researchAreas: ["Power System Engineering"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=CPrCK_YAAAAJ" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/Dr.%20A.S.Vigneshwar-06.04.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Velammal Engineering College, Chennai / Anna University", year: "2010" },
      { degree: "M.E.", field: "Power System Engineering", university: "Velammal College of Engineering and Technology, Madurai / Anna University", year: "2015" },
      { degree: "Ph.D.", field: "Power System Engineering", university: "Anna University, Chennai", year: "2025" }
    ],
    experience: [
      { role: "Assistant Professor (Grade-III)", org: "Ramco Institute of Technology, Rajapalayam", duration: "10.05.2024 - Till date" },
      { role: "Assistant Professor (Senior Grade)", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.01.2023 - 09.05.2024" },
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.06.2016 - 31.12.2022" },
      { role: "Assistant Professor", org: "M. Kumaraswamy College of Engineering, Karur", duration: "04.06.2015 - 06.05.2016" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 10,
      bookChapters: 3,
      conferences: 6,
      coauthors: 8,
      altmetrics: []
    },
    projects: [
      { title: "Autonomous Operated Robot for Water Tank Cleaning", agency: "IE(I), Kolkatta", status: "Completed", role: "PI", budget: "Rs. 45,000", duration: "0.5 year" },
      { title: "IoT Based Smart Food Waste Monitoring System", agency: "IE(I), Kolkatta", status: "Completed", role: "PI", budget: "Rs. 20,000", duration: "0.5 year" }
    ],
    patents: [],
    honours: [
      { title: "Anna University 3rd Rank", body: "Secured Anna University 3rd rank among 540 candidates graduated in the Degree of Master of Engineering in Power Systems Engineering.", year: "-" },
      { title: "100% Placement Record", body: "Consistently achieved 100% placement as the Department Training and Placement Coordinator.", year: "-" }
    ],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Member", year: "-" },
      { body: "Institution of Engineers India (IE(I))", details: "Member", year: "-" }
    ],
    journalPubs: [
      "Madhan, A, Shunmugalatha, A. & Vigneshwar A.S, (2026), 'Efficient energy management for renewable energy integration multi-source microgrid with electric vehicle using portia spider algorithm and temporal dynamic graph neural network technique', Journal of Energy Storage, Vol. 152. (SCI)",
      "Vigneshwar A.S, Shunmugalatha, A. & Madhan, A, (2023), 'Power Quality Enhancement in Hybrid Sustainable Energy Systems Grid-Connected Scheme by Modified Non-dominated Sorting Genetic Algorithm', Journal of Electrical Engineering & Technology, vol. 19, no. 4, pp. 2029-2046. (SCI)",
      "Refer to the official faculty profile document for the complete list of 10 journal publications."
    ],
    conferencePubs: [
      "Presented a paper titled 'Cost effective for live stocks during harsh weather conditions' at International Conference on Emerging Trends in Science, Technology and Engineering and Management, Bharat Niketan Engineering College, Theni, 27.04.2025.",
      "Refer to the official faculty profile document for the complete list of 6 conference publications."
    ]
  },
  "sjeyanthi": {
    name: "DR.S.JEYANTHI",
    designation: "Assistant Professor - III",
    department: "Department of Electrical and Electronics Engineering",
    email: "jeyanthi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "94874 03274",
    image: "/media/eee/Faculty_Profile/180_faculty-eee10.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Assistant Professor - III in the Department of Electrical and Electronics Engineering with an Anna University Research Supervisor Recognition. Research interests include Power Electronics for Renewable Energy, Electrical Drives, Soft Computing Techniques and Electric Vehicles.",
    researchAreas: ["Power Electronics for Renewable Energy", "Electrical Drives", "Soft Computing Techniques", "Electric Vehicles"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=CPElAs8AAAAJ" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/S.%20Jeyanthi%20-%20Bio%20data%20_%2031.03.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "K.L.N. College of Engineering, Pottapalayam", year: "2012" },
      { degree: "M.E.", field: "Power Electronics and Drives", university: "Mepco Schlenk Engineering College, Sivakasi", year: "2014" },
      { degree: "Ph.D.", field: "Power Electronics", university: "Anna University, Chennai", year: "2025" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "01.06.2017 - Till date" },
      { role: "Assistant Professor", org: "AAA College of Engineering and Technology, Sivakasi", duration: "12.06.2014 - 12.06.2015" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [
      { title: "Multi Terminal Corrosion Free Service Line Clamp", inventors: "S. Jeyanthi, A. Arun Kumar, S. Kannan, G. Kanthimathi, O. Senthil Kumar", status: "Granted", number: "202141004396", filedDate: "01.02.2021", date: "-" },
      { title: "Electronic Control for Electric Vehicle", inventors: "S. Jeyanthi, A. Arun Kumar, R. Gajendra, K. Vignesh, E. Athinam", status: "Granted", number: "202241017752", filedDate: "28.03.2022", date: "-" },
      { title: "Safety-Enhanced Ceiling Fan System for Suicide Deterrence", inventors: "S. Jeyanthi, G. Dhana Bharathi Lakshmi, P.G. Gayathree, B. Jeyapadma, A. Arun Kumar", status: "Published", number: "202441062081", filedDate: "30.08.2024", date: "-" }
    ],
    honours: [
      { title: "Anna University Research Supervisor Recognition", body: "Received Research Supervisor Recognition from Anna University, Chennai (Recognition No. 4630019).", year: "2026" },
      { title: "Top 1% Achiever - NPTEL", body: "Ranked as the Top 1% Achiever in the Prestigious NPTEL Course on 'Digital Electronic Circuits'.", year: "2025" }
    ],
    memberships: [
      { body: "Institution of Engineers India (IE(I))", details: "Associate Member (AM3183087)", year: "-" },
      { body: "Indian Society for Technical Education (ISTE)", details: "Life Member (LM121470)", year: "-" }
    ],
    journalPubs: [
      "Omkar Tripathy, Maheswar Prasad Behera, Litu Kumar Samal, Nithya Palanivel, Jeyanthi Sivasubramanian, Bibhu Prasad Ganthia (2025). 'Maximizing PV Power Efficiency Using Seagull Optimization Technique With High-Gain Voltage-Multiplier Quadratic Boost Converter'. Journal Of Mechanics Of Continua And Mathematical Sciences. (Scopus)",
      "Rajalakshmi, J., Jeyanthi, S., Bhuvanesh, A, Arun Kumar A (2024). 'Analysis of Solar Photovoltaic Integration and Plug-in Electric Vehicle Charging Systems with a Bidirectional Buck-Boost DC to DC Converter'. Journal of The Institution of Engineers (India): Series B. (Scopus)",
      "Refer to the official faculty profile document for the complete list of publications."
    ],
    conferencePubs: []
  },
  "ssharmilakumari": {
    name: "MS.S.SHARMILA KUMARI",
    designation: "Assistant Professor",
    department: "Department of Electrical and Electronics Engineering",
    email: "sharmilakumari@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "89034 96654",
    image: "/media/eee/Faculty_Profile/185_Sharmilakumari.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Assistant Professor in the Department of Electrical and Electronics Engineering, pursuing a Ph.D. in Electrical and Electronics Engineering. Research interests include Embedded Systems and Artificial Intelligence (AI).",
    researchAreas: ["Embedded Systems", "Artificial Intelligence"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?hl=en&user=BtFEMT8AAAAJ" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/S.%20Sharmila%20Bio%20data_01.04.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Thiagarajar College of Engineering, Anna University, Chennai", year: "2016" },
      { degree: "M.E.", field: "Electrical and Electronics Engineering / Embedded System Technologies", university: "Anna University Regional Campus, Tirunelveli", year: "2018" },
      { degree: "Ph.D.", field: "Electrical and Electronics Engineering", university: "Anna University, Chennai", year: "Pursuing" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "13.06.2018 - Till now" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 6,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "NPTEL Certificate of Appreciation (Mentor)", body: "Recognized for mentoring students in the 'Digital Circuits' certification course through SWAYAM-NPTEL.", year: "Jul-Dec 2025" },
      { title: "Best Idea Award Winner (Mentor)", body: "Recognized at IDEATHON'26 for providing technical guidance on 'Hydrogel-based Atmospheric Water Harvesting' at P.S.R. Engineering College.", year: "2026" }
    ],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "LM132434", year: "-" },
      { body: "IEEE", details: "Member (100917132)", year: "-" }
    ],
    journalPubs: [
      "Kiran Sree Pokkuluri, Sharmila Kumari S, T.B Sivakumar, Vijay Kumar Dwivedi, Somnath R Wategaonkar, Allam Balaram, I. Anantraj, 'Fuzzy Horizon: Unveiling the Fog of Uncertainty with Cognitive Cartography and Fuzzy Logic Fusion', Journal of Communications on Applied Nonlinear Analysis, Vol 31 No. 8s, 2024. (Scopus)",
      "S. Sharmila Kumari, G. Sivapriya, Abishek Bebito A, Keerthian V and Kishore P, 'A Sustainable Alternative To The Batteries Used In IOT Devices', E3S Web of Conferences 564, 08008 (2024). (Scopus)",
      "A. Guna, S. Sharmila Kumari, G. Sivapriya, 'State of Charge based Charging Controller with Temperature monitoring system for Lithium ion Battery in Electric Vehicle', E3S Web of Conferences 399, 01008 (2023). (Scopus)",
      "Refer to the official faculty profile document for the complete list of 6 journal publications."
    ],
    conferencePubs: []
  },
  "gsivapriya": {
    name: "MRS. G. SIVAPRIYA",
    designation: "Assistant Professor",
    department: "Department of Electrical and Electronics Engineering",
    email: "sivapriyaganesan81@gmail.com",
    secondaryEmail: "",
    mobile: "87787 64982",
    image: "/media/eee/Faculty_Profile/192_Fac_sivapriya.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Assistant Professor in the Department of Electrical and Electronics Engineering, pursuing her Ph.D. at Thanthai Periyar Government Institute of Technology, Vellore. Research interests include Renewable Energy Systems, Electric Vehicles, Battery Management Systems, Machine Learning & Deep Learning for Fault Detection, IoT-enabled Smart Energy Systems, and Intelligent Control and Optimization Techniques.",
    researchAreas: ["Renewable Energy Systems", "Electric Vehicles", "Battery Management Systems", "Machine Learning & Deep Learning", "IoT-enabled Smart Energy Systems"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.co.in/citations?user=3zxLGocAAAAJ&hl=en" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/G.Sivapriya%20-%20Profile.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Adhiparasakthi Engineering College", year: "2003" },
      { degree: "M.E.", field: "Applied Electronics", university: "Melmaruvathur", year: "2008" },
      { degree: "Ph.D.", field: "Electrical and Electronics Engineering", university: "Thanthai Periyar Government Institute of Technology, Vellore-2 (Anna University)", year: "Pursuing" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "02.11.2020 - Till date" },
      { role: "Assistant Professor", org: "VPMM Engineering College for Women, Krishnankoil", duration: "04.07.2016 - 07.09.2020" },
      { role: "Assistant Professor", org: "CK College of Engineering & Technology, Cuddalore", duration: "30.06.2009 - 24.05.2015" },
      { role: "Lecturer", org: "Kalasalingam University, Krishnankoil", duration: "17.09.2008 - 31.05.2009" },
      { role: "Lecturer", org: "Sri Jayaram Engineering College, Cuddalore", duration: "Nov 2004 - May 2006" },
      { role: "Lecturer", org: "PSRI Engineering College, Silavattam", duration: "05.07.2003 - 31.05.2004" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Life Member", year: "-" },
      { body: "Institution of Engineers (India) (IE(I))", details: "Life Associate Member", year: "-" }
    ],
    journalPubs: [
      "S. Sharmila Kumari, G. Sivapriya, Abishek Bebito A, Keerthian V and Kishore P, 'A Sustainable Alternative To The Batteries Used In IOT Devices', E3S Web of Conferences 564, 08008 (2024). (Scopus)",
      "A. Guna, S. Sharmila Kumari, G. Sivapriya, 'State of Charge based Charging Controller with Temperature monitoring system for Lithium ion Battery in Electric Vehicle', E3S Web of Conferences 399, 01008 (2023). (Scopus)",
      "Refer to the official faculty profile document for detailed publication records."
    ],
    conferencePubs: []
  },
  "pprem": {
    name: "DR. P. PREM",
    designation: "Associate Professor",
    department: "Department of Electrical and Electronics Engineering",
    email: "prem@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "94880 29379",
    image: "/media/eee/Faculty_Profile/267_prem_ee1556-1.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Associate Professor in the Department of Electrical and Electronics Engineering, with prior experience heading EEE departments at St. Thomas' College of Engineering & Technology, Kolkata and Bannari Amman Institute of Technology. Research interests include Multilevel Inverters and Industrial Power System Analysis.",
    researchAreas: ["Multilevel Inverters", "Industrial Power System Analysis"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=w2Iog-cAAAAJ&hl=en" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/Prem-10.04.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "CSI Institute of Technology, Thovalai", year: "2006" },
      { degree: "M.E.", field: "Power System Engineering", university: "Thiagarajar College of Engineering, Madurai", year: "2008" },
      { degree: "Ph.D.", field: "Electrical Engineering", university: "Anna University, Chennai", year: "2018" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "15.04.2024 - Till date" },
      { role: "Associate Professor (Head, EEE)", org: "St.Thomas' College of Engineering & Technology, Kolkata", duration: "21.10.2021 - 09.04.2024" },
      { role: "Manager - Operations & Business Development", org: "Switch Gear Electromechanical LLP", duration: "03.03.2021 - 08.10.2021" },
      { role: "Associate Professor (Head, EEE)", org: "Bannari Amman Institute of Technology, Sathyamangalam", duration: "01.11.2019 - 22.12.2020" },
      { role: "Assistant Professor - Level II", org: "Bannari Amman Institute of Technology, Sathyamangalam", duration: "01.07.2013 - 31.10.2019" },
      { role: "Assistant Professor", org: "Bannari Amman Institute of Technology, Sathyamangalam", duration: "01.01.2011 - 30.06.2013" },
      { role: "Lecturer", org: "Bannari Amman Institute of Technology, Sathyamangalam", duration: "18.06.2008 - 31.12.2010" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "IEEE Publication Award", body: "Recipient of IEEE Publication award from IEEE Madras section.", year: "2020" }
    ],
    memberships: [
      { body: "Indian Society for Technical Education (ISTE)", details: "Member", year: "-" }
    ],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "snarthana": {
    name: "DR. S. NARTHANA",
    designation: "Assistant Professor",
    department: "Department of Electrical and Electronics Engineering",
    email: "narthana@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "90470 93969",
    image: "/media/eee/Faculty_Profile/268_narthana-photo-1.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Assistant Professor in the Department of Electrical and Electronics Engineering with prior industry experience as a Senior Software Engineer at Larsen and Toubro. Research interests include Power Converters, Power Quality, Renewable Energy, and Electric Vehicle Battery Charging Systems, with 6 SCI and 2 Scopus journal publications.",
    researchAreas: ["Power Converters", "Power Quality", "Renewable Energy", "Electric Vehicle Battery Charging Systems"],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=4DjfPA0AAAAJ&hl=en" },
      { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57222986694" },
      { label: "ORCID", url: "http://www.orcid.org/0000-0002-2531-0713" }
    ],
    pdfUrl: "/media/eee/Faculty_Profile/Dr.S.Narthana_Biodata_31.03.2026.pdf",
    education: [
      { degree: "B.E.", field: "Electrical and Electronics Engineering", university: "Kamaraj College of Engineering and Technology, Virudhunagar", year: "2006" },
      { degree: "M.E.", field: "Power Electronics and Drives", university: "Mepco Schlenk Engineering College, Sivakasi", year: "2008" },
      { degree: "Ph.D.", field: "Power Electronics", university: "Anna University, Chennai", year: "2024" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "10.05.2024 - Till date" },
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "07.07.2014 - 30.04.2016" },
      { role: "Senior Software Engineer", org: "Larsen and Toubro Limited, Integrated Engineering Services, Mysore", duration: "04.08.2008 - 30.09.2011" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 6,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [
      { title: "Publication Record", body: "6 SCI and 2 Scopus journal publications, 3 International and 2 National conference publications.", year: "-" }
    ],
    memberships: [
      { body: "Institution of Engineers (India)", details: "Associate Member, life time (AM3190725)", year: "-" },
      { body: "Indian Society of Technical Education (ISTE)", details: "Member, life time (LM101168)", year: "-" }
    ],
    journalPubs: [
      "Jayanthi Kathiresan, Narthana Sivaperumal, Gnanavadivel Jothimani, Muralidharan Srinivasan, 'Single Switch Non-Isolated Quadratic High Gain Configuration For Renewable Energy Applications', Revue Roumaine Des Sciences Techniques.",
      "Refer to the official faculty profile document for the complete list of 6 journal publications."
    ],
    conferencePubs: []
  },
  "npothirasan": {
    name: "DR. N. POTHIRASAN",
    designation: "Adjunct Faculty",
    department: "Department of Electrical and Electronics Engineering",
    email: "hashanmedicare@gmail.com",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/eee/Faculty_Profile/303_photo-adjunct_faculty.jpg",
    office: "RIT Campus, Department of Electrical and Electronics Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E. (Electronics & Instrumentation), M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Adjunct Faculty", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "lganesan": {
    name: "DR.L.GANESAN",
    designation: "Principal",
    department: "Department of Electronics and Communication Engineering",
    email: "principal@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/276_Principal_drganesan.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D. (IIT, Kharagpur)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Principal", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "carunachalaperumal": {
    name: "DR.C.ARUNACHALA PERUMAL",
    designation: "Professor & Head",
    department: "Department of Electronics and Communication Engineering",
    email: "arunachalaperumal@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/237_Dr.C.ArunachalaPerumal.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.,Ph.D (Anna University,Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor & Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "alakshmi": {
    name: "DR.A.LAKSHMI",
    designation: "Professor",
    department: "Department of Electronics and Communication Engineering",
    email: "lakshmi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/214_lakshmi.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "aazhagujaisudhanpazhani": {
    name: "DR.A.AZHAGU JAISUDHAN PAZHANI",
    designation: "Associate Professor",
    department: "Department of Electronics and Communication Engineering",
    email: "azhagujaisudhan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/82_faculty-ele5.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "svairaprakash": {
    name: "DR.S.VAIRAPRAKASH",
    designation: "Associate Professor",
    department: "Department of Electronics and Communication Engineering",
    email: "vairaprakash@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/194_vairaprakash_photo.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.,Ph.D (Anna University,Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rrajalakshmi": {
    name: "DR.R.RAJALAKSHMI",
    designation: "Associate Professor",
    department: "Department of Electronics and Communication Engineering",
    email: "rajalakshmi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/215_rajalakshmi.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.Tech.,Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "bkannan": {
    name: "MR.B.KANNAN",
    designation: "Assistant Professor (SG)",
    department: "Department of Electronics and Communication Engineering",
    email: "kannabalasubramani@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/81_faculty-ele4.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor (SG)", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ggnanapriya": {
    name: "MRS.G.GNANAPRIYA",
    designation: "Assistant Professor (SG)",
    department: "Department of Electronics and Communication Engineering",
    email: "gnanapriya@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/84_faculty-ele7.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor (SG)", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rramalakshmi": {
    name: "DR.R.RAMALAKSHMI",
    designation: "Assistant Professor III",
    department: "Department of Electronics and Communication Engineering",
    email: "ramalakshmiramasamy@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/85_faculty-ele8.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D. (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "dgopinath": {
    name: "MR.D.GOPINATH",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "gopinath@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/92_faculty-ele15.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "arameshbabu": {
    name: "MR.A.RAMESHBABU",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "rameshbabu@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/94_faculty-ele17.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "pgunasekaran": {
    name: "MR.P.GUNASEKARAN",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "gunasekaran@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/95_faculty-ele18.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rdeivanayagam": {
    name: "MR.R.DEIVA NAYAGAM",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "deivanayagam@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/98_deiva.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gsivakumar": {
    name: "MR.G.SIVAKUMAR",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "gsivakumar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/100_faculty-ele21.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "pvenkatesh": {
    name: "DR.P.VENKATESH",
    designation: "Associate Professor I",
    department: "Department of Electronics and Communication Engineering",
    email: "pvenkatesh@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/182_Venkateshece.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "sharinishriram": {
    name: "MS.S.HARINI SHRIRAM",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "harinishriram@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/196_harini_shriram.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gsubhashini": {
    name: "MRS.G.SUBHASHINI",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "subhashini @ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/216_subha.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.,(Pursuing Ph.D)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "lkrishnakumari": {
    name: "MS.L.KRISHNA KUMARI",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "krishnakumari@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/221_L.KrishnaKumari.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rramasamy": {
    name: "DR.R.RAMASAMY",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "ramasamy@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/254_ramasamy.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E., PhD", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "vkrishnameera": {
    name: "DR.V.KRISHNA MEERA",
    designation: "Assistant Professor II",
    department: "Department of Electronics and Communication Engineering",
    email: "krishnameera@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/259_KRISHNA_MEERAV.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E., PhD", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mmariarubiston": {
    name: "MR.M.MARIA RUBISTON",
    designation: "Assistant Professor I",
    department: "Department of Electronics and Communication Engineering",
    email: "mariarubiston@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/317_2.MariaRubiston.jpeg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing PhD", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ksangeetha": {
    name: "MRS.K.SANGEETHA",
    designation: "Assistant Professor - I",
    department: "Department of Electronics and Communication Engineering",
    email: "sangeethak@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/318_1.sangeetha.jpeg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mnandhini": {
    name: "MS.M.NANDHINI",
    designation: "Assistant Professor - I",
    department: "Department of Electronics and Communication Engineering",
    email: "nandhini@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/319_3.nandhini_photo.jpeg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "skbavithramsri": {
    name: "MS.S.K.BAVITHRAMSRI",
    designation: "Assistant Professor - I",
    department: "Department of Electronics and Communication Engineering",
    email: "bavithramsri@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/329_Bavithramsri.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "vsrilekha": {
    name: "MS.V.SRILEKHA",
    designation: "Assistant Professor - I",
    department: "Department of Electronics and Communication Engineering",
    email: "srilekha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/ece/Faculty_Profile/330_Srilekha_Photo.jpg",
    office: "RIT Campus, Department of Electronics and Communication Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "srajakarunakaran": {
    name: "DR.S.RAJAKARUNAKARAN",
    designation: "Professor & Principal",
    department: "Department of Mechanical Engineering",
    email: "rajakarunakaran@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/47_Dr.SRK_28.02.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor & Principal", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "psureshkumar": {
    name: "DR.P.SURESHKUMAR",
    designation: "Professor and Head",
    department: "Department of Mechanical Engineering",
    email: "sureshkumar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/48_faculty-img2.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M. Tech.(IIT Madras), Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor and Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mlakshmanan": {
    name: "DR.M.LAKSHMANAN",
    designation: "Associate Professor II",
    department: "Department of Mechanical Engineering",
    email: "lakshmanan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/52_ml-1.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "vsivakumar": {
    name: "DR.V.SIVAKUMAR",
    designation: "Professor & COE",
    department: "Department of Mechanical Engineering",
    email: "vsivakumar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/75_faculty-img22.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor & COE", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "jjeroldjohnbritto": {
    name: "DR.J.JEROLD JOHN BRITTO",
    designation: "Associate Professor II",
    department: "Department of Mechanical Engineering",
    email: "jerold@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/62_Jerold-John-Britto.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "smaharajan": {
    name: "DR.S.MAHARAJAN",
    designation: "Associate Professor I",
    department: "Department of Mechanical Engineering",
    email: "maharajan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/59_faculty-img5.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "msivagaminathanaliasbalaji": {
    name: "MR.M.SIVAGAMINATHAN ALIAS BALAJI",
    designation: "Assistant Professor (Sr. Gr)",
    department: "Department of Mechanical Engineering",
    email: "siva@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/56_faculty-img6.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor (Sr. Gr)", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mashokkumar": {
    name: "MR.M.ASHOK KUMAR",
    designation: "Assistant Professor III",
    department: "Department of Mechanical Engineering",
    email: "ashokkumar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/57_faculty-img7.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "svalaiganesh": {
    name: "MR.S.VALAI GANESH",
    designation: "Assistant Professor (Sr. Gr)",
    department: "Department of Mechanical Engineering",
    email: "valaiganesh@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/58_ValaiGanesh.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D., PGCR&3D (IIT Dhanbad)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor (Sr. Gr)", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "cgururaj": {
    name: "MR.C.GURURAJ",
    designation: "Assistant Professor (Sr. Gr)",
    department: "Department of Mechanical Engineering",
    email: "gururaj@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/60_mrgururaj1.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor (Sr. Gr)", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "lkarthikeyan": {
    name: "MR.L.KARTHIKEYAN",
    designation: "Assistant Professor (Sr. Gr)",
    department: "Department of Mechanical Engineering",
    email: "karthikeyan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/64_faculty-img11.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor (Sr. Gr)", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gpraburam": {
    name: "DR.G.PRABU RAM",
    designation: "Associate Professor -I",
    department: "Department of Mechanical Engineering",
    email: "prabu@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/65_faculty-img12.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.,PhD.,", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor -I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rarunkumar": {
    name: "DR.R.ARUN KUMAR",
    designation: "Assistant Professor - III",
    department: "Department of Mechanical Engineering",
    email: "arunr@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/67_RAK.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rvenkatesh": {
    name: "DR.R.VENKATESH",
    designation: "Assistant Professor - III",
    department: "Department of Mechanical Engineering",
    email: "venkateshr@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/68_faculty-img14.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D. (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rprabhakaran": {
    name: "DR.R.PRABHAKARAN",
    designation: "Assistant Professor - II",
    department: "Department of Mechanical Engineering",
    email: "prabhakaran@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/70_Photo.jpg",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E. (CAD), Ph.D., PGC-3D&Add.Mfg. (IIITT)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mramar": {
    name: "DR.M.RAMAR",
    designation: "Assistant Professor-III",
    department: "Department of Mechanical Engineering",
    email: "ramar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/mech/Faculty_Profile/189_Ramar.PNG",
    office: "RIT Campus, Department of Mechanical Engineering",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D. (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "knangainanthini": {
    name: "MRS.K.NANGAI NANTHINI",
    designation: "Assistant Professor I",
    department: "Department of Artificial Intelligence and Machine Learning",
    email: "nangai@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/aiml/Faculty_Profile/336_am_nangai1.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Machine Learning",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mkaliappan": {
    name: "DR.M.KALIAPPAN",
    designation: "Professor and Head",
    department: "Department of Artificial Intelligence and Data Science",
    email: "kaliappan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/aids/Faculty_Profile/212_184_KaliappanRecentPhoto.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D.,(Post Doc- Federal University of Ceara, Brazil)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor and Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "emariappan": {
    name: "DR. E.MARIAPPAN",
    designation: "Associate Professor-III",
    department: "Department of Artificial Intelligence and Data Science",
    email: "mariappan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/aids/Faculty_Profile/296_AD_Dr.Mariappan.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor-III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "svanandhi": {
    name: "DR. S.V.ANANDHI",
    designation: "Associate Professor-II",
    department: "Department of Artificial Intelligence and Data Science",
    email: "anandhi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/305_Dr.Anandhi_Picture.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.,Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor-II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "sselvabirundha": {
    name: "DR.S.SELVA BIRUNDHA",
    designation: "Associate Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "selvabirunda@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/225_Dr.S.Selva_Birundha_1.jpeg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.Tech., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rmrajeswari": {
    name: "DR. R.M.RAJESHWARI",
    designation: "Assistant Professor",
    department: "Department of Artificial Intelligence and Data Science",
    email: "rajimurugesan@gmail.com",
    secondaryEmail: "",
    mobile: "9750330834",
    image: "/media/aids/Faculty_Profile/287_Rajeswari.jpg",
    office: "RIT Campus",
    bioSummary: "With over 13 years of teaching experience, her focus is on integrating knowledge and experience to contribute to the institution's goals.",
    researchAreas: ["Wireless Sensor Networks", "Data Structures and Algorithm", "Mobile Computing", "Machine Learning", "Cloud Computing"],
    socials: [],
    pdfUrl: null,
    education: [
      { degree: "Ph.D", field: "Computer Science and Engineering", university: "Anna University, Mepco Schlenk Engineering College", year: "2025" },
      { degree: "M.Tech", field: "Network Engg", university: "Kalasalingam University", year: "2012" },
      { degree: "B.E", field: "CSE", university: "Madurai Kamaraj University", year: "2004" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology, Rajapalayam", duration: "19/8/2024 - Till Date" },
      { role: "Assistant Professor", org: "SriVidya College of Engineering & Technology, Virudhunagar", duration: "12/7/2022 - 15/8/2024" },
      { role: "Assistant Professor-Networking", org: "Subbulakshmi Lakshmipathi College of Science", duration: "4/8/2021 - 10/6/2022" },
      { role: "Assistant Professor", org: "AAA College of Engineering & Technology, Amathur, Sivakasi", duration: "10/6/2015 - 30/6/2021" },
      { role: "Guest Lecture cum Assistant Professor", org: "Madurai Kamaraj University Academic Centre", duration: "1/11/2013 - 31/5/2015" },
      { role: "Assistant Professor", org: "N.P.R COLLEGE OF ENGINEERING, Natham", duration: "1/7/2012 - 30/4/2013" },
      { role: "Senior Lecturer", org: "Sethu Institute of Technology, Kariapatti", duration: "Dec 2008 - May 2009" },
      { role: "Lecturer", org: "Vickram College of Engineering, Sivagangai", duration: "June 2005 - Nov 2008" }
    ],
    metrics: {
      citationsScopus: 0,
      citationsCrossRef: 0,
      hIndex: 0,
      journals: 12,
      bookChapters: 3,
      conferences: 13,
      coauthors: 0,
      altmetrics: []
    },
    projects: [
      {
        title: "Intranet Control System",
        agency: "-",
        status: "Completed",
        role: "Developer",
        budget: "-",
        duration: "6 Months"
      },
      {
        title: "DDAS (Distributed Data Acquistion System)",
        agency: "-",
        status: "Completed",
        role: "Developer",
        budget: "-",
        duration: "6 Months"
      },
      {
        title: "Energy Aware routing for reliable communication in WSN",
        agency: "-",
        status: "Completed",
        role: "Developer",
        budget: "-",
        duration: "12 Months"
      }
    ],
    patents: [],
    honours: [
      { year: "2013", title: "University Topper-IInd Rank", body: "Kalasalingam University, Sep 2013" },
      { year: "2005", title: "University 37th Rank", body: "Madurai Kamaraj University, 2005" },
      { year: "2008", title: "Academic Performance Award", body: "Received sum of Rs.5000/- for Academic Performance during 2007-2008 at Vickram College of Engineering." },
      { year: "2017", title: "Certificate of Appreciation", body: "Received for securing centum percent result in IT6601-Mobile Computing during Anna University APR/MAY Exam 2016 organized by AAACET." }
    ],
    memberships: [
      { body: "ISTE Chapter", year: "-", details: "Active Member" }
    ],
    journalPubs: [
      "OCTOGONAL ROAD MODEL FOR EMERGENCY DATA TRANSMISSION IN VANET, Journal of Emerging Technologies and Innovative Research, Vol 5, Issue 9, 2018 (UGC Approved)",
      "RESOURCE MANAGEMENT FOR CDN IN MANETS in Journal of Technological Advances and Scientific Research Vol-1 Issue 3, Sep-2015",
      "STORING AND PRESERVING RESOURCE TECHNIQUES IN ENERGY- EXHAUSTION MODE, A REAL-TIME CONTROLLER FOR PLUG-IN ELECTRIC VEHICLES OF HYBRID MODEL in International Journal of Engineering and Technology (UAE) (Scopus Indexed)",
      "PRIVACY PRESERVING DATA TRANSMISSION IN MALICIOUS VEHICULAR ADHOC NETWORKS in Turkish Journal of Computer and Mathematics Education Vol.12 No.3(2021), 5757-5761",
      "ENHANCE SECURITY AND PRIVACY IN VANET BASED SENSOR MONITORING AND EMERGENCY SERVICES in Cybernetic sand Systems, Vol.5 No.(2024), 872-893",
      "INVESTIGATING THE ACCURACY OF MACHINE LEARNING FOR PREDICTING SPINAL COMPRESSION FRACTURES IN OSTEOPOROSIS USING DUAL-ENERGY X-RAY ABSORPTIOMETRY (DXA) DATA, Journal of Environmental Protection and Ecology 26, No 4, 1516-1525 (2025)",
      "ADVANCED MXENE-GOLD HYBRID PLASMONIC BIOSENSOR FOR EARLY DETECTION OF TUBERCULOSIS BIOMARKERS WITH MACHINE LEARNING OPTIMIZATION Plasmonics, 2026, 21(1), pp. 1441-1454",
      "OPTIMAL ENERGY MANAGEMENT OF HYBRID PV-WIND-BATTERY MICROGRIDS USING DEEP REINFORCEMENT LEARNING-BASED MARKOV DECISION PROCESSES, Journal of Engineering Science and Technology Review, 2026, 19(1), pp. 93-110",
      "HIGH-PERFORMANCE GRAPHENE-COPPER-BASED TERAHERTZ METASURFACE BIOSENSOR FOR EARLY DETECTION OF BRAIN TUMORS: A MACHINE LEARNING-ENHANCED APPROACH, Journal of Computational Electronics, 2026, 25(2), 75",
      "SPIKING NEURAL NETWORK (LEAKY INTEGRATE-AND-FIRE (LIF)) BASED FAST TRANSIENT DETECTION AND CONTROL FOR POWER QUALITY IMPROVEMENT IN GRID-CONNECTED PV SYSTEMS, Journal of Mechanics of Continua and Mathematical Sciences, 2026, 21(4), pp. 18-39"
    ],
    conferencePubs: [
      "Participated in the virtual Conference, Conference on Intelligent Computing and Communication Networks (CICCN 2021), Organized by Department of CSE, Anna University, Tiruchirappalli on 26 th & 27 th Feb 2021.",
      "Participated in the Virtual Conference, Research Issues in Digital Image Processing and Video Analytics Organized by Department of Computer Applications at Mepco Schlenk Engineering College, Sivakasi on March 19 & 20, 2021",
      "Participated in the Virtual Conference, International Conference on Information and Education Innovations (ICIEI -21) organized by Institute for Research and Academic Journals on 25 th September, Madurai",
      "Participated in the International Conference on Emerging Trends in Communication and Networking (ETCAN 21) organized by Kongunadu College of Engineering and Technology from 22.10.21 to 23.10.21, Trichy",
      "Presented the paper entitled, Security In Vehicular Adhoc Network By Signal Reception Techniques, TNSCST Sponsored International Conference on Applications of Mathematics in Science & Technology (AMST 19) held at AAA College of Engineering and technology Virudhunagar on 25/7/2019 to 26/7/2019",
      "Presented the paper entitled, Achieving QOS In IEEE 802.11p Broadcast System In Vehicular Adhoc Networks, Proceedings of 4th International Conference on Emerging Trends In Computing, Communication & Automation Technology (ICETCCAT 19)",
      "Presented the paper entitled, Implementation Of Intrusion Detection Based Machine Learning Algorithms Over Vanet, Proceedings of 4th International Conference on Emerging Trends In Computing, Communication & Automation Technology (ICETCCAT 19) held at SriVidhya College of Engineering and technology Virudhunagar on 9/3/2019",
      "Attended International Conference on Advances in Computer Science, Engineering & Technology (ICACSET 18) held at Kalasalingam University, Krishnan kovil from 19/1/2018 to 20/1/2018",
      "Attended International Conference on Emerging Trends in Computing, Communication and Automation Technology (ICETCCAT 18) held at SriVidhya College of Engineering and technology Virudhunagar on 9/3/2018",
      "Attended International Conference on Technical innovations in Electrical, Electronics & Communication Engineering and ComputerScience Engineering (ICTIEECC 18) held at PET Engineering College, Valliore on 14/3/2018",
      "Presented a paper on Energy Aware Routing for Reliable Communication in Wireless Sensor Network at the National Conference on Advanced Telecommunication technologies on April 2012."
    ]
  },
  "mramnath": {
    name: "MR. M. RAMNATH",
    designation: "Assistant Professor-III",
    department: "Department of Artificial Intelligence and Data Science",
    email: "ramnath@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/240_ad_ram.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech.,M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-III", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rangelhepzibah": {
    name: "MRS. R. ANGEL HEPZIBAH",
    designation: "Assistant Professor-II",
    department: "Department of Artificial Intelligence and Data Science",
    email: "angel@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/297_AD_ANGEL.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "brevathi": {
    name: "MRS.B.REVATHI",
    designation: "Assistant Professor-II",
    department: "Department of Artificial Intelligence and Data Science",
    email: "revathib@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/224_revathi-1.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ckarpagavalli": {
    name: "DR.C.KARPAGAVALLI",
    designation: "Assistant Professor-II",
    department: "Department of Artificial Intelligence and Data Science",
    email: "karpagavalli@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/232_Karpagavalli.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.,Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "cusharani": {
    name: "MRS.C.USHARANI",
    designation: "Assistant Professor Grade - II",
    department: "Department of Artificial Intelligence and Data Science",
    email: "usharanic@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/239_usharani_AD.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech.,M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor Grade - II", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "bsankaralakshmi": {
    name: "MRS.B.SANKARALAKSHMI",
    designation: "Assistant Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "sankaralakshmi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/272_Sankari-Photo-jpg.JPG",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.Tech.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rramana": {
    name: "DR.R.RAMANA",
    designation: "Assistant Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "ramana@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/284_Ramana.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.Tech., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "spradeepha": {
    name: "MRS.S.PRADEEPHA",
    designation: "Assistant Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "pradeepha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/285_Pradeepha.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "msanthikala": {
    name: "MRS.M.SANTHIKALA",
    designation: "Assistant Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "santhikala@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/286_Santhikala.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., pursuing Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "pvetrivel": {
    name: "MR.P.VETRIVEL",
    designation: "Assistant Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "vetrivel@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/289_Vetrivel.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "vlogapriya": {
    name: "MS.V.LOGAPRIYA",
    designation: "Assistant Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "logapriya@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/298_AD_LOGAPRIYA.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rmuthueshwaran": {
    name: "MR. R. MUTHU ESHWARAN",
    designation: "Assistant Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "muthueshwaran@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/299_AD_MuthuEshwaran.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kdhanalakshmi": {
    name: "MS.K.DHANALAKSHMI",
    designation: "Assistant Professor-I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "dhanalakshmi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/333_Dhanalakshmi_Photo.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "banitha": {
    name: "MS.B.ANITHA",
    designation: "Assistant Professor - I",
    department: "Department of Artificial Intelligence and Data Science",
    email: "anitha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/faculty/332_Anitha_Photo.jpg",
    office: "RIT Campus, Department of Artificial Intelligence and Data Science",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.,", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mgomathynayagam": {
    name: "DR.M.GOMATHY NAYAGAM",
    designation: "Associate Professor",
    department: "Department of Computer Science and Business Systems",
    email: "gomathynayagam@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/246_MGM.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "seranaveerappadinesh": {
    name: "DR.S.ERANA VEERAPPA DINESH",
    designation: "Associate Professor",
    department: "Department of Computer Science and Business Systems",
    email: "dinesh@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/247_DineshJPG.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kusharani": {
    name: "MS. K.USHARANI",
    designation: "Assistant Professor",
    department: "Department of Computer Science and Business Systems",
    email: "usharanik@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/252_KUsharani.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "byazhini": {
    name: "MRS.B.YAZHINI",
    designation: "Assistant Professor",
    department: "Department of Computer Science and Business Systems",
    email: "yazhini@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/253_BYazhini.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech, M.Tech., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mjeyasundari": {
    name: "DR. M. JEYA SUNDARI",
    designation: "Assistant Professor",
    department: "Department of Computer Science and Business Systems",
    email: "jeyasundari@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/273_CSBS_New_Faculty_Jeya_Sundhari.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.Tech., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mshabanafathima": {
    name: "MRS.M.SHABANA FATHIMA",
    designation: "Assistant Professor",
    department: "Department of Computer Science and Business Systems",
    email: "shabana@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/274_CSBS_New_Faculty_Shabana_Fathima.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.E", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mpreethiram": {
    name: "MS.M.PREETHI RAM",
    designation: "Assistant Professor",
    department: "Department of Computer Science and Business Systems",
    email: "preethiram@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/275_preethiram.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mrekha": {
    name: "MRS.M.REKHA",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Business Systems",
    email: "rekha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/320_CSBS_Faculty_2025_26_Rekha.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E.,M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mramakrishnan": {
    name: "MR.M.RAMA KRISHNAN",
    designation: "Assistant Professor - I",
    department: "Department of Computer Science and Business Systems",
    email: "ramakrishnan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/csbs/Faculty_Profile/328_CSBS_MRK.jpg",
    office: "RIT Campus, Department of Computer Science and Business Systems",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "vanusuya": {
    name: "DR.V.ANUSUYA",
    designation: "Professor and Head",
    department: "Department of Information Technology",
    email: "anusuyav@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/245_Dr.V.Anusuya.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor and Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kpalraj": {
    name: "DR.K.PALRAJ",
    designation: "Associate Professor",
    department: "Department of Information Technology",
    email: "palraj@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/295_palraj_1.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gmareeswari": {
    name: "DR.G.MAREESWARI",
    designation: "Assistant Professor",
    department: "Department of Information Technology",
    email: "mareeswari@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/248_marees_photo1.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Ph.D. (Anna University, Chennai)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ssakkaravarthi": {
    name: "MR.S. SAKKARAVARTHI",
    designation: "Assistant Professor",
    department: "Department of Information Technology",
    email: "sakkaravarthi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/250_Sakkaravarthi_1.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gsivasathiya": {
    name: "MRS.G.SIVASATHIYA",
    designation: "Assistant Professor",
    department: "Department of Information Technology",
    email: "sivasathiya@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/290_Sivasathiya.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., Pursuing Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mrethinakumari": {
    name: "MRS.M.RETHINA KUMARI",
    designation: "Assistant Professor",
    department: "Department of Information Technology",
    email: "rethinakumari@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/291_Kumari.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E., MBA", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "aalagulakshmi": {
    name: "MRS.A.ALAGULAKSHMI",
    designation: "Assistant Professor",
    department: "Department of Information Technology",
    email: "alagulakshmi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/292_ALAGULAKSHMI.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.Tech., M.E.,", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "bthevahi": {
    name: "MRS.B.THEVAHI",
    designation: "Assistant Professor - I",
    department: "Department of Information Technology",
    email: "thevahi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/323_thevahi1.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "pramya": {
    name: "MRS.P.RAMYA",
    designation: "Assistant Professor - I",
    department: "Department of Information Technology",
    email: "ramya@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/it/Faculty_Profile/327_1ramya.jpg",
    office: "RIT Campus, Department of Information Technology",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.E., M.E.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "nkarthikeyan": {
    name: "DR. N. KARTHIKEYAN",
    designation: "Associate Professor, Physics & Head",
    department: "Department of physics",
    email: "karthikeyann@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/physics/Faculty_Profile/177_physics1.jpg",
    office: "RIT Campus, Department of physics",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D., M.C.A.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor, Physics & Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "tvigneswari": {
    name: "DR. T. VIGNESWARI",
    designation: "Associate Professor Grade - I",
    department: "Department of physics",
    email: "vigneswari@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/physics/Faculty_Profile/178_physics2.jpg",
    office: "RIT Campus, Department of physics",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil.,Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor Grade - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "pthiruramanathan": {
    name: "DR. P. THIRURAMANATHAN",
    designation: "Associate Professor, Physics",
    department: "Department of physics",
    email: "thiruramanathan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/physics/Faculty_Profile/179_thiru_photo.jpg",
    office: "RIT Campus, Department of physics",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D., SET", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor, Physics", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rsrinivasan": {
    name: "DR. R. SRINIVASAN",
    designation: "Associate Professor, Physics",
    department: "Department of physics",
    email: "srinivasan@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/physics/Faculty_Profile/205_srini_1.jpg",
    office: "RIT Campus, Department of physics",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., Ph.D., SET, GATE", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor, Physics", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kjeyapappa": {
    name: "DR. K. JEYAPAPPA",
    designation: "Associate Professor, Physics",
    department: "Department of physics",
    email: "kjeyapappa@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/physics/Faculty_Profile/206_jeya_1.jpg",
    office: "RIT Campus, Department of physics",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D.,", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor, Physics", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mpindiradevi": {
    name: "DR. M. P. INDIRA DEVI",
    designation: "Associate Professor - I",
    department: "Department of physics",
    email: "indiradevi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/physics/Faculty_Profile/326_Indira.jpg",
    office: "RIT Campus, Department of physics",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "osenthilkumar": {
    name: "DR. O. SENTHILKUMAR",
    designation: "Professor, Chemistry",
    department: "Department of chemistry",
    email: "senthilkumar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/chemistry/Faculty_Profile/152_faculty-che.jpg",
    office: "RIT Campus, Department of chemistry",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc. (NET) Ph.D. (Anna University, Chennai) PDF (Japan)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor, Chemistry", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gkanthimathi": {
    name: "DR. G. KANTHIMATHI",
    designation: "Professor, Chemistry",
    department: "Department of chemistry",
    email: "kanthimathi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/chemistry/Faculty_Profile/154_faculty-che1.jpg",
    office: "RIT Campus, Department of chemistry",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D., PGDCA", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor, Chemistry", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "nrevathi": {
    name: "DR.N.REVATHI",
    designation: "Associate Professor, Chemistry",
    department: "Department of chemistry",
    email: "revathi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/chemistry/Faculty_Profile/158_faculty-che5.jpg",
    office: "RIT Campus, Department of chemistry",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor, Chemistry", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "mvenkateshperumal": {
    name: "DR. M. VENKATESH PERUMAL",
    designation: "Associate Professor, Chemistry",
    department: "Department of chemistry",
    email: "venkateshm@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/chemistry/Faculty_Profile/160_faculty-che6.jpg",
    office: "RIT Campus, Department of chemistry",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor, Chemistry", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kleeladevi": {
    name: "DR. K. LEELADEVI",
    designation: "Assistant Professor",
    department: "Department of chemistry",
    email: "leeladevi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/chemistry/Faculty_Profile/270_leeladevi-1.jpg",
    office: "RIT Campus, Department of chemistry",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "bgnanasundararaj": {
    name: "DR. B GNANA SUNDARA RAJ",
    designation: "Assistant Professor - I",
    department: "Department of chemistry",
    email: "gnana@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/chemistry/Faculty_Profile/324_Gnana.jpg",
    office: "RIT Campus, Department of chemistry",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc. Ph.D. PDF (South Korea)", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "kbasarikodi": {
    name: "DR.K.BASARI KODI",
    designation: "Professor & Head",
    department: "Department of maths",
    email: "basarikodi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/168_faculty-maths.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Professor & Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ksubramanian": {
    name: "MR.K.SUBRAMANIAN",
    designation: "Assistant Professor (SG)",
    department: "Department of maths",
    email: "Subramanian@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/170_faculty-maths3.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor (SG)", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "tmanimaran": {
    name: "DR. T. MANIMARAN",
    designation: "Associate Professor",
    department: "Department of maths",
    email: "manimaran@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/171_faculty-maths4.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., SET, Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rsubasree": {
    name: "DR.R.SUBASREE",
    designation: "Associate Professor",
    department: "Department of maths",
    email: "subasree@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/173_faculty-maths6.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., SET, Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gselvaraj": {
    name: "DR.G.SELVARAJ",
    designation: "Associate Professor",
    department: "Department of maths",
    email: "gselvaraj@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/174_faculty-maths7.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., SLET, GATE, Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "tselvaganesh": {
    name: "DR.T.SELVAGANESH",
    designation: "Assistant Professor",
    department: "Department of maths",
    email: "selvaganesh@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/176_faculty-maths9.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D., CSIR-NET, GATE", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "rsaravanakumar": {
    name: "DR. R. SARAVANAKUMAR",
    designation: "Assistant Professor",
    department: "Department of maths",
    email: "saravanakumarr@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/236_saravanakumar-1.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M. Phil., Ph. D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gkannan": {
    name: "DR. G. KANNAN",
    designation: "Assistant Professor",
    department: "Department of maths",
    email: "kannang@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/251_Kannan_photo.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M. Phil., Ph. D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "smuthukumar": {
    name: "MR. S. MUTHUKUMAR",
    designation: "Assistant Professor",
    department: "Department of maths",
    email: "muthukumars@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/301_SMK_1.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M. Phil., SET.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "nnagamani": {
    name: "DR. N NAGAMANI",
    designation: "Assistant Professor",
    department: "Department of maths",
    email: "nagamani@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/302_NNM_1.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M. Phil., Ph.D.,", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ssaravanakumar": {
    name: "DR. S.SARAVANAKUMAR",
    designation: "Associate Professor-I",
    department: "Department of maths",
    email: "ssaravanakumar@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/maths/Faculty_Profile/316_SSSS.jpg",
    office: "RIT Campus, Department of maths",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.Sc., M.Phil., Ph.D", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor-I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "manand": {
    name: "DR. M. ANAND",
    designation: "Associate Professor & Head",
    department: "Department of english",
    email: "anand@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/english/Faculty_Profile/161_anand_photo_1.jpg",
    office: "RIT Campus, Department of english",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.A, M.Phil., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor & Head", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "manishalfredvaz": {
    name: "DR. M. ANISH ALFRED VAZ",
    designation: "Associate Professor Grade - I",
    department: "Department of english",
    email: "anish@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/english/Faculty_Profile/164_anish1.jpg",
    office: "RIT Campus, Department of english",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.A, M.Phil., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Associate Professor Grade - I", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "sgomathi": {
    name: "DR. S.GOMATHI",
    designation: "Assistant professor",
    department: "Department of english",
    email: "sgomathi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/english/Faculty_Profile/234_gomathi-eng-1.jpg",
    office: "RIT Campus, Department of english",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.A, M.Phil., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "gssujantha": {
    name: "DR. G. S. SUJANTHA",
    designation: "Assistant Professor",
    department: "Department of english",
    email: "sujantha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/english/Faculty_Profile/242_Suja.jpg",
    office: "RIT Campus, Department of english",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.A., PGDCA., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "ksanthimaheswari": {
    name: "DR. K. SANTHI MAHESWARI",
    designation: "Assistant Professor",
    department: "Department of english",
    email: "santhi@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/english/Faculty_Profile/244_santhi-1.jpg",
    office: "RIT Campus, Department of english",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "M.A., M.Phil., Ph.D.", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
  "granjitha": {
    name: "MS. G. RANJITHA",
    designation: "Assistant Professor",
    department: "Department of english",
    email: "ranjitha@ritrjpm.ac.in",
    secondaryEmail: "",
    mobile: "Contact Admin",
    image: "/media/english/Faculty_Profile/271_Ranjitha.jpg",
    office: "RIT Campus, Department of english",
    bioSummary: "Dedicated faculty member committed to academic excellence and research.",
    researchAreas: ["Academic Research", "Engineering Education"],
    socials: [
      { label: "Vidwan ID", url: "#" }
    ],
    pdfUrl: null,
    education: [
      { degree: "B.A,M.A.,M. Phil., (Pursuing Ph.D).", field: "Engineering", university: "Anna University", year: "-" }
    ],
    experience: [
      { role: "Assistant Professor", org: "Ramco Institute of Technology", duration: "Joined RIT" }
    ],
    metrics: {
      citationsScopus: 15,
      citationsCrossRef: 10,
      hIndex: 2,
      journals: 5,
      bookChapters: 1,
      conferences: 3,
      coauthors: 8,
      altmetrics: []
    },
    projects: [],
    patents: [],
    honours: [],
    memberships: [],
    journalPubs: ["Refer to the official faculty profile document for detailed publication records."],
    conferencePubs: []
  },
}