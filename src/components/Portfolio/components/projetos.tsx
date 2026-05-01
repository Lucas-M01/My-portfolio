import Link from 'next/link'
import { IconType } from 'react-icons'

import IgniteShop from '../../../../public/assets/igniteShop/Capa.png'
import DesignSystem from '../../../../public/assets/designSystem/Home.png'
import CoffeDelivery from '../../../../public/assets/coffeDelivery/Capa.png'
import ToDoList from '../../../../public/assets/toDoList/ToDo List.png'
import CupcakeHo from '../../../../public/assets/cupcake/Home.png'
import CupcakeCh from '../../../../public/assets/cupcake/Checkout.png'
import CupcakePr from '../../../../public/assets/cupcake/Products.png'
import CupcakePe from '../../../../public/assets/cupcake/Pedidos.png'
import NLWCapa from '../../../../public/assets/NLW/Capa.png'
import NLWHome from '../../../../public/assets/NLW/Home.png'
import NLWGame from '../../../../public/assets/NLW/Game.gif'

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
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

// Componente auxiliar para renderizar ícone de tag
function TagIcon({ Icon }: { Icon: IconType }) {
  return <Icon className="w-6 h-auto" />
}

export interface Projeto {
  id: number
  name: string
  tagIcons: IconType[]
  tagsIcons: ReactNode[] // mantido para compatibilidade com CardProject
  languages: string[]
  description: ReactNode
  data: string
  figma: string
  images: StaticImageData[]
  linkGithub: string
}

// Mapeamento de ícones separado dos dados
const nlwIcons: IconType[] = [
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiAxios,
  SiPostgresql,
]
const cupcakeIcons: IconType[] = [
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiReactrouter,
  SiReacthookform,
  SiVite,
  SiShadcnui,
  SiZod,
  SiKotlin,
]
const igniteShopIcons: IconType[] = [
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiAxios,
  SiStripe,
]
const designSystemIcons: IconType[] = [
  SiReact,
  SiStorybook,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiPostcss,
]
const coffeeIcons: IconType[] = [
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiReacthookform,
  SiVite,
]
const todoIcons: IconType[] = [
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiReacthookform,
  SiVite,
  SiAxios,
]

function toTagsIcons(icons: IconType[]): ReactNode[] {
  return icons.map((Icon, index) => <TagIcon key={index} Icon={Icon} />)
}

