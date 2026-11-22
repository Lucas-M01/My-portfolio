import Link from 'next/link'
import type { Project } from '@/types/project'
import IgniteShop from '../../public/assets/imgs/igniteShop/home.webp'
import IgniteDetails from '../../public/assets/imgs/igniteShop/details-product.webp'
import IgniteCart from '../../public/assets/imgs/igniteShop/carrinho.webp'
import IgniteCheckout from '../../public/assets/imgs/igniteShop/checkout.webp'
import DesignSystem from '../../public/assets/imgs/designSystem/HomeDS.webp'
import Storybook from '../../public/assets/imgs/designSystem/storybook.webp'
import CupcakeHo from '../../public/assets/imgs/cupcake/HomeCup.webp'
import CupcakeCh from '../../public/assets/imgs/cupcake/Checkout.webp'
import CupcakePr from '../../public/assets/imgs/cupcake/Products.webp'
import CupcakePe from '../../public/assets/imgs/cupcake/Pedidos.webp'
import CatalogHome from '../../public/assets/imgs/catalogo-digital/vitrine.webp'
import CatalogFilter from '../../public/assets/imgs/catalogo-digital/filtro.webp'
import CatalogDetails from '../../public/assets/imgs/catalogo-digital/detalhe-produto.webp'
import CatalogCart from '../../public/assets/imgs/catalogo-digital/carrinho.webp'
import CatalogSearch from '../../public/assets/imgs/catalogo-digital/busca.webp'
import CatalogMobile from '../../public/assets/imgs/catalogo-digital/vitrine-mobile.webp'
import CatalogAdmin from '../../public/assets/imgs/catalogo-digital/admin-homepng.webp'
import CatalogProducts from '../../public/assets/imgs/catalogo-digital/admin-products.webp'
import CatalogNewProduct from '../../public/assets/imgs/catalogo-digital/new-product.webp'
import CatalogAdminMobile from '../../public/assets/imgs/catalogo-digital/admin-home-cell.webp'
import CatalogProductsMobile from '../../public/assets/imgs/catalogo-digital/admin-product-cell.webp'
import CatalogNewProductMobile from '../../public/assets/imgs/catalogo-digital/new-product-cell.webp'
import VoxHome from '../../public/assets/imgs/VoxNovel/home.webp'
import VoxDetails from '../../public/assets/imgs/VoxNovel/details-obra.webp'
import VoxAdd from '../../public/assets/imgs/VoxNovel/add-obra.webp'
import VoxReader from '../../public/assets/imgs/VoxNovel/leitura.webp'
import VoxSpeech from '../../public/assets/imgs/VoxNovel/ouvir.webp'
import VoxSettings from '../../public/assets/imgs/VoxNovel/config.webp'

