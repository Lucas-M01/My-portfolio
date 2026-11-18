import { DownloadSimple } from 'phosphor-react'
import { BsLinkedin } from 'react-icons/bs'
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi'
import { VscGithubInverted } from 'react-icons/vsc'
import type { SocialLinkId } from '@/data/social-links'

interface SocialIconProps {
  id: SocialLinkId
  className: string
}

export function SocialIcon({ id, className }: SocialIconProps) {
  if (id === 'resume') {
    return (
      <DownloadSimple weight="bold" className={className} aria-hidden="true" />
    )
  }

  const Icon = {
    github: VscGithubInverted,
    linkedin: BsLinkedin,
    email: PiMicrosoftOutlookLogoFill,
  }[id]

  return <Icon className={className} aria-hidden="true" />
}
