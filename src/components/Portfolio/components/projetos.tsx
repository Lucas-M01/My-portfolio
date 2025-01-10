import Link from 'next/link'
import {
  SiAxios,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiPostcss,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactrouter,
  SiShadcnui,
  SiStorybook,
  SiStripe,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from 'react-icons/si'

export const projetos = [
  {
    id: 0,
    name: '🎮 NLW eSports',
    tagsIcons: [
      <SiReact key={1} className="w-6 h-auto" />,
      <SiNodedotjs key={2} className="w-6 h-auto" />,
      <SiTypescript key={3} className="w-6 h-auto" />,
      <SiTailwindcss key={4} className="w-6 h-auto" />,
      <SiPrisma key={5} className="w-6 h-auto0,51)]" />,
      <SiAxios key={6} className="w-6 h-auto" />,
      <SiPostgresql key={7} className="w-6 h-auto" />,
    ],
    languages: [
      'React',
      'Node',
      'Typescript',
      'Radix UI',
      'Tailwind',
      'Kenn-Slider',
      'Prisma',
      'Axios',
      'Postgresql',
      'React Native',
      'Expo',
    ],
    description: (
      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; A aplicação tem como finalidade conectar
          pessoas que desejam jogar um mesmo jogo e se divertir juntas. Foi
          desenvolvido durante o NLW (Next Level Week, evento que ocorre durante
          uma semana totalmente online, gratuito e prático promovido pela
          Rocketseat com muito código, desafios e networking) eSports Ignite,
          especificamente, do dia 11 ao dia 18 de setembro de 2022.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; Nele foi desenvolvido o back end em Node e o
          front end em React (para web) e React Native (para mobile), e a
          princípio, utilizando o banco de dados SQLite, com a aplicação
          rodando, o usuário poderia acessar o site e fazer um anúncio para que
          outros players interessados em jogar o mesmo jogo pode-se entrar em
          contato com ele pelo discord e assim se divertirem.
        </p>
      </div>
    ),
    data: '18 de novembro de 2022',
    figma: 'https://www.figma.com/community/file/1150897317533332617',
    images: [
      'https://user-images.githubusercontent.com/82176047/234623889-1c8de3f4-fe29-4ee1-aabf-13239a713e96.png',
      'https://user-images.githubusercontent.com/82176047/194787007-b5c5a35f-4276-4a97-ac77-0e9eb4909090.png',
      'https://user-images.githubusercontent.com/82176047/194798596-03158018-8e30-4475-a64d-0ee0acdbea37.gif',
    ],
    linkGithub: 'https://github.com/Lucas-M01/nlw-eSport',
  },
  {
    id: 1,
    name: '🧁 UAI Cupcake',
    tagsIcons: [
      <SiReact key={1} className="w-6 h-auto" />,
      <SiTailwindcss key={2} className="w-6 h-auto" />,
      <SiTypescript key={3} className="w-6 h-auto" />,
      <SiReactrouter key={4} className="w-6 h-auto" />,
      <SiReacthookform key={4} className="w-6 h-auto" />,
      <SiVite key={5} className="w-6 h-auto" />,
      <SiShadcnui key={6} className="w-6 h-auto" />,
      <SiZod key={6} className="w-6 h-auto" />,
      <SiKotlin key={7} className="w-6 h-auto" />,
    ],
    languages: [
      'React',
      'Typescript',
      'Tailwindcss',
      'React Hook Form',
      'Vite',
      'Zod',
      'Date-fns',
      'React Router Dom',
      'Shadcn/ui',
      'Zustand',
      'PostgreSQL',
      'Kotlin',
      'Docker',
    ],
    description: (
      <div>
        <p>
          {' '}
          &nbsp;&nbsp;&nbsp;&nbsp; Um projeto desenvolvido como parte do Projeto
          Integrador Transdisciplinar em Ciência da Computação 2 da Cruzeiro do
          Sul Virtual. 🚀
          <span className="block">
            &nbsp;&nbsp;&nbsp;&nbsp; Este projeto consistiu na criação de um
            site de e-commerce especializado na venda de cupcakes artesanais,
            proporcionando uma experiência única tanto para compradores quanto
            para administradores. O sistema foi desenvolvido utilizando
            tecnologias modernas no frontend e backend, garantindo alta
            performance, responsividade e usabilidade.
          </span>
          <br />
          <span className="block">🛠 Principais Funcionalidades:</span>
          <span className="block pt-2">
            Para Compradores: Visualização de produtos, filtros intuitivos,
            carrinho de compras e acompanhamento de pedidos.
          </span>
          <span className="block pt-2">
            Para Administradores: Gestão de produtos, alterações de status de
            pedidos e visualização de dados detalhados.
          </span>
          <br />
          <span className="block pt-2">💡 Destaques Técnicos:</span>
          <span className="block pt-2">
            Frontend: ReactJS, TypeScript, Zustand, TailwindCSS e React Hook
            Form.
          </span>
          <span className="block pt-2">
            Backend: Kotlin, Spring Framework e PostgreSQL. Ferramentas
            Adicionais: Docker, Shadcn-UI e Vite.
          </span>
          <br />
          <span className="block pt-2">
            🎯 Objetivo: Desenvolver uma solução que não apenas resolvesse os
            desafios do e-commerce, mas também refletisse nosso aprendizado e
            dedicação ao longo do curso.
          </span>
          <br />
          <span className="block pt-2">📌 Confira o resultado:</span>
          <span className="block pt-2">
            🌐 Acesse o site:{' '}
            <Link
              href="https://uai-cupcake.netlify.app/"
              target="_blank"
              className="hover:underline text-blue-400 hover:text-blue-300"
            >
              Uai Cupcake
            </Link>
          </span>
          <span className="block pt-2">
            💻 Código fonte:{' '}
            <Link
              href="https://github.com/PIC-UNICSUL/uai-cupcake"
              target="_blank"
              className="hover:underline text-blue-400 hover:text-blue-300"
            >
              Frontend
            </Link>{' '}
            |{' '}
            <Link
              href="https://github.com/PIC-UNICSUL/uai-cupcake-api"
              target="_blank"
              className="hover:underline text-blue-400 hover:text-blue-300"
            >
              Backend
            </Link>
          </span>
          <span className="pt-2">
            📽 Demonstração no YouTube:{' '}
            <Link
              href="https://www.youtube.com/watch?v=Wok7SdVaVw0&ab_channel=LucasMontenegro"
              target="_blank"
              className="hover:underline text-blue-400 hover:text-blue-300"
            >
              Parte 1
            </Link>{' '}
            |{' '}
            <Link
              href="https://www.youtube.com/watch?v=mZxgTtU3mic&ab_channel=LucasMontenegro"
              target="_blank"
              className="hover:underline text-blue-400 hover:text-blue-300"
            >
              Parte 2
            </Link>
          </span>
          <br />
          <span className="block pt-2 font-semibold">Integrantes:</span>
          <span className="block pt-2">
            📌{' '}
            <Link
              href="https://www.linkedin.com/in/cairo-aparecido-campos-7465202b/"
              target="_blank"
              className="hover:underline"
            >
              Cairo Aparecido Campos
            </Link>
            ,{' '}
            <Link
              href="https://www.linkedin.com/in/thaynarasp/"
              target="_blank"
              className="hover:underline"
            >
              Thaynara Silva Pinto
            </Link>
            ,{' '}
            <Link
              href="https://www.linkedin.com/in/lucas-m01/"
              target="_blank"
              className="hover:underline"
            >
              Lucas Montenegro Nunes dos Santos
            </Link>
            ,{' '}
            <Link
              href="https://www.linkedin.com/in/kayle-/"
              target="_blank"
              className="hover:underline"
            >
              Mikaelle Coutinho de Jesus Barreto
            </Link>
            .
          </span>
          <span className="block pt-2">
            👉 Se você é apaixonado por tecnologia, design ou e-commerce,
            adoraremos ouvir seus comentários e feedback sobre o Uai Cupcake.
            Vamos juntos transformar ideias em soluções!
          </span>
        </p>
      </div>
    ),
    data: '30 de dezembro de 2024',
    figma:
      'https://www.figma.com/design/KoOXRhI80ssATpRjinXURJ/Loja-Cupcake?node-id=15-15525&node-type=canvas&t=j1bKEdNdvkEeGsEK-0',
    images: [
      '/cupcake/Home.png',
      '/cupcake/Products.png',
      '/cupcake/Checkout.png',
      '/cupcake/Pedidos.png',
    ],
    linkGithub: 'https://github.com/PIC-UNICSUL',
  },
  {
    id: 2,
    name: '🛒 Ignite Shop',
    tagsIcons: [
      <SiReact key={1} className="w-6 h-auto" />,
      <SiNextdotjs key={2} className="w-6 h-auto" />,
      <SiTypescript key={3} className="w-6 h-auto" />,
      <SiAxios key={4} className="w-6 h-auto" />,
      <SiStripe key={5} className="w-6 h-auto" />,
    ],
    languages: [
      'React',
      'Typescript',
      'Next',
      'Radix UI',
      'Stitches',
      'Kenn-Slider',
      'Stripe',
      'Stitches',
      'Axios',
      'Phosphor Icons',
      'React Toastify',
    ],
    description: (
      <div>
        <p>
          Uma aplicação para gerenciar um carrinho de compras de uma loja de
          roupas fictícia desenvolvida durante o quarto desafio do Ignite,
          bootcamp da Rocketseat, especificamente, da Trilha de ReactJS. O
          projeto foi desenvolvido a partir de um template previamente
          disponibilizado no figma Ignite Shop.
        </p>
      </div>
    ),
    data: '06 de março de 2023',
    figma:
      'https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate',
    images: [
      'https://user-images.githubusercontent.com/82176047/223178716-32d3a2c2-3abf-4f1b-9334-6e41366d758d.png',
    ],
    linkGithub: 'https://github.com/Lucas-M01/Ignite-shop',
  },
  {
    id: 3,
    name: 'Ignite lab design system',
    tagsIcons: [
      <SiReact key={1} className="w-6 h-auto" />,
      <SiStorybook key={2} className="w-6 h-auto" />,
      <SiTypescript key={3} className="w-6 h-auto" />,
      <SiAxios key={4} className="w-6 h-auto" />,
      <SiVite key={5} className="w-6 h-auto" />,
      <SiTailwindcss key={6} className="w-6 h-auto" />,
      <SiPostcss key={7} className="w-6 h-auto" />,
    ],
    languages: [
      'React',
      'Typescript',
      'Storybook',
      'Radix UI',
      'Clsx',
      'Vite',
      'Tailwind',
      'Phosphor Icons',
      'Post css',
    ],
    description: (
      <div>
        <p>
          Uma aplicação para gerenciar um carrinho de compras de uma loja de
          roupas fictícia desenvolvida durante o quarto desafio do Ignite,
          bootcamp da Rocketseat, especificamente, da Trilha de ReactJS. O
          projeto foi desenvolvido a partir de um template previamente
          disponibilizado no figma Ignite Shop.
        </p>
      </div>
    ),
    data: '06 de março de 2023',
    figma:
      'https://www.figma.com/file/6cOvlXOf9kX9QWQ6DTYFvh/Ignite-Lab-Desing-System?t=X8ZCpydwX80sdRnI-0',
    images: [
      'https://user-images.githubusercontent.com/82176047/234429555-af61896b-68c0-43d9-ab12-f873a990ab17.png',
    ],
    linkGithub: 'https://github.com/Lucas-M01/ignite-lab-design-system',
  },
  {
    id: 4,
    name: '☕ Coffee Delivery',
    tagsIcons: [
      <SiReact key={1} className="w-6 h-auto" />,
      <SiStyledcomponents key={2} className="w-6 h-auto" />,
      <SiTypescript key={3} className="w-6 h-auto" />,
      <SiReacthookform key={4} className="w-6 h-auto" />,
      <SiVite key={5} className="w-6 h-auto" />,
    ],
    languages: [
      'React',
      'Typescript',
      'Styled Components',
      'Zod',
      'React Hook Form',
      'Vite',
    ],
    description: (
      <div>
        <p>
          Uma aplicação para gerenciar um carrinho de compras de uma cafeteria
          fictícia desenvolvida durante o segundo desafio do Ignite, bootcamp da
          Rocketseat, especificamente, da Trilha de ReactJS. O projeto foi
          desenvolvido a partir de um template previamente disponibilizado no
          figma Coffee Delivery.
        </p>
      </div>
    ),
    data: '17 de outubro de 2022',
    figma:
      'https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate',
    images: [
      'https://user-images.githubusercontent.com/82176047/196312189-df51aa94-fb81-44fc-a375-01ad629c1549.png',
    ],
    linkGithub: 'https://github.com/Lucas-M01/CoffeDelivery-Ignite',
  },
  {
    id: 5,
    name: '📝 To Do List - Ignite',
    tagsIcons: [
      <SiReact key={1} className="w-6 h-auto" />,
      <SiStyledcomponents key={2} className="w-6 h-auto" />,
      <SiTypescript key={3} className="w-6 h-auto" />,
      <SiReacthookform key={4} className="w-6 h-auto" />,
      <SiVite key={5} className="w-6 h-auto" />,
      <SiAxios key={6} className="w-6 h-auto" />,
    ],
    languages: [
      'React',
      'Typescript',
      'Styled Components',
      'Radix UI',
      'React Hook Form',
      'Vite',
      'Zod',
      'uuid',
      'EsLint',
      'Json-server',
      'Phosphor Icons',
      'Date fns',
      'Axios',
    ],
    description: (
      <div>
        <p>
          Uma aplicação de controle de tarefas desenvolvida durante o primeiro
          desafio do Ignite, bootcamp da Rocketseat, especificamente, da Trilha
          de ReactJS. O projeto foi desenvolvido a partir de um template
          previamente disponibilizado no figma ToDo List.
        </p>
        <p>
          O foco do projeto é ampliar, na prática, a compreensão dos Conceitos
          Fundamentais do ReactJS.
        </p>
      </div>
    ),
    data: '14 de novembro de 2022',
    figma:
      'https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate?node-id=0%3A1',
    images: [
      'https://user-images.githubusercontent.com/82176047/234431743-4caf9a4c-8360-4990-8f6a-16697fe32c9f.png',
    ],
    linkGithub: 'https://github.com/Lucas-M01/to-do-Ignite',
  },
]