export const projects: readonly Project[] = [
  {
    id: 6,
    name: 'Catálogo Digital',
    technologyIds: [
      'next',
      'react',
      'typescript',
      'tailwind',
      'shadcn',
      'postgresql',
      'zod',
    ],
    stack: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Supabase (Postgres, Auth e Storage)',
      'Zod',
      'Biome',
    ],
    description: (
      <div className="space-y-3">
        <p>
          Catálogo digital para lojas, com busca, filtros, carrinho e envio do
          pedido completo em uma única mensagem pelo WhatsApp.
        </p>
        <p>
          <strong>Para quem compra:</strong> navegação por categoria, promoções,
          detalhes dos produtos e ajuste de quantidades no carrinho. O pedido é
          combinado com a loja pelo WhatsApp, sem pagamento online ou API
          oficial de mensagens.
        </p>
        <p>
          <strong>Para quem administra:</strong> painel autenticado para
          gerenciar produtos, categorias, promoções programadas e horários de
          funcionamento, com upload de imagens e interface adaptada ao celular.
        </p>
        <p>
          <strong>Decisões técnicas:</strong> validação dos formulários no
          servidor, controle de acesso com sessão e políticas do banco,
          conversão de imagens para WebP e bloqueio de pedidos fora do horário
          de atendimento.
        </p>
      </div>
    ),
    dateLabel: 'Projeto autoral · 2026',
    images: [
      CatalogHome,
      CatalogDetails,
      CatalogCart,
      CatalogFilter,
      CatalogSearch,
      CatalogMobile,
      CatalogAdmin,
      CatalogProducts,
      CatalogNewProduct,
      CatalogAdminMobile,
      CatalogProductsMobile,
      CatalogNewProductMobile,
    ],
    repositoryUrl: 'https://github.com/Lucas-M01/catalogo-digital',
  },
  {
    id: 7,
    name: 'VoxNovel',
    technologyIds: [
      'react',
      'typescript',
      'python',
      'postgresql',
      'zod',
      'jest',
    ],
    stack: [
      'React Native',
      'Expo',
      'Expo Router',
      'TypeScript',
      'TanStack Query',
      'Zod',
      'expo-speech',
      'Python',
      'FastAPI',
      'Pydantic',
      'Supabase (Postgres e Storage)',
      'CTranslate2',
      'SentencePiece',
      'pytest',
      'Jest',
    ],
    description: (
      <div className="space-y-3">
        <p>
          Aplicativo mobile para ler e ouvir webnovels, acompanhar o progresso
          por fonte e salvar capítulos para leitura offline.
        </p>
        <p>
          <strong>Funcionalidades:</strong> biblioteca, busca e cadastro de
          obras, leitor personalizável, voz nativa do aparelho com controle de
          velocidade e escolha entre texto original e português.
        </p>
        <p>
          <strong>Integração:</strong> aplicativo em React Native/Expo conectado
          a uma API Python/FastAPI. A tradução local de inglês para português
          usa CTranslate2 e SentencePiece; os capítulos baixados e as
          preferências ficam disponíveis no aparelho.
        </p>
        <p>
          <strong>Desafios técnicos:</strong> cancelamento e retomada da voz,
          proteção contra callbacks atrasados, downloads sem duplicação,
          validação dos dados locais e limites de processamento no backend.
        </p>
        <p>
          <strong>Validação:</strong> testes de backend e mobile e integração
          contínua. A entrega foi validada pelo autor no Android; a
          disponibilidade das fontes externas pode variar. O repositório
          documenta a execução local e os limites de iOS e distribuição.
        </p>
      </div>
    ),
    dateLabel: 'Projeto autoral · 2026',
    images: [VoxHome, VoxDetails, VoxAdd, VoxReader, VoxSpeech, VoxSettings],
    repositoryUrl: 'https://github.com/Lucas-M01/VoxNovel',
  },
  {
    id: 1,
    name: '🧁 UAI Cupcake',
    technologyIds: [
      'react',
      'tailwind',
      'typescript',
      'reactRouter',
      'reactHookForm',
      'vite',
      'shadcn',
      'zod',
      'kotlin',
    ],
    stack: [
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Frontend
          </Link>{' '}
          |{' '}
          <Link
            href="https://github.com/PIC-UNICSUL/uai-cupcake-api"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Parte 1
          </Link>{' '}
          |{' '}
          <Link
            href="https://www.youtube.com/watch?v=mZxgTtU3mic"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Cairo Aparecido Campos
          </Link>
          ,{' '}
          <Link
            href="https://www.linkedin.com/in/thaynarasp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Thaynara Silva Pinto
          </Link>
          ,{' '}
          <Link
            href="https://www.linkedin.com/in/lucas-m01/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Lucas Montenegro Nunes dos Santos
          </Link>
          ,{' '}
          <Link
            href="https://www.linkedin.com/in/kayle-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Mikaelle Coutinho de Jesus Barreto
          </Link>
          .
        </p>
      </div>
    ),
    dateLabel: '30 de dezembro de 2024',
    figmaUrl:
      'https://www.figma.com/design/KoOXRhI80ssATpRjinXURJ/Loja-Cupcake?node-id=15-15525',
    images: [CupcakeHo, CupcakePr, CupcakeCh, CupcakePe],
    repositoryUrl: 'https://github.com/PIC-UNICSUL',
  },
  {
    id: 2,
    name: '🛒 Ignite Shop',
    technologyIds: ['react', 'next', 'typescript', 'axios', 'stripe'],
    stack: [
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
            <strong>Checkout:</strong> Integração com o checkout hospedado do
            Stripe para demonstrar o fluxo de pagamento.
          </li>
          <br />
          <li>
            <strong>Image Optimization:</strong> Uso do componente de imagem do
            Next.js para carregamento inteligente e responsivo.
          </li>
        </ul>
      </div>
    ),
    dateLabel: '06 de março de 2023',
    figmaUrl:
      'https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate',
    images: [IgniteShop, IgniteDetails, IgniteCart, IgniteCheckout],
    repositoryUrl: 'https://github.com/Lucas-M01/Ignite-shop',
  },
  {
    id: 3,
    name: 'Ignite Lab Design System',
    technologyIds: [
      'react',
      'storybook',
      'typescript',
      'vite',
      'tailwind',
      'postcss',
    ],
    stack: [
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
    dateLabel: '06 de março de 2023',
    figmaUrl:
      'https://www.figma.com/file/6cOvlXOf9kX9QWQ6DTYFvh/Ignite-Lab-Desing-System?t=X8ZCpydwX80sdRnI-0',
    images: [DesignSystem, Storybook],
    repositoryUrl: 'https://github.com/Lucas-M01/ignite-lab-design-system',
  },
]
