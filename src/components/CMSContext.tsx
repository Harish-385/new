import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import scrapedData from '../data/scraped_content.json'
import deptSubpagesData from '../data/department_subpages.json'

export interface StatItem {
  label: string
  value: string
  icon: string
  tone: string
}

export interface EventItem {
  id: number
  title: string
  date: string
  category: string
  icon: string
  description: string
  image: string
  link: string
}

export interface CtaButton {
  text: string
  link: string
}

export interface HomepageConfig {
  hero_title: string
  hero_subtitle: string
  hero_image_url: string
  about_badge: string
  about_title: string
  about_lead: string
  about_description: string
  about_image_url: string
  about_estd: string
  vision_text: string
  mission_intro: string
  mission_points: string[]
  stats: StatItem[]
  cta_buttons: CtaButton[]
  homepage_images?: Record<string, string>
}

export interface NewsItem {
  id: number
  title: string
  slug: string
  summary: string
  body: string
  published_at: string
  featured: boolean
  thumbnail_url: string
}

export interface AnnouncementItem {
  id: number
  title: string
  message: string
  active: boolean
  file_url?: string
}

export interface PlacementItem {
  id?: number
  year: number
  placement_percentage: number
  highest_package_lpa: number
  average_package_lpa: number
}

interface CMSContextType {
  isAuthenticated: boolean
  token: string | null
  homepageConfig: HomepageConfig
  newsList: NewsItem[]
  announcementsList: AnnouncementItem[]
  placementsList: PlacementItem[]
  eventsList: EventItem[]
  flatPages: Record<string, any>
  deptSubpages: Record<string, any>
  galleryVideos: any[]
  isApiConnected: boolean
  isLoading: boolean
  login: (u: string, p: string) => Promise<boolean>
  logout: () => void
  updateHomepageConfig: (data: Partial<HomepageConfig>) => Promise<boolean>
  createNewsItem: (data: Omit<NewsItem, 'id' | 'slug'>, file: File | null) => Promise<boolean>
  updateNewsItem: (id: number, data: Partial<NewsItem>, file: File | null) => Promise<boolean>
  deleteNewsItem: (id: number) => Promise<boolean>
  toggleFeaturedNews: (id: number, featured: boolean) => Promise<boolean>
  fetchAnalytics: () => Promise<any>
  updatePlacementsList: (list: PlacementItem[]) => Promise<boolean>
  updateEventsList: (list: EventItem[]) => Promise<boolean>
  updateFlatPage: (pageKey: string, title: string, content: any[]) => Promise<boolean>
  updateDeptSubpage: (deptCode: string, subpageKey: string, content: any[]) => Promise<boolean>
  uploadDeptFile: (file: File, deptCode: string, subpageKey: string) => Promise<string | null>
  uploadGlobalFile: (file: File) => Promise<string | null>
  updateGalleryVideos: (videos: any[]) => Promise<boolean>
  createAnnouncement: (data: Omit<AnnouncementItem, 'id'>, file: File | null) => Promise<boolean>
  updateAnnouncement: (id: number, data: Partial<AnnouncementItem>, file: File | null) => Promise<boolean>
  deleteAnnouncement: (id: number) => Promise<boolean>
}

const CMSContext = createContext<CMSContextType | undefined>(undefined)

const DEFAULT_HOMEPAGE_CONFIG: HomepageConfig = {
  hero_title: "Empowering\nFuture Engineers",
  hero_subtitle: "RIT is committed to providing quality education, innovative research and holistic development to build competent professionals for a better tomorrow.",
  hero_image_url: "/Ritt.PNG",
  about_badge: "RIT Profile",
  about_title: "About Ramco Institute of Technology",
  about_lead: "Ramco Institute of Technology was founded with a vision to impart high-quality engineering education at an affordable cost. Under the guidance of our Chairman Shri P.R. Venketrama Raja, we revolutionize the learning environment.",
  about_description: "Being part of the Ramco Group, widely recognized for its qualitative and innovative brands globally, we set high standards. We empower students with accessible, yet world-class engineering education and prepare them for lifelong learning.",
  about_image_url: "/founders.png",
  about_estd: "2013",
  vision_text: "To evolve as an Institute of international repute in offering high-quality technical education, Research and extension programmes in order to create knowledgeable, professionally competent and skilled Engineers and Technologists capable of working in multi-disciplinary environment to cater to the societal needs.",
  mission_intro: "To accomplish its unique vision, the Institute has a far-reaching mission that aims:",
  mission_points: [
    "To offer higher education in Engineering and Technology with highest level of quality, Professionalism and ethical standards",
    "To equip the students with up-to-date knowledge in cutting-edge technologies, wisdom, creativity and passion for innovation, and life-long learning skills",
    "To constantly motivate and involve the students and faculty members in the education process for continuously improving their performance to achieve excellence."
  ],
  stats: [
    { label: "Years of Excellence", value: "25+", icon: "GraduationCap", tone: "indigo" },
    { label: "Students", value: "5000+", icon: "Users", tone: "green" },
    { label: "Expert Faculty", value: "300+", icon: "UserCheck", tone: "pink" },
    { label: "Placement Assistance", value: "95%+", icon: "Laptop", tone: "cyan" },
    { label: "Research Publications", value: "100+", icon: "BookOpen", tone: "purple" },
    { label: "Clubs & Committees", value: "50+", icon: "Trophy", tone: "orange" }
  ],
  cta_buttons: [
    { text: "Explore Infrastructure", link: "#gallery" },
    { text: "Join Admissions", link: "#admissions" }
  ],
  homepage_images: {}
}

