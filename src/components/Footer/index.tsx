import { FadeIn } from '../FadeIn'
import { SocialIcon } from '../SocialIcon'
import { siteConfig } from '@/config/site'
import { socialLinks } from '@/data/social-links'

const footerLinks = socialLinks.filter((link) => link.id !== 'resume')

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 border-t border-gray-700 w-full py-6">
      <FadeIn direction="up" duration={0.4}>
        <div className="w-5/6 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © {year}{' '}
            <span className="text-zinc-300 font-medium">{siteConfig.name}</span>
          </p>

          <div className="flex items-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id === 'email' ? undefined : '_blank'}
                rel={link.id === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={link.id === 'email' ? 'Email' : link.label}
                className="p-1.5 -m-1.5 text-zinc-400 hover:text-blue-400 transition-colors duration-200"
              >
                <SocialIcon id={link.id} className="w-5 h-5" />
              </a>
            ))}
            <span className="text-zinc-700 hidden sm:block">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-zinc-400 hover:text-zinc-300 transition-colors duration-200 text-sm hidden sm:block"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
