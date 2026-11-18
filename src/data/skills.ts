import type { TechnologyId } from './technology-icons'

export interface SkillDefinition {
  id: TechnologyId
  colorClassName: string
  text: string
  shortText?: string
  link: string
}

export interface SkillGroup {
  category: string
  items: readonly SkillDefinition[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    category: 'Front-end',
    items: [
      {
        id: 'html',
        colorClassName: 'text-[#E34F26]',
        text: 'HTML5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        id: 'css',
        colorClassName: 'text-[#1572B6]',
        text: 'CSS3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        id: 'javascript',
        colorClassName: 'text-[#F7DF1E]',
        text: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        id: 'typescript',
        colorClassName: 'text-[#3178C6]',
        text: 'TypeScript',
        link: 'https://www.typescriptlang.org/docs/',
      },
      {
        id: 'react',
        colorClassName: 'text-[#61DAFB]',
        text: 'ReactJS',
        link: 'https://react.dev/',
      },
      {
        id: 'next',
        colorClassName: 'text-white',
        text: 'Next.js',
        link: 'https://nextjs.org/',
      },
      {
        id: 'tailwind',
        colorClassName: 'text-[#06B6D4]',
        text: 'Tailwind CSS',
        shortText: 'Tailwind',
        link: 'https://tailwindcss.com/docs/installation',
      },
      {
        id: 'styledComponents',
        colorClassName: 'text-[#DB7093]',
        text: 'Styled Components',
        shortText: 'Styled C.',
        link: 'https://styled-components.com/',
      },
      {
        id: 'shadcn',
        colorClassName: 'text-white',
        text: 'Shadcn/ui',
        link: 'https://ui.shadcn.com/',
      },
      {
        id: 'cssModules',
        colorClassName: 'text-white',
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
        id: 'node',
        colorClassName: 'text-[#339933]',
        text: 'Node.js',
        link: 'https://nodejs.org/en/docs',
      },
      {
        id: 'nest',
        colorClassName: 'text-[#E0234E]',
        text: 'NestJS',
        link: 'https://nestjs.com/',
      },
      {
        id: 'express',
        colorClassName: 'text-white',
        text: 'Express',
        link: 'https://expressjs.com/',
      },
      {
        id: 'java',
        colorClassName: 'text-[#ED8B00]',
        text: 'Java',
        link: 'https://java.com/',
      },
      {
        id: 'spring',
        colorClassName: 'text-[#6DB33F]',
        text: 'Spring Boot',
        shortText: 'Spring',
        link: 'https://spring.io/projects/spring-boot',
      },
      {
        id: 'hibernate',
        colorClassName: 'text-[#59666C]',
        text: 'Hibernate',
        link: 'https://hibernate.org/',
      },
      {
        id: 'python',
        colorClassName: 'text-[#3776AB]',
        text: 'Python',
        link: 'https://www.python.org/',
      },
      {
        id: 'django',
        colorClassName: 'text-[#44B78B]',
        text: 'Django',
        link: 'https://www.djangoproject.com/',
      },
    ],
  },
  {
    category: 'Banco de dados',
    items: [
      {
        id: 'postgresql',
        colorClassName: 'text-[#4169E1]',
        text: 'PostgreSQL',
        link: 'https://www.postgresql.org/',
      },
      {
        id: 'mongodb',
        colorClassName: 'text-[#47A248]',
        text: 'MongoDB',
        link: 'https://www.mongodb.com/docs/',
      },
      {
        id: 'mysql',
        colorClassName: 'text-[#4479A1]',
        text: 'MySQL',
        link: 'https://www.mysql.com/',
      },
    ],
  },
  {
    category: 'Ferramentas',
    items: [
      {
        id: 'git',
        colorClassName: 'text-[#F05032]',
        text: 'Git',
        link: 'https://git-scm.com/',
      },
      {
        id: 'github',
        colorClassName: 'text-white',
        text: 'GitHub',
        link: 'https://github.com/',
      },
      {
        id: 'postman',
        colorClassName: 'text-[#FF6C37]',
        text: 'Postman',
        link: 'https://www.postman.com/',
      },
      {
        id: 'jest',
        colorClassName: 'text-[#C21325]',
        text: 'Jest',
        link: 'https://jestjs.io/',
      },
      {
        id: 'storybook',
        colorClassName: 'text-[#FF4785]',
        text: 'Storybook',
        link: 'https://storybook.js.org/',
      },
      {
        id: 'axios',
        colorClassName: 'text-[#5A29E4]',
        text: 'Axios',
        link: 'https://axios-http.com/docs/intro',
      },
      {
        id: 'prisma',
        colorClassName: 'text-white',
        text: 'Prisma',
        link: 'https://www.prisma.io/',
      },
      {
        id: 'docker',
        colorClassName: 'text-[#2496ED]',
        text: 'Docker',
        link: 'https://www.docker.com/',
      },
    ],
  },
]
