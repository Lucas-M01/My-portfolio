/* eslint-disable prettier/prettier */
import { BsLinkedin } from 'react-icons/bs'
import { VscGithubInverted } from 'react-icons/vsc'
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-gray-800 border-t border-gray-700 w-full py-6">
            <div className="w-5/6 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <p className="text-zinc-500 text-sm">
                    © {year}{' '}
                    <span className="text-zinc-300 font-medium">Lucas Montenegro</span>
                </p>

                {/* Links */}
                <div className="flex items-center gap-5">
                    <a
                        href="https://github.com/Lucas-M01"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-zinc-500 hover:text-blue-400 transition-colors duration-200"
                    >
                        <VscGithubInverted className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lucasmontenegrons/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-zinc-500 hover:text-blue-400 transition-colors duration-200"
                    >
                        <BsLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:lucas.montenegro.n@outlook.com"
                        aria-label="Email"
                        className="text-zinc-500 hover:text-blue-400 transition-colors duration-200"
                    >
                        <PiMicrosoftOutlookLogoFill className="w-5 h-5" />
                    </a>
                    <span className="text-zinc-700 hidden sm:block">|</span>
                    <a
                        href="mailto:lucas.montenegro.n@outlook.com"
                        className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200 text-sm hidden sm:block"
                    >
                        lucas.montenegro.n@outlook.com
                    </a>
                </div>
            </div>
        </footer>
    )
}