const DEFAULT_NEWS_LIST: NewsItem[] = [
  {
    id: 1,
    title: "Admissions Open for 2025-26 Batch",
    slug: "admissions-open-for-2025-26-batch",
    summary: "B.E. / B.Tech Admissions are now open. Apply now!",
    body: "Ramco Institute of Technology announces that B.E. / B.Tech admissions are officially open for the academic year 2025-2026. Students can apply online through the official admission portal.",
    published_at: "2026-05-25T10:00:00Z",
    featured: true,
    thumbnail_url: "/rit1.PNG"
  },
  {
    id: 2,
    title: "RIT Ranked Among Top Engineering Colleges",
    slug: "rit-ranked-among-top-engineering-colleges",
    summary: "RIT is proud to be recognized for academic excellence.",
    body: "In the latest national engineering surveys, Ramco Institute of Technology has been ranked among the top emerging institutions in South India.",
    published_at: "2026-05-20T10:00:00Z",
    featured: true,
    thumbnail_url: "/rit2.PNG"
  }
]

const DEFAULT_EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Training Programme on Display of Technical Information',
    date: '2025-2026',
    category: 'Training',
    icon: 'BookOpen',
    description: 'Specialized training programme on standard operating procedures and best practices for displaying technical information.',
    image: 'scraped_Display_TI.jpg',
    link: '/media/events/Event_Display_TI.pdf',
  },
  {
    id: 2,
    title: 'Guest Lecture on Enterprise Application Development',
    date: '2025-2026',
    category: 'Guest Lecture',
    icon: 'GraduationCap',
    description: 'ACM guest lecture detailing modern patterns, frameworks, and deployment strategies for enterprise-grade applications.',
    image: 'scraped_ACM_GuestLecture_Poster.jpg',
    link: '/media/events/ACM_GuestLecture_Report.pdf',
  },
  {
    id: 3,
    title: 'Faculty Development Programme on NLP for Modern AI Systems',
    date: '2025-2026',
    category: 'FDP',
    icon: 'Award',
    description: 'Faculty Development Programme centered on Natural Language Processing architectures, transformer models, and semantic search.',
    image: 'scraped_FDP_Poster.jpg',
    link: '/media/events/FDP_Report.pdf',
  },
  {
    id: 4,
    title: 'Workshop on Generative AI',
    date: '2025-2026',
    category: 'Workshop',
    icon: 'Code',
    description: 'Two days workshop on Exploring GenAI featuring guest lectures and hands-on sessions.',
    image: 'genai_poster_1.jpg',
    link: '/media/pdf/2025-2026/LE/ISTE_GenAI_workshop_Report.pdf',
  },
  {
    id: 5,
    title: 'Two-Day National Level Online Seminar on "Robotics and Internet of Things"',
    date: '2025-2026',
    category: 'Seminar',
    icon: 'Cpu',
    description: 'National level online seminar exploring the convergence of robotics, automated systems, and IoT connectivity.',
    image: 'scraped_Latest_Event_IORT.png',
    link: '/media/IoRT_Post_Event_report.pdf',
  },
  {
    id: 6,
    title: 'Rule of Law and Criminal Justice System',
    date: '2025-2026',
    category: 'Seminar',
    icon: 'Scale',
    description: 'Guest lecture and awareness session on criminal justice frameworks, legal rights, and structural law governance.',
    image: 'scraped_event_rule_of_law.jpg',
    link: '/media/law_report.pdf',
  },
  {
    id: 7,
    title: 'Eco Club Planting a tree sapling at RIT',
    date: '2025-2026',
    category: 'Eco Activity',
    icon: 'Leaf',
    description: 'Tree plantation drive organized by the Eco Club to foster campus greening and environmental conservation.',
    image: 'scraped_tree2.jpg',
    link: '/media/EcoClub%20word.pdf',
  },
  {
    id: 8,
    title: 'One-day workshop on Recent Trends in Green Chemistry',
    date: '2025-2026',
    category: 'Workshop',
    icon: 'Leaf',
    description: 'Technical workshop focusing on sustainable chemical processes, eco-friendly solvents, and green technology trends.',
    image: 'scraped_GC1.jpg',
    link: '/media/events/FDP_Report.pdf',
  }
]

