import { siteConfig } from '@/config/site'

export type SocialLinkId = 'resume' | 'github' | 'linkedin' | 'email'

interface SocialLink {
  id: SocialLinkId
  label: string
  href: string
}

export const socialLinks = [
  { id: 'resume', label: 'Download CV', href: siteConfig.resumeUrl },
  { id: 'github', label: 'GitHub', href: siteConfig.github },
  { id: 'linkedin', label: 'LinkedIn', href: siteConfig.linkedin },
  { id: 'email', label: 'Outlook', href: `mailto:${siteConfig.email}` },
] as const satisfies readonly SocialLink[]