export const projetos: Projeto[] = [
  {
    id: 0,
    name: '🎮 NLW eSports',
    tagIcons: nlwIcons,
    tagsIcons: toTagsIcons(nlwIcons),
    languages: [
      'React',
      'Node',
      'Typescript',
      'Radix UI',
      'Tailwind',
      'Keen-Slider',
      'Prisma',
      'Axios',
      'PostgreSQL',
      'React Native',
      'Expo',
    ],
    description: (
      <div className="space-y-3">
        <p className="indent-4">
          A aplicação tem como finalidade conectar pessoas que desejam jogar um
          mesmo jogo e se divertir juntas. Foi desenvolvido durante o NLW (Next
          Level Week), evento que ocorre durante uma semana totalmente online,
          gratuito e prático promovido pela Rocketseat — eSports Ignite,
          especificamente do dia 11 ao dia 18 de setembro de 2022.
        </p>
        <p className="indent-4">
          Nele foi desenvolvido o back end em Node e o front end em React (para
          web) e React Native (para mobile). Com a aplicação rodando, o usuário
          poderia acessar o site, fazer um anúncio e entrar em contato com
          outros players interessados no mesmo jogo pelo Discord.
        </p>
      </div>
    ),
    data: '18 de novembro de 2022',
    figma: 'https://www.figma.com/community/file/1150897317533332617',
    images: [NLWCapa, NLWHome, NLWGame],
    linkGithub: 'https://github.com/Lucas-M01/nlw-eSport',
  },
  {
    id: 1,
    name: '🧁 UAI Cupcake',
    tagIcons: cupcakeIcons,
    tagsIcons: toTagsIcons(cupcakeIcons),
    languages: [
      'React',
      'Typescript',
      'Tailwind CSS',
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
      <div className="space-y-3">
        <p className="indent-4">
          Projeto desenvolvido como parte do Projeto Integrador Transdisciplinar
          em Ciência da Computação 2 da Cruzeiro do Sul Virtual. Um e-commerce
          especializado na venda de cupcakes artesanais, com experiência
          dedicada para compradores e administradores.
        </p>
        <p>
          <strong>🛠 Principais Funcionalidades:</strong>
        </p>
        <p>
          <strong>Compradores:</strong> visualização de produtos, filtros
          intuitivos, carrinho de compras e acompanhamento de pedidos.
        </p>
        <p>
          <strong>Administradores:</strong> gestão de produtos, alteração de
          status de pedidos e visualização de dados detalhados.
        </p>
        <p>
          <strong>💡 Destaques Técnicos:</strong> ReactJS, TypeScript, Zustand,
          TailwindCSS, React Hook Form, Kotlin, Spring Framework, PostgreSQL,
          Docker, Shadcn-UI e Vite.
        </p>
        <p>
          🌐 Acesse o site:{' '}
          <Link
            href="https://uai-cupcake.netlify.app/"
            target="_blank"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Uai Cupcake
          </Link>
        </p>
        <p>
          💻 Código fonte:{' '}
          <Link
            href="https://github.com/PIC-UNICSUL/uai-cupcake"
            target="_blank"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Frontend
          </Link>{' '}
          |{' '}
          <Link
            href="https://github.com/PIC-UNICSUL/uai-cupcake-api"
            target="_blank"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Backend
          </Link>
        </p>
        <p>
          📽 Demonstração no YouTube:{' '}
          <Link
            href="https://www.youtube.com/watch?v=Wok7SdVaVw0"
            target="_blank"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Parte 1
          </Link>{' '}
          |{' '}
          <Link
            href="https://www.youtube.com/watch?v=mZxgTtU3mic"
            target="_blank"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Parte 2
          </Link>
        </p>
        <p>
          <strong>Integrantes:</strong>{' '}
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
        </p>
      </div>
    ),
    data: '30 de dezembro de 2024',
    figma:
      'https://www.figma.com/design/KoOXRhI80ssATpRjinXURJ/Loja-Cupcake?node-id=15-15525',
    images: [CupcakeHo, CupcakePr, CupcakeCh, CupcakePe],
    linkGithub: 'https://github.com/PIC-UNICSUL',
  },
  {
    id: 2,
    name: '🛒 Ignite Shop',
    tagIcons: igniteShopIcons,
    tagsIcons: toTagsIcons(igniteShopIcons),
    languages: [
      'React',
      'Typescript',
      'Next.js',
      'Radix UI',
      'Stitches',
      'Keen-Slider',
      'Stripe',
      'Axios',
      'Phosphor Icons',
      'React Toastify',
    ],
    description: (
      <div>
        <p className="indent-4">
          O <strong>Ignite Shop</strong> é uma aplicação de e-commerce de
          camisetas desenvolvida para explorar as funcionalidades do{' '}
          <strong>Next.js</strong>. O projeto integra-se diretamente com a API
          do Stripe para buscar produtos e processar checkouts de forma segura.
        </p>
        <p>
          Durante o desenvolvimento, foram aplicados conceitos fundamentais de
          frameworks modernos:
        </p>
        <br />
        <ul>
          <li>
            <strong>Server-Side Rendering (SSR):</strong> Carregamento dinâmico
            de dados para garantir que a página esteja pronta antes de chegar ao
            navegador.
          </li>
          <br />
          <li>
            <strong>Static Site Generation (SSG):</strong> Geração de páginas
            estáticas para alta performance e otimização de motores de busca
            (SEO).
          </li>
          <br />
          <li>
            <strong>Pagamentos Reais:</strong> Integração completa com o
            checkout do Stripe para processamento de vendas.
          </li>
          <br />
          <li>
            <strong>Image Optimization:</strong> Uso do componente de imagem do
            Next.js para carregamento inteligente e responsivo.
          </li>
        </ul>
      </div>
    ),
    data: '06 de março de 2023',
    figma:
      'https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate',
    images: [IgniteShop],
    linkGithub: 'https://github.com/Lucas-M01/Ignite-shop',
  },
  {
    id: 3,
    name: 'Ignite Lab Design System',
    tagIcons: designSystemIcons,
    tagsIcons: toTagsIcons(designSystemIcons),
    languages: [
      'React',
      'Typescript',
      'Storybook',
      'Radix UI',
      'Clsx',
      'Vite',
      'Tailwind',
      'Phosphor Icons',
      'PostCSS',
    ],
    description: (
      <div>
        <p className="indent-4">
          O <strong>Ignite Lab Design System</strong> é um projeto prático
          desenvolvido durante o evento Ignite Lab da{' '}
          <strong>Rocketseat</strong>. O foco central foi a criação de uma
          biblioteca de componentes de interface do zero, priorizando a
          escalabilidade e a experiência do desenvolvedor.
        </p>
        <p>
          Através deste projeto, foi possível explorar conceitos avançados como:
        </p>
        <br />
        <ul>
          <li>
            <strong>Arquitetura de Componentes:</strong> Construção de átomos e
            moléculas de UI reutilizáveis.
          </li>
          <br />
          <li>
            <strong>Acessibilidade (A11y):</strong> Implementação de padrões
            WAI-ARIA utilizando componentes primitivos.
          </li>
          <br />
          <li>
            <strong>Documentação Interativa:</strong> Uso do Storybook para
            catalogar e testar estados dos componentes.
          </li>
          <br />
          <li>
            <strong>Design Tokens:</strong> Definição de cores, espaçamentos e
            tipografias padronizadas.
          </li>
        </ul>
      </div>
    ),
    data: '06 de março de 2023',
    figma:
      'https://www.figma.com/file/6cOvlXOf9kX9QWQ6DTYFvh/Ignite-Lab-Desing-System?t=X8ZCpydwX80sdRnI-0',
    images: [DesignSystem],
    linkGithub: 'https://github.com/Lucas-M01/ignite-lab-design-system',
  },
  {
    id: 4,
    name: '☕ Coffee Delivery',
    tagIcons: coffeeIcons,
    tagsIcons: toTagsIcons(coffeeIcons),
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
        <p className="indent-4">
          O <strong>Coffee Delivery</strong> é uma aplicação completa de
          e-commerce desenvolvida como desafio na trilha React do{' '}
          <strong>Ignite</strong>. O projeto simula a experiência de compra de
          uma cafeteria, desde a seleção de grãos especiais até a confirmação do
          pedido com detalhes de entrega.
        </p>
        <p>
          O foco principal deste desafio foi o domínio de estados complexos e a
          integração de bibliotecas de ecossistema React:
        </p>
        <br />
        <ul>
          <li>
            <strong>Gerenciamento de Carrinho:</strong> Controle total de
            adição, remoção e alteração de quantidades de itens.
          </li>
          <br />
          <li>
            <strong>Persistência de Dados:</strong> Manutenção dos itens do
            carrinho utilizando Local Storage.
          </li>
          <br />
          <li>
            <strong>Validação de Endereço:</strong> Fluxo completo de checkout
            com validação de campos obrigatórios e tipos de pagamento.
          </li>
          <br />
          <li>
            <strong>Experiência do Usuário (UX):</strong> Interface responsiva e
            feedback visual de itens no carrinho através de badges.
          </li>
        </ul>
      </div>
    ),
    data: '17 de outubro de 2022',
    figma:
      'https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate',
    images: [CoffeDelivery],
    linkGithub: 'https://github.com/Lucas-M01/CoffeDelivery-Ignite',
  },
  {
    id: 5,
    name: '📝 To Do List - Ignite',
    tagIcons: todoIcons,
    tagsIcons: toTagsIcons(todoIcons),
    languages: [
      'React',
      'Typescript',
      'Styled Components',
      'Radix UI',
      'React Hook Form',
      'Vite',
      'Zod',
      'uuid',
      'ESLint',
      'Json-server',
      'Phosphor Icons',
      'Date-fns',
      'Axios',
    ],
    description: (
      <div className="space-y-3">
        <p className="indent-4">
          Aplicação de controle de tarefas desenvolvida durante o primeiro
          desafio do Ignite — bootcamp da Rocketseat, Trilha de ReactJS. O
          projeto foi desenvolvido a partir de um template disponibilizado no
          Figma ToDo List.
        </p>
        <p className="indent-4">
          O foco do projeto é aprofundar, na prática, os Conceitos Fundamentais
          do ReactJS.
        </p>
      </div>
    ),
    data: '14 de novembro de 2022',
    figma:
      'https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate?node-id=0%3A1',
    images: [ToDoList],
    linkGithub: 'https://github.com/Lucas-M01/to-do-Ignite',
  },
]