const API_BASE = "http://localhost:9000/api"

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Clear old cache versions
  const CURRENT_VERSION = 'v26'
  if (typeof window !== 'undefined') {
    const localVer = localStorage.getItem('rit_cache_version')
    if (localVer !== CURRENT_VERSION) {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('rit_local_')) {
          localStorage.removeItem(key)
        }
      })
      localStorage.setItem('rit_cache_version', CURRENT_VERSION)
    }
  }

  const [token, setToken] = useState<string | null>(localStorage.getItem('rit_admin_token'))
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(token))
  const [homepageConfig, setHomepageConfig] = useState<HomepageConfig>(DEFAULT_HOMEPAGE_CONFIG)
  const [newsList, setNewsList] = useState<NewsItem[]>(DEFAULT_NEWS_LIST)
  const [announcementsList, setAnnouncementsList] = useState<AnnouncementItem[]>([])
  const [placementsList, setPlacementsList] = useState<PlacementItem[]>(() => {
    const local = localStorage.getItem('rit_local_placements')
    return local ? JSON.parse(local) : [
      { year: 2021, placement_percentage: 95.0, highest_package_lpa: 10.0, average_package_lpa: 3.8 },
      { year: 2022, placement_percentage: 97.0, highest_package_lpa: 12.0, average_package_lpa: 4.2 },
      { year: 2023, placement_percentage: 88.0, highest_package_lpa: 15.0, average_package_lpa: 4.5 },
      { year: 2024, placement_percentage: 90.0, highest_package_lpa: 20.0, average_package_lpa: 4.8 },
      { year: 2025, placement_percentage: 86.0, highest_package_lpa: 48.0, average_package_lpa: 5.2 }
    ]
  })
  const [eventsList, setEventsList] = useState<EventItem[]>(() => {
    const local = localStorage.getItem('rit_local_events')
    const parsed = local ? JSON.parse(local) : []
    const hasBrokenImages = parsed.some((e: any) => e.image.includes('slider1.jpg'))
    const hasBrokenLinks = parsed.some((e: any) => e.link === '#' || e.link.includes('ACM_GuestLecture_Report.pdf') || e.link.includes('Event_Display_TI.pdf'))
    if (parsed.length !== DEFAULT_EVENTS.length || hasBrokenImages || hasBrokenLinks) {
      localStorage.setItem('rit_local_events', JSON.stringify(DEFAULT_EVENTS))
      return DEFAULT_EVENTS
    }
    return parsed
  })
  const [flatPages, setFlatPages] = useState<Record<string, any>>(() => {
    const local = localStorage.getItem('rit_local_scraped_pages_v26')
    return local ? JSON.parse(local) : scrapedData
  })
  const [deptSubpages, setDeptSubpages] = useState<Record<string, any>>(() => {
    const local = localStorage.getItem('rit_local_dept_subpages_v39')
    if (local) {
      if (
        local.includes('48_faculty-img2.jpg') || 
        local.includes('As we were the second batch') ||
        local.includes('Department Info Extramural')
      ) {
        localStorage.removeItem('rit_local_dept_subpages_v39')
        return deptSubpagesData
      }
      try {
        const parsed = JSON.parse(local)
        let changed = false
        const aidsAboutContent = parsed?.aids?.['About the Department']?.content
        if (aidsAboutContent && aidsAboutContent[0] && aidsAboutContent[0].type === 'document' && aidsAboutContent[0].href && aidsAboutContent[0].href.includes('Faculty_Recruitment')) {
          aidsAboutContent.shift()
          changed = true
        }

        // Auto restore Supporting Staff Profile if missing in cached local storage
        Object.keys(deptSubpagesData).forEach((dept) => {
          if ((deptSubpagesData as any)[dept]['Supporting Staff Profile'] && (!parsed[dept] || !parsed[dept]['Supporting Staff Profile'])) {
            if (!parsed[dept]) parsed[dept] = {}
            parsed[dept]['Supporting Staff Profile'] = (deptSubpagesData as any)[dept]['Supporting Staff Profile']
            changed = true
          }
        })

        if (changed) {
          localStorage.setItem('rit_local_dept_subpages_v39', JSON.stringify(parsed))
        }
        const aidsAbout = parsed?.aids?.['About the Department']?.content
        if (aidsAbout && (aidsAbout.length > 11 || (aidsAbout[9] && aidsAbout[9].src && aidsAbout[9].src.includes('KaliappanRecentPhoto')))) {
          localStorage.removeItem('rit_local_dept_subpages_v39')
          return deptSubpagesData
        }
        // Cache-bust: if CSBS facilities OOPS image is not in the correct position (after paragraph), reload from fresh JSON
        const csbsFacilities = parsed?.csbs?.['Facilities  (Lab Details)']?.content
        if (csbsFacilities) {
          const oopsImageIdx = csbsFacilities.findIndex((item: any) => item?.src?.includes('CSBS_OOPSLAB'))
          const oopsParaIdx = csbsFacilities.findIndex((item: any) => item?.text?.includes('Object Oriented Programming Laboratory and Database'))
          if (oopsImageIdx === -1 || (oopsParaIdx !== -1 && oopsImageIdx < oopsParaIdx)) {
            localStorage.removeItem('rit_local_dept_subpages')
            return deptSubpagesData
          }
        }
        // Cache-bust: if CSBS about section still has the old single merged paragraph, reload fresh JSON
        const csbsAbout = parsed?.csbs?.['About the Department']?.content
        if (csbsAbout) {
          const mergedPara = csbsAbout.find((item: any) =>
            item?.type === 'paragraph' &&
            item?.text?.includes('established in the academic year') &&
            item?.text?.includes('vision of the department')
          )
          if (mergedPara) {
            localStorage.removeItem('rit_local_dept_subpages')
            return deptSubpagesData
          }
        }
        // Cache-bust: if CSBS faculty awards is missing the new NPTEL stars award, edge computing award, local HOD award image, KU NPTEL image, Dinesh Java image, or KU Data Analytics image, reload fresh JSON
        const csbsAwards = parsed?.csbs?.['Faculty Awards and Achievements']?.content
        const hasNptelStars = csbsAwards?.some((item: any) => item?.src?.includes('nptel2.jpg'))
        const hasEdgeComputing = csbsAwards?.some((item: any) => item?.src?.includes('nptel1.jpg'))
        const hasLocalHodAward = csbsAwards?.some((item: any) => item?.src === '/media/csbs/Faculty_Awards_and_Achievements/csbs_gn_award.jpg')
        const hasKuNptel = csbsAwards?.some((item: any) => item?.src?.includes('KU_NPTEL.jpg'))
        const hasDineshJava = csbsAwards?.some((item: any) => item?.src?.includes('2.2F.jpg'))
        const hasKuNptelDataAnalytics = csbsAwards?.some((item: any) => item?.src?.includes('KU_nptel_data_analytics.jpg'))
        // Cache-bust: if CSBS student awards is missing Kousalyalakshmi, Siva Priya, Mepco, Federal Bank topper, Siva Karthick, or Srijanani award, reload fresh JSON
        const csbsStudentAwards = parsed?.csbs?.['Students Awards and Achievements']?.content
        const hasKousalyaAward = csbsStudentAwards?.some((item: any) => item?.src?.includes('kousalya_sawit_hackathon.jpg'))
        const hasSivapriyaAward = csbsStudentAwards?.some((item: any) => item?.src?.includes('spotify_vibes_award.jpg'))
        const hasMepcoAward = csbsStudentAwards?.some((item: any) => item?.src?.includes('mepco_legacy_bid_wars.jpg'))
        const hasFederalAward = csbsStudentAwards?.some((item: any) => item?.src?.includes('federal_bank_topper_award.jpg'))
        const hasSivakarthickAward = csbsStudentAwards?.some((item: any) => item?.src?.includes('rit_technical_quiz_karthick_award.jpg'))
        const hasSrijananiAward = csbsStudentAwards?.some((item: any) => item?.src?.includes('rit_technical_quiz_srijanani_award.jpg'))
        // Cache-bust: if CSBS value added course is missing C Programming course image, reload fresh JSON
        const csbsVac = parsed?.csbs?.['Value Added Course']?.content
        const hasVacImage = csbsVac?.some((item: any) => item?.src?.includes('VAC-Cpgm.jpg'))

        // Cache-bust: if CSBS expert lecture is missing Technebiz association image or guest lecture 2 image, reload fresh JSON
        const csbsLectures = parsed?.csbs?.['Expert Lecture/ Guest Lecture']?.content
        const hasTechnebizImage = csbsLectures?.some((item: any) => item?.src?.includes('csbs_technebiz_association_1.jpg'))
        const hasGuestLecture2 = csbsLectures?.some((item: any) => item?.src?.includes('guestlecture2_2022.jpg'))

        // Cache-bust: if CSBS extension programme is missing Game Development Scratch image 2, reload fresh JSON
        const csbsExtProg = parsed?.csbs?.['Extension Programme']?.content
        const hasExtensionProgImage2 = csbsExtProg?.some((item: any) => item?.src?.includes('GAME_DEVELEOPMENT-2.jpg'))

        // Cache-bust: if CSBS Association page is missing new Code Storm event, Logo Design event, LIST OF OFFICE BEARERS 2024-2025 header, or Debate Poster 2, reload fresh JSON
        const csbsAssociation = parsed?.csbs?.['Department Association Technebiz']?.content
        const hasCodestormEvent = csbsAssociation?.some((item: any) => item?.src?.includes('codestrom_poster.jpg'))
        const hasLogoDesignEvent = csbsAssociation?.some((item: any) => item?.src?.includes('design_contest_proof_1.jpg'))
        const hasListOfficeBearers2425 = csbsAssociation?.some((item: any, idx: number) => item?.text === 'LIST OF OFFICE BEARERS' && csbsAssociation[idx+1]?.text === 'Academic Year 2024-2025')
        const hasDebatePoster2 = csbsAssociation?.some((item: any) => item?.src?.includes('CSBS_debate_poster-2.jpg'))

        // Cache-bust: if CSBS Press News is missing news_paper.jpg, reload fresh JSON
        const csbsPressNews = parsed?.csbs?.['Press News']?.content
        const hasPressNewsImage = csbsPressNews?.some((item: any) => item?.src?.includes('news_paper.jpg'))

        // Cache-bust: if CSBS has removed subpages like Admission Open, NIRF, or Alumni, reload fresh JSON
        const hasRemovedCSBSSubpages = ('Admission Open' in (parsed?.csbs || {})) || ('NIRF' in (parsed?.csbs || {})) || ('Alumni' in (parsed?.csbs || {}))

        if (csbsAwards && (!hasNptelStars || !hasEdgeComputing || !hasLocalHodAward || !hasKuNptel || !hasDineshJava || !hasKuNptelDataAnalytics || !hasKousalyaAward || !hasSivapriyaAward || !hasMepcoAward || !hasFederalAward || !hasSivakarthickAward || !hasSrijananiAward || !hasTechnebizImage || !hasGuestLecture2 || !hasVacImage || !hasCodestormEvent || !hasLogoDesignEvent || !hasListOfficeBearers2425 || !hasDebatePoster2 || !hasExtensionProgImage2 || !hasPressNewsImage || hasRemovedCSBSSubpages)) {
          localStorage.removeItem('rit_local_dept_subpages')
          // Force a full location reload to reset context state
          setTimeout(() => window.location.reload(), 100)
          return deptSubpagesData
        }
        return parsed
      } catch {
        return deptSubpagesData
      }
    }
    return deptSubpagesData
  })
  const [galleryVideos, setGalleryVideos] = useState<any[]>(() => {
    const local = localStorage.getItem('rit_local_gallery_videos')
    return local ? JSON.parse(local) : [
      { id: 'bunmrk8BY4Y', title: 'RIT Campus Tour & Infrastructure', description: 'Explore our modern academic infrastructure, labs, and green campus spaces.' },
      { id: 'SDK2rzj8fzA', title: 'Departments & Excellence', description: 'Highlight of Departments and Academics' },
      { id: '-RdFNnPuybI', title: 'State-of-the-Art Research Facilities', description: 'A walkthrough of advanced laboratories and platforms supporting innovation.' },
      { id: 'JvAIKcQeUT8', title: 'Ramco Institute of Technology Sports', description: 'Explore our sports infrastructure, athletic training, and student achievements in tournaments.' }
    ]
  })
  const [isApiConnected, setIsApiConnected] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Test API Connectivity and Load Initial Data
  const loadData = useCallback(async () => {
    setIsLoading(true)
    try {
      // 1. Fetch Homepage Config
      const configRes = await fetch(`${API_BASE}/homepage-config/`)
      if (configRes.ok) {
        let configData = await configRes.json()

        if (configData.hero_image_url === "/rit1.jpeg" || configData.hero_image_url === "/rit1.PNG") {
          configData.hero_image_url = "/ritmain.PNG"
        }
        if (configData.about_image_url === "/rit1.PNG" || configData.about_image_url === "/rit1.jpeg" || configData.about_image_url === "/rit.JPG") {
          configData.about_image_url = "/founders.png"
        }
        // Restore customized images from localStorage if backend still has defaults
        const localDataStr = localStorage.getItem('rit_local_homepage_config')
        if (localDataStr) {
          try {
            const localData = JSON.parse(localDataStr)
            if (localData.hero_image_url === "/rit1.jpeg" || localData.hero_image_url === "/rit1.PNG") {
              localData.hero_image_url = "/ritmain.PNG"
            }
            if (localData.about_image_url === "/rit1.PNG" || localData.about_image_url === "/rit1.jpeg" || localData.about_image_url === "/rit.JPG") {
              localData.about_image_url = "/founders.png"
            }
            localStorage.setItem('rit_local_homepage_config', JSON.stringify(localData))
            if (localData.hero_image_url && localData.hero_image_url !== "/ritmain.PNG" && configData.hero_image_url === "/ritmain.PNG") {
              configData = localData

              // Attempt to sync the restored local data back to the server in the background
              if (token && !token.startsWith('mock')) {
                fetch(`${API_BASE}/homepage-config/1/`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                  },
                  body: JSON.stringify(localData)
                }).catch(console.error)
              }
            }
          } catch (e) { }
        }

        // Force premium stats matching design screenshot
        if (!configData.stats || configData.stats.length !== 6 || configData.stats[0].value !== "25+") {
          configData.stats = [
            { label: "Years of Excellence", value: "25+", icon: "GraduationCap", tone: "indigo" },
            { label: "Students", value: "5000+", icon: "Users", tone: "green" },
            { label: "Expert Faculty", value: "300+", icon: "UserCheck", tone: "pink" },
            { label: "Placement Assistance", value: "95%+", icon: "Laptop", tone: "cyan" },
            { label: "Research Publications", value: "100+", icon: "BookOpen", tone: "purple" },
            { label: "Clubs & Committees", value: "50+", icon: "Trophy", tone: "orange" }
          ]
          localStorage.setItem('rit_local_homepage_config', JSON.stringify(configData))
        }

        setHomepageConfig(configData)
        setIsApiConnected(true)
      } else {
        throw new Error("Failed to load backend config")
      }

      // 2. Fetch News
      const newsRes = await fetch(`${API_BASE}/news/`)
      if (newsRes.ok) {
        const newsData = await newsRes.json()
        setNewsList(newsData)
      }

      // 3. Fetch Placements
      const placementsRes = await fetch(`${API_BASE}/placements/`)
      if (placementsRes.ok) {
        const placementsData = await placementsRes.json()
        const formatted = placementsData.map((p: any) => ({
          id: p.id,
          year: p.year,
          placement_percentage: parseFloat(p.placement_percentage),
          highest_package_lpa: parseFloat(p.highest_package_lpa),
          average_package_lpa: parseFloat(p.average_package_lpa)
        })).sort((a: any, b: any) => a.year - b.year)
        setPlacementsList(formatted)
      }

      // 4. Fetch Announcements
      const announcementsRes = await fetch(`${API_BASE}/announcements/`)
      if (announcementsRes.ok) {
        const announcementsData = await announcementsRes.json()
        setAnnouncementsList(announcementsData)
      }
    } catch (e) {
      console.warn("Backend API not reachable or failed. Using LocalStorage fallback.", e)
      setIsApiConnected(false)

      // Load fallback from LocalStorage if exists
      const localConfig = localStorage.getItem('rit_local_homepage_config')
      if (localConfig) {
        try {
          const parsed = JSON.parse(localConfig)
          if (parsed.hero_image_url === "/rit1.jpeg" || parsed.hero_image_url === "/rit1.PNG") {
            parsed.hero_image_url = "/ritmain.PNG"
          }
          if (parsed.about_image_url === "/rit1.PNG" || parsed.about_image_url === "/rit1.jpeg" || parsed.about_image_url === "/rit.JPG") {
            parsed.about_image_url = "/founders.png"
          }
          if (!parsed.stats || parsed.stats.length !== 6 || parsed.stats[0].value !== "25+") {
            parsed.stats = [
              { label: "Years of Excellence", value: "25+", icon: "GraduationCap", tone: "indigo" },
              { label: "Students", value: "5000+", icon: "Users", tone: "green" },
              { label: "Expert Faculty", value: "300+", icon: "UserCheck", tone: "pink" },
              { label: "Placement Assistance", value: "95%+", icon: "Laptop", tone: "cyan" },
              { label: "Research Publications", value: "100+", icon: "BookOpen", tone: "purple" },
              { label: "Clubs & Committees", value: "50+", icon: "Trophy", tone: "orange" }
            ]
          }
          localStorage.setItem('rit_local_homepage_config', JSON.stringify(parsed))
          setHomepageConfig(parsed)
        } catch (e) {
          setHomepageConfig(DEFAULT_HOMEPAGE_CONFIG)
        }
      }

      const localNews = localStorage.getItem('rit_local_news')
      if (localNews) {
        setNewsList(JSON.parse(localNews))
      }

      const localPlacements = localStorage.getItem('rit_local_placements')
      if (localPlacements) {
        setPlacementsList(JSON.parse(localPlacements))
      }

      const localVideos = localStorage.getItem('rit_local_gallery_videos')
      if (localVideos) {
        setGalleryVideos(JSON.parse(localVideos))
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  // Login Handler
  const login = async (username: string, password: string): Promise<boolean> => {
    if (isApiConnected) {
      try {
        const res = await fetch(`${API_BASE}/auth/token/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        })
        if (res.ok) {
          const data = await res.json()
          localStorage.setItem('rit_admin_token', data.token)
          setToken(data.token)
          setIsAuthenticated(true)
          return true
        }
      } catch (e) {
        console.error("Login request failed", e)
      }
    }

    // Local fallback login
    if (username === 'admin' && password === 'admin123') {
      const mockToken = 'mock-local-token-xyz'
      localStorage.setItem('rit_admin_token', mockToken)
      setToken(mockToken)
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  // Logout Handler
  const logout = () => {
    localStorage.removeItem('rit_admin_token')
    setToken(null)
    setIsAuthenticated(false)
  }

  // Helper to convert files to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  // Update Homepage Config
  const updateHomepageConfig = async (data: Partial<HomepageConfig>): Promise<boolean> => {
    const updated = { ...homepageConfig, ...data }

    if (isApiConnected && token) {
      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        }
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }

        // Single row id=1
        const res = await fetch(`${API_BASE}/homepage-config/1/`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify(data)
        })
        if (res.ok) {
          setHomepageConfig(updated)
          return true
        }
      } catch (e) {
        console.error("Failed to sync homepage config with backend API", e)
      }
    }

    // LocalStorage Fallback
    localStorage.setItem('rit_local_homepage_config', JSON.stringify(updated))
    setHomepageConfig(updated)
    return true
  }

  // Create News Item
  const createNewsItem = async (
    data: Omit<NewsItem, 'id' | 'slug'>,
    file: File | null
  ): Promise<boolean> => {
    let thumbnail_url = data.thumbnail_url
    if (file) {
      if (isApiConnected && token) {
        // Upload to backend via multipart
        try {
          const formData = new FormData()
          formData.append('title', data.title)
          formData.append('summary', data.summary)
          formData.append('body', data.body)
          formData.append('featured', String(data.featured))
          formData.append('published_at', data.published_at)
          formData.append('thumbnail', file)
          formData.append('slug', data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))

          const headers: Record<string, string> = {}
          if (!token.startsWith('mock')) {
            headers['Authorization'] = `Token ${token}`
          }

          const res = await fetch(`${API_BASE}/news/`, {
            method: 'POST',
            headers,
            body: formData,
          })
          if (res.ok) {
            await loadData()
            return true
          }
        } catch (e) {
          console.error("Failed to upload thumbnail to backend", e)
        }
      } else {
        // Local base64 string
        thumbnail_url = await fileToBase64(file)
      }
    }

    const newItem: NewsItem = {
      id: Date.now(),
      title: data.title,
      slug: data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      summary: data.summary,
      body: data.body,
      published_at: data.published_at,
      featured: data.featured,
      thumbnail_url,
    }

    if (isApiConnected && token && !file) {
      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        }
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }
        const res = await fetch(`${API_BASE}/news/`, {
          method: 'POST',
          headers,
          body: JSON.stringify(newItem)
        })
        if (res.ok) {
          await loadData()
          return true
        }
      } catch (e) {
        console.error("Failed to submit news text data", e)
      }
    }

    // Local storage fallback
    const updatedList = [newItem, ...newsList]
    localStorage.setItem('rit_local_news', JSON.stringify(updatedList))
    setNewsList(updatedList)
    return true
  }

  // Update News Item
  const updateNewsItem = async (
    id: number,
    data: Partial<NewsItem>,
    file: File | null
  ): Promise<boolean> => {
    let thumbnail_url = data.thumbnail_url || ''

    if (file) {
      if (isApiConnected && token) {
        try {
          const formData = new FormData()
          if (data.title) formData.append('title', data.title)
          if (data.summary) formData.append('summary', data.summary)
          if (data.body) formData.append('body', data.body)
          if (data.featured !== undefined) formData.append('featured', String(data.featured))
          if (data.published_at) formData.append('published_at', data.published_at)
          formData.append('thumbnail', file)

          const headers: Record<string, string> = {}
          if (!token.startsWith('mock')) {
            headers['Authorization'] = `Token ${token}`
          }

          const res = await fetch(`${API_BASE}/news/${id}/`, {
            method: 'PATCH',
            headers,
            body: formData,
          })
          if (res.ok) {
            await loadData()
            return true
          }
        } catch (e) {
          console.error("Failed to patch news with file", e)
        }
      } else {
        thumbnail_url = await fileToBase64(file)
      }
    }

    if (isApiConnected && token && !file) {
      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        }
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }
        const res = await fetch(`${API_BASE}/news/${id}/`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify(data)
        })
        if (res.ok) {
          await loadData()
          return true
        }
      } catch (e) {
        console.error("Failed to patch news text", e)
      }
    }

    // Local storage fallback
    const updatedList = newsList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...data,
          ...(file ? { thumbnail_url } : {}),
        }
      }
      return item
    })
    localStorage.setItem('rit_local_news', JSON.stringify(updatedList))
    setNewsList(updatedList)
    return true
  }

  // Delete News Item
  const deleteNewsItem = async (id: number): Promise<boolean> => {
    if (isApiConnected && token) {
      try {
        const headers: Record<string, string> = {}
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }
        const res = await fetch(`${API_BASE}/news/${id}/`, {
          method: 'DELETE',
          headers,
        })
        if (res.ok) {
          await loadData()
          return true
        }
      } catch (e) {
        console.error("Failed to delete news from API", e)
      }
    }

    // Local storage fallback
    const updatedList = newsList.filter((item) => item.id !== id)
    localStorage.setItem('rit_local_news', JSON.stringify(updatedList))
    setNewsList(updatedList)
    return true
  }

  // Toggle Featured News
  const toggleFeaturedNews = async (id: number, featured: boolean): Promise<boolean> => {
    return updateNewsItem(id, { featured }, null)
  }

  // Fetch Analytics
  const fetchAnalytics = async (): Promise<any> => {
    if (isApiConnected) {
      try {
        const res = await fetch(`${API_BASE}/analytics/`)
        if (res.ok) {
          return await res.json()
        }
      } catch (e) {
        console.error("Failed to fetch analytics from API", e)
      }
    }

    // Mock analytics callback
    return {
      visitor_analytics: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        page_views: [12000, 19000, 15000, 25000, 22000, 30000],
        unique_visitors: [4000, 6000, 5500, 9000, 8000, 11000]
      },
      dept_stats: {
        labels: ["CSE", "ECE", "EEE", "Mech", "Civil", "AI&DS", "CSBS", "IT"],
        students: [480, 420, 240, 300, 180, 240, 120, 180],
        faculty: [24, 22, 15, 18, 12, 12, 8, 10]
      },
      placement_stats: {
        labels: ["2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
        rates: [95, 97, 88, 90, 86]
      },
      event_attendance: {
        labels: ["Symposium", "AI Workshop", "Sports Meet", "Hackathon", "IPR Seminar"],
        attendance: [450, 120, 600, 85, 150]
      },
      downloads_count: {
        labels: ["Brochure", "Curriculum", "Newsletter", "Application Form", "Calendar"],
        counts: [1240, 850, 430, 980, 310]
      },
      gallery_views: {
        labels: ["Campus", "Laboratories", "Sports", "Events", "Hostel"],
        views: [5400, 3200, 1500, 4800, 1200]
      }
    }
  }

  const updatePlacementsList = async (list: PlacementItem[]): Promise<boolean> => {
    localStorage.setItem('rit_local_placements', JSON.stringify(list))
    setPlacementsList(list)

    if (isApiConnected && token) {
      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        }
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }

        for (const item of list) {
          const payload = {
            year: item.year,
            placement_percentage: item.placement_percentage,
            highest_package_lpa: item.highest_package_lpa,
            average_package_lpa: item.average_package_lpa
          }
          if (item.id) {
            await fetch(`${API_BASE}/placements/${item.id}/`, {
              method: 'PUT',
              headers,
              body: JSON.stringify(payload)
            })
          } else {
            await fetch(`${API_BASE}/placements/`, {
              method: 'POST',
              headers,
              body: JSON.stringify(payload)
            })
          }
        }
      } catch (e) {
        console.error("Failed to sync placements with backend API", e)
      }
    }
    return true
  }

  const updateEventsList = async (list: EventItem[]): Promise<boolean> => {
    localStorage.setItem('rit_local_events', JSON.stringify(list))
    setEventsList(list)
    return true
  }

  const updateFlatPage = async (pageKey: string, title: string, content: any[]): Promise<boolean> => {
    const updated = {
      ...flatPages,
      [pageKey]: {
        ...flatPages[pageKey],
        title,
        content
      }
    }
    localStorage.setItem('rit_local_scraped_pages_v26', JSON.stringify(updated))
    setFlatPages(updated)
    return true
  }

  const updateDeptSubpage = async (deptCode: string, subpageKey: string, content: any[]): Promise<boolean> => {
    const deptData = deptSubpages[deptCode] || {}
    const updatedDept = {
      ...deptData,
      [subpageKey]: {
        ...deptData[subpageKey],
        content
      }
    }
    const updated = {
      ...deptSubpages,
      [deptCode]: updatedDept
    }
    localStorage.setItem('rit_local_dept_subpages_v39', JSON.stringify(updated))
    setDeptSubpages(updated)

    // Save to backend API for persistence
    if (isApiConnected && token) {
      try {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' }
        if (!token.startsWith('mock')) headers['Authorization'] = `Token ${token}`
        fetch(`${API_BASE}/save-dept-subpages/`, {
          method: 'PUT',
          headers,
          body: JSON.stringify(updated)
        }).catch(console.error)
      } catch (e) {
        console.error("Failed to sync dept subpages to API", e)
      }
    }

    return true
  }

  const uploadDeptFile = async (file: File, deptCode: string, subpageKey: string): Promise<string | null> => {
    if (isApiConnected && token) {
      try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('deptCode', deptCode)
        formData.append('subpageKey', subpageKey)

        const headers: Record<string, string> = {}
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }

        const res = await fetch(`${API_BASE}/upload-dept-file/`, {
          method: 'POST',
          headers,
          body: formData,
        })
        if (res.ok) {
          const data = await res.json()
          return data.url
        }
      } catch (e) {
        console.error("Failed to upload dept file", e)
      }
    }
    return null
  }

  const uploadGlobalFile = async (file: File): Promise<string | null> => {
    return uploadDeptFile(file, 'homepage', 'assets')
  }

  const updateGalleryVideos = async (videos: any[]): Promise<boolean> => {
    localStorage.setItem('rit_local_gallery_videos', JSON.stringify(videos))
    setGalleryVideos(videos)
    return true
  }

  const createAnnouncement = async (data: Omit<AnnouncementItem, 'id'>, file: File | null): Promise<boolean> => {
    if (isApiConnected && token) {
      try {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('message', data.message)
        formData.append('active', String(data.active))
        if (file) {
          formData.append('file', file)
        }

        const headers: Record<string, string> = {}
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }

        const res = await fetch(`${API_BASE}/announcements/`, {
          method: 'POST',
          headers,
          body: formData,
        })
        if (res.ok) {
          await loadData()
          return true
        }
      } catch (e) {
        console.error("Failed to create announcement", e)
      }
    } else {
      const newAnn: AnnouncementItem = {
        ...data,
        id: Date.now(),
        file_url: file ? URL.createObjectURL(file) : undefined
      }
      const updated = [newAnn, ...announcementsList]
      localStorage.setItem('rit_local_announcements', JSON.stringify(updated))
      setAnnouncementsList(updated)
      return true
    }
    return false
  }

  const updateAnnouncement = async (id: number, data: Partial<AnnouncementItem>, file: File | null): Promise<boolean> => {
    if (isApiConnected && token) {
      try {
        const formData = new FormData()
        if (data.title) formData.append('title', data.title)
        if (data.message) formData.append('message', data.message)
        if (data.active !== undefined) formData.append('active', String(data.active))
        if (file) {
          formData.append('file', file)
        }

        const headers: Record<string, string> = {}
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }

        const res = await fetch(`${API_BASE}/announcements/${id}/`, {
          method: 'PATCH',
          headers,
          body: formData,
        })
        if (res.ok) {
          await loadData()
          return true
        }
      } catch (e) {
        console.error("Failed to update announcement", e)
      }
    } else {
      const updated = announcementsList.map(item =>
        item.id === id ? { ...item, ...data, file_url: file ? URL.createObjectURL(file) : item.file_url } : item
      )
      localStorage.setItem('rit_local_announcements', JSON.stringify(updated))
      setAnnouncementsList(updated)
      return true
    }
    return false
  }

  const deleteAnnouncement = async (id: number): Promise<boolean> => {
    if (isApiConnected && token) {
      try {
        const headers: Record<string, string> = {}
        if (!token.startsWith('mock')) {
          headers['Authorization'] = `Token ${token}`
        }
        const res = await fetch(`${API_BASE}/announcements/${id}/`, {
          method: 'DELETE',
          headers,
        })
        if (res.ok) {
          await loadData()
          return true
        }
      } catch (e) {
        console.error("Failed to delete announcement", e)
      }
    } else {
      setAnnouncementsList(announcementsList.filter(a => a.id !== id))
      return true
    }
    return false
  }

  return (
    <CMSContext.Provider
      value={{
        isAuthenticated,
        token,
        homepageConfig,
        newsList,
        announcementsList,
        placementsList,
        eventsList,
        flatPages,
        deptSubpages,
        galleryVideos,
        isApiConnected,
        isLoading,
        login,
        logout,
        updateHomepageConfig,
        createNewsItem,
        updateNewsItem,
        deleteNewsItem,
        toggleFeaturedNews,
        fetchAnalytics,
        updatePlacementsList,
        updateEventsList,
        updateFlatPage,
        updateDeptSubpage,
        uploadDeptFile,
        uploadGlobalFile,
        updateGalleryVideos,
        createAnnouncement,
        updateAnnouncement,
        deleteAnnouncement
      }}
    >
      {children}
    </CMSContext.Provider>
  )
}

export const useCMS = () => {
  const context = useContext(CMSContext)
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider')
  }
  return context
}
