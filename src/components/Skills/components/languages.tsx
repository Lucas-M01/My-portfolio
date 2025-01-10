import {
  SiAxios,
  SiCss3,
  SiCssmodules,
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostcss,
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

export const languages = [
  {
    svg: <SiHtml5 className="w-10 h-auto text-[#E34F26]" />,
    text: 'HTML5',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    svg: <SiCss3 className="w-10 h-auto text-[#1572B6]" />,
    text: 'CSS3',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    svg: <SiTailwindcss className="w-10 h-auto text-[#06B6D4]" />,
    text: 'Tailwindcss',
    link: 'https://tailwindcss.com/docs/installation',
  },
  {
    svg: <SiShadcnui className="w-10 h-auto text-[#000000]" />,
    text: 'Shadcnui',
    link: 'https://ui.shadcn.com/',
  },
  {
    svg: <SiPostcss className="w-10 h-auto text-[#DD3A0A]" />,
    text: 'Postcss',
    link: 'https://postcss.org/docs/',
  },
  {
    svg: <SiJavascript className="w-10 h-auto text-[#F7DF1E]" />,
    text: 'Javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    svg: <SiTypescript className="w-10 h-auto text-[#3178C6]" />,
    text: 'TypeScript',
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    svg: <SiReact className="w-10 h-auto text-[#61DAFB]" />,
    text: 'ReactJS',
    link: 'https://legacy.reactjs.org/',
  },
  {
    svg: <SiNodedotjs className="w-10 h-auto text-[#339933]" />,
    text: 'NodeJs',
    link: 'https://nodejs.org/en/docs',
  },
  {
    svg: <SiExpress className="w-10 h-auto text-[#000000]" />,
    text: 'Express',
    link: 'https://expressjs.com/',
  },
  {
    svg: <SiNextdotjs className="w-10 h-auto text-[#000000]" />,
    text: 'NextJs',
    link: 'https://nextjs.org/',
  },
  {
    svg: <SiPrisma className="w-10 h-auto text-[rgb(32,40,51)]" />,
    text: 'Prisma',
    link: 'https://www.prisma.io/',
  },
  {
    svg: <SiAxios className="w-10 h-auto text-[#5A29E4]" />,
    text: 'Axios',
    link: 'https://axios-http.com/docs/intro',
  },
  {
    svg: <SiStyledcomponents className="w-10 h-auto text-[#DB7093]" />,
    text: 'Styled Components',
    link: 'https://styled-components.com/',
  },
  {
    svg: <SiCssmodules className="w-10 h-auto text-[#000000]" />,
    text: 'CSS Modules ',
    link: 'https://github.com/css-modules/css-modules',
  },
  {
    svg: <SiStorybook className="w-10 h-auto text-[#FF4785]" />,
    text: 'Storybook',
    link: 'https://storybook.js.org/',
  },
  {
    svg: <SiGit className="w-10 h-auto text-[#F05032]" />,
    text: 'Git',
    link: 'https://git-scm.com/',
  },
  {
    svg: <SiGithub className="w-10 h-auto text-[#181717]" />,
    text: 'GitHub',
    link: 'https://github.com/',
  },
  {
    svg: <SiPython className="w-10 h-auto text-[#3776AB]" />,
    text: 'Python',
    link: 'https://www.python.org/',
  },
  {
    svg: <SiDjango className="w-10 h-auto text-[#092E20]" />,
    text: 'Django',
    link: 'https://www.djangoproject.com/',
  },
  {
    svg: <DiJava className="w-10 h-auto text-[#744e3b]" />,
    text: 'Java',
    link: '',
  },
  {
    svg: <SiHibernate className="w-10 h-auto text-[#59666C]" />,
    text: 'Hibernate',
    link: 'https://hibernate.org/',
  },
  {
    svg: <SiSpring className="w-10 h-auto text-[#6DB33F]" />,
    text: 'Spring',
    link: 'https://spring.io/projects/spring-boot',
  },
  {
    svg: <SiPostgresql className="w-10 h-auto text-[#4169E1]" />,
    text: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
  },
  {
    svg: <SiPostman className="w-10 h-auto text-[#FF6C37]" />,
    text: 'Postman',
    link: 'https://www.postman.com/',
  },
  {
    svg: <SiMongodb className="w-10 h-auto text-[#47A248]" />,
    text: 'MongoDB',
    link: 'https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-br_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624308&adgroup=115749706023&cq_cmp=12212624308&gad=1&gclid=CjwKCAjwrpOiBhBVEiwA_473dEYntYN9OVurCQkfvp3mZGcGemZEJpKj5UJvqRZgVfli-SMtZvAjRBoCMAwQAvD_BwE',
  },
  {
    svg: <SiMysql className="w-10 h-auto text-[#4479A1]" />,
    text: 'MySQL',
    link: 'https://www.mysql.com/',
  },
]
