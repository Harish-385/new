import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Trophy,
  Calendar,
} from 'lucide-react'

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about', menu: true },
  { label: 'Admission', href: '#admissions', menu: true },
  { label: 'Departments', href: '#departments', menu: true },
  { label: 'Placements', href: '#placements', menu: true },
  { label: 'Infrastructure', href: '#infrastructure', menu: true },
  { label: 'Campus Life & Gallery', href: '#activities', menu: true },
  { label: 'Research & Innovation', href: '#research', menu: true },
  { label: 'Contact Us', href: '#contact' },
]

export const pages = [
  'Home',
  'About',
  'Chairman Message',
  'Principal Message',
  'Admissions',
  'Departments',
  'Academics',
  'Research',
  'Placements',
  'Recruiters',
  'Campus Life',
  'Clubs',
  'Facilities',
  'Gallery',
  'News',
  'Events',
  'Alumni',
  'Contact',
]

export const departments = [
  { name: 'Computer Science', labs: 'AI, cloud, cyber range', accent: '#2dd4bf' },
  { name: 'Electronics & Communication', labs: 'VLSI, IoT, embedded studio', accent: '#f59e0b' },
  { name: 'Mechanical Engineering', labs: 'Robotics, CAD, rapid prototyping', accent: '#60a5fa' },
  { name: 'Civil Engineering', labs: 'Smart infra, materials, GIS', accent: '#f472b6' },
]

export const achievements = [
  'Approved by AICTE, New Delhi & Affiliated to Anna University',
  "NAAC Accredited with 'A+' Grade & An ISO 9001: 2015 Certified Institution",
  'NBA Accredited UG Programs: CSE, EEE, ECE, MECH and CIVIL',
  'An Autonomous Institution'
]

export const heroStats = [
  { label: 'Students', value: '3000+', icon: BookOpen, tone: 'pink' },
  { label: 'Qualified Faculty', value: '170+', icon: GraduationCap, tone: 'orange' },
  { label: '', value: 'Since 2013', icon: Calendar, tone: 'green' },
  { label: 'Recruiters', value: '250+', icon: Briefcase, tone: 'blue' },
  { label: 'Awards & Recognitions', value: '120+', icon: Trophy, tone: 'purple' },
]

export const events = [
  ['JUN', '05', 'Tech Symposium 2025', 'A National Level Technical Symposium', '5th June 2025'],
  ['JUN', '12', 'Workshop on AI & ML', 'Hands-on Workshop for Students', '12th June 2025'],
  ['JUN', '20', 'Sports Meet 2025', 'Annual Sports Meet', '20th June 2025'],
]

export const announcements = [
  ['25', 'MAY', 'Admissions Open for 2025-26 Batch', 'B.E. / B.Tech Admissions are now open. Apply now!'],
  ['20', 'MAY', 'RIT Ranked Among Top Engineering Colleges', 'RIT is proud to be recognized for academic excellence.'],
]
