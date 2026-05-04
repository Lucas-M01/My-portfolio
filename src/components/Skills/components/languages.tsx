import {
  SiAxios,
  SiCss3,
  SiCssmodules,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSpring,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { ReactNode } from 'react'

export interface Language {
  svg: ReactNode
  text: string
  shortText?: string
  link: string
}

export interface SkillGroup {
  category: string
  items: Language[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Front-end',
    items: [
      {
        svg: <SiHtml5 className="text-[#E34F26]" />,
        text: 'HTML5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        svg: <SiCss3 className="text-[#1572B6]" />,
        text: 'CSS3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        svg: <SiJavascript className="text-[#F7DF1E]" />,
        text: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        svg: <SiTypescript className="text-[#3178C6]" />,
        text: 'TypeScript',
        link: 'https://www.typescriptlang.org/docs/',
      },
      {
        svg: <SiReact className="text-[#61DAFB]" />,
        text: 'ReactJS',
        link: 'https://react.dev/',
      },
      {
        svg: <SiNextdotjs className="text-white" />,
        text: 'Next.js',
        link: 'https://nextjs.org/',
      },
      {
        svg: <SiTailwindcss className="text-[#06B6D4]" />,
        text: 'Tailwind CSS',
        shortText: 'Tailwind',
        link: 'https://tailwindcss.com/docs/installation',
      },
      {
        svg: <SiStyledcomponents className="text-[#DB7093]" />,
        text: 'Styled Components',
        shortText: 'Styled C.',
        link: 'https://styled-components.com/',
      },
      {
        svg: <SiShadcnui className="text-white" />,
        text: 'Shadcn/ui',
        link: 'https://ui.shadcn.com/',
      },
      {
        svg: <SiCssmodules className="text-white" />,
        text: 'CSS Modules',
        shortText: 'CSS Mod.',
        link: 'https://github.com/css-modules/css-modules',
      },
    ],
  },
  {
    category: 'Back-end',
    items: [
      {
        svg: <SiNodedotjs className="text-[#339933]" />,
        text: 'Node.js',
        link: 'https://nodejs.org/en/docs',
      },
      {
        svg: <SiNestjs className="text-[#E0234E]" />,
        text: 'NestJS',
        link: 'https://nestjs.com/',
      },
      {
        svg: <SiExpress className="text-white" />,
        text: 'Express',
        link: 'https://expressjs.com/',
      },
      {
        svg: <DiJava className="text-[#ED8B00]" />,
        text: 'Java',
        link: 'https://java.com/',
      },
      {
        svg: <SiSpring className="text-[#6DB33F]" />,
        text: 'Spring Boot',
        shortText: 'Spring',
        link: 'https://spring.io/projects/spring-boot',
      },
      {
        svg: <SiHibernate className="text-[#59666C]" />,
        text: 'Hibernate',
        link: 'https://hibernate.org/',
      },
      {
        svg: <SiPython className="text-[#3776AB]" />,
        text: 'Python',
        link: 'https://www.python.org/',
      },
      {
        svg: <SiDjango className="text-[#44B78B]" />,
        text: 'Django',
        link: 'https://www.djangoproject.com/',
      },
    ],
  },
  {
    category: 'Banco de dados',
    items: [
      {
        svg: <SiPostgresql className="text-[#4169E1]" />,
        text: 'PostgreSQL',
        link: 'https://www.postgresql.org/',
      },
      {
        svg: <SiMongodb className="text-[#47A248]" />,
        text: 'MongoDB',
        link: 'https://www.mongodb.com/docs/',
      },
      {
        svg: <SiMysql className="text-[#4479A1]" />,
        text: 'MySQL',
        link: 'https://www.mysql.com/',
      },
    ],
  },
  {
    category: 'Ferramentas',
    items: [
      {
        svg: <SiGit className="text-[#F05032]" />,
        text: 'Git',
        link: 'https://git-scm.com/',
      },
      {
        svg: <SiGithub className="text-white" />,
        text: 'GitHub',
        link: 'https://github.com/',
      },
      {
        svg: <SiPostman className="text-[#FF6C37]" />,
        text: 'Postman',
        link: 'https://www.postman.com/',
      },
      {
        svg: <SiJest className="text-[#C21325]" />,
        text: 'Jest',
        link: 'https://jestjs.io/',
      },
      {
        svg: <SiStorybook className="text-[#FF4785]" />,
        text: 'Storybook',
        link: 'https://storybook.js.org/',
      },
      {
        svg: <SiAxios className="text-[#5A29E4]" />,
        text: 'Axios',
        link: 'https://axios-http.com/docs/intro',
      },
      {
        svg: <SiPrisma className="text-white" />,
        text: 'Prisma',
        link: 'https://www.prisma.io/',
      },
      {
        svg: <SiDocker className="text-[#2496ED]" />,
        text: 'Docker',
        link: 'https://www.docker.com/',
      },
    ],
  },
]

export const languages = skillGroups.flatMap((g) => g.items)
