import { CreditCard, GraduationCap, Users, Monitor, Lightbulb, Code, User, Landmark } from 'lucide-react'

const quickLinks = [
  {
    label: 'Online Fee Payment',
    href: 'https://epayments.in.worldline.com/ritrjpm?swith=rollnumber',
    icon: CreditCard,
  },
  {
    label: 'New Admission 2026-27 Online Fee',
    href: 'https://epayments.in.worldline.com/ritrjpm_new_enrollment',
    icon: GraduationCap,
  },
  {
    label: 'Alumni',
    href: 'https://alumni.ritrjpm.ac.in/',
    icon: Users,
  },
  {
    label: 'Incubation',
    href: 'https://www.ritrjpm.ac.in/',
    icon: Lightbulb,
  },
  {
    label: 'ME CSE Admission',
    href: 'https://www.ritrjpm.ac.in/me-cse-admission/',
    icon: Code,
  },
  {
    label: 'Faculty Recruitment',
    href: 'https://www.ritrjpm.ac.in/images/Faculty_Recruitment_26-27.pdf',
    icon: User,
  },
  {
    label: 'ERP Portal',
    href: 'https://www.ritrjpm.ac.in/campuslogin/',
    icon: Landmark,
  },
] as const

export default function QuickLinksBar() {
  return (
    <section className="quick-links-bar" aria-label="Quick access links">
      <div className="quick-links-track">
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              className="quick-link-pill"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={16} className="quick-link-icon" />
              <span>{link.label}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
