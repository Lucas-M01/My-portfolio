import { expect, test } from '@playwright/test'

test('entrada aguarda hidratação sem exibir o conteúdo antes da animação', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  let releaseScripts
  const scriptsReady = new Promise((resolve) => {
    releaseScripts = resolve
  })
  await page.route('**/_next/**/*.js', async (route) => {
    await scriptsReady
    await route.continue()
  })
  try {
    await page.goto('/', { waitUntil: 'commit' })
    const title = page.getByRole('heading', {
      name: 'Lucas Montenegro',
      exact: true,
    })
    await expect(title).toHaveCSS('opacity', '0')
    const about = page
      .getByRole('heading', { name: 'Sobre mim', exact: true })
      .locator('..')
    await expect(about).toHaveCSS('opacity', '0')
    releaseScripts()
    await expect(title).toHaveCSS('opacity', '1')
    await about.scrollIntoViewIfNeeded()
    await expect(about).toHaveCSS('opacity', '1')
    await title.scrollIntoViewIfNeeded()
    await expect(about).toHaveCSS('opacity', '1')
    await about.scrollIntoViewIfNeeded()
    await expect(about).toHaveCSS('opacity', '1')
  } finally {
    releaseScripts()
  }
})

async function expectSafeExternalLinks(page) {
  const unsafeLinks = await page
    .locator('a[target="_blank"]')
    .evaluateAll((links) =>
      links
        .filter(
          (link) =>
            !link.relList.contains('noopener') ||
            !link.relList.contains('noreferrer'),
        )
        .map((link) => link.href),
    )
  expect(unsafeLinks).toEqual([])
}

test('modal pode ser usado por teclado e restaura o foco', async ({ page }) => {
  await page.goto('/')
  const card = page.getByRole('button', {
    name: 'Ver detalhes de 🧁 UAI Cupcake',
    exact: true,
  })
  await card.press('Enter')
  const dialog = page.getByRole('dialog', { name: '🧁 UAI Cupcake' })
  await expect(dialog).toBeVisible()

  await dialog.getByRole('group', { name: /^Imagens de/ }).press('ArrowRight')
  await expect(
    dialog.getByRole('button', { name: 'Ver imagem 2 de 🧁 UAI Cupcake' }),
  ).toHaveAttribute('aria-pressed', 'true')

  const lastImage = dialog.getByRole('button', {
    name: 'Ver imagem 4 de 🧁 UAI Cupcake',
  })
  await lastImage.press('Enter')
  await expect(lastImage).toHaveAttribute('aria-pressed', 'true')

  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(card).toBeFocused()
  await card.press('Enter')
  await expect(
    dialog.getByRole('button', { name: 'Ver imagem 1 de 🧁 UAI Cupcake' }),
  ).toHaveAttribute('aria-pressed', 'true')
})

test('todos os projetos abrem com título, imagem, stack e repositório', async ({
  page,
}) => {
  test.setTimeout(60_000)
  await page.goto('/')
  await expectSafeExternalLinks(page)
  const cards = page.locator('#portfolio').getByRole('button', {
    name: /^Ver detalhes de /,
  })
  const count = await cards.count()
  expect(count).toBeGreaterThan(0)

  for (let index = 0; index < count; index++) {
    const card = cards.nth(index)
    const name = (await card.getAttribute('aria-label')).replace(
      'Ver detalhes de ',
      '',
    )
    await card.click()
    const dialog = page.getByRole('dialog', { name, exact: true })
    await expect(dialog).toBeVisible()
    await expectSafeExternalLinks(page)
    await expect(
      dialog.getByRole('heading', { name, exact: true }),
    ).toBeVisible()
    await expect(
      dialog.getByRole('img', { name: /^Screenshot / }),
    ).toBeVisible()
    expect(
      await dialog
        .getByRole('list', { name: 'Tecnologias utilizadas' })
        .getByRole('listitem')
        .count(),
    ).toBeGreaterThan(0)
    await expect(
      dialog.getByRole('link', { name: 'Repositório', exact: true }),
    ).toHaveAttribute('href', /^https:\/\/github\.com\//)
    await dialog.getByRole('button', { name: 'Fechar modal' }).click()
    await expect(dialog).toBeHidden()
  }
})

test('página e modal cabem na tela de celular', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)

  await page
    .getByRole('button', { name: 'Ver detalhes de 🧁 UAI Cupcake' })
    .click()
  const dialog = page.getByRole('dialog', { name: '🧁 UAI Cupcake' })
  await expect(dialog).toBeVisible()
  const bounds = await dialog.boundingBox()
  expect(bounds.x).toBeGreaterThanOrEqual(0)
  expect(bounds.y).toBeGreaterThanOrEqual(0)
  expect(bounds.x + bounds.width).toBeLessThanOrEqual(390)
  expect(bounds.y + bounds.height).toBeLessThanOrEqual(844)
  await dialog.getByRole('button', { name: 'Fechar modal' }).click()
  await expect(dialog).toBeHidden()
})

for (const viewport of [
  { width: 320, height: 568, label: '320 px' },
  { width: 640, height: 450, label: 'reflow equivalente a zoom de 200%' },
]) {
  test(`conteúdo e controles acessíveis em ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true)

    for (const link of await page
      .getByRole('contentinfo')
      .getByRole('link', {
        name: /^(GitHub|LinkedIn|Email)$/,
      })
      .all()) {
      const bounds = await link.boundingBox()
      expect(bounds.width).toBeGreaterThanOrEqual(24)
      expect(bounds.height).toBeGreaterThanOrEqual(24)
    }

    await page
      .getByRole('button', { name: 'Ver detalhes de 🧁 UAI Cupcake' })
      .press('Enter')
    const dialog = page.getByRole('dialog', { name: '🧁 UAI Cupcake' })
    await expect(dialog).toBeVisible()
    const bounds = await dialog.boundingBox()
    expect(bounds.x).toBeGreaterThanOrEqual(0)
    expect(bounds.y).toBeGreaterThanOrEqual(0)
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(viewport.width)
    expect(bounds.y + bounds.height).toBeLessThanOrEqual(viewport.height)

    const close = dialog.getByRole('button', { name: 'Fechar modal' })
    const closeBounds = await close.boundingBox()
    expect(closeBounds.width).toBeGreaterThanOrEqual(44)
    expect(closeBounds.height).toBeGreaterThanOrEqual(44)
    await expect(close).toBeFocused()
    await page.keyboard.press('Shift+Tab')
    await expect(
      dialog.getByRole('link', { name: 'Repositório', exact: true }),
    ).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(close).toBeFocused()

    const description = dialog.getByRole('region', {
      name: 'Descrição de 🧁 UAI Cupcake',
    })
    expect((await description.boundingBox()).height).toBeGreaterThan(40)
    await close.press('Tab')
    const carousel = dialog.getByRole('group', { name: /^Imagens de/ })
    await expect(carousel).toBeFocused()
    for (const thumbnail of await dialog
      .getByRole('button', { name: /^Ver imagem / })
      .all()) {
      await page.keyboard.press('Tab')
      await expect(thumbnail).toBeFocused()
    }
    await page.keyboard.press('Tab')
    await expect(description).toBeFocused()
    await description.press('End')
    await expect
      .poll(() => description.evaluate((e) => e.scrollTop))
      .toBeGreaterThan(0)
    await expect(
      description.getByRole('list', { name: 'Tecnologias utilizadas' }),
    ).toBeInViewport()
    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
  })
}

test.describe('export estático sem JavaScript', () => {
  test.use({ javaScriptEnabled: false })

  test('conteúdo principal permanece legível sem hidratação', async ({
    page,
  }) => {
    await page.goto('/')
    await expect(page.getByRole('main')).toBeVisible()
    for (const name of [
      'Lucas Montenegro',
      'Sobre mim',
      'Habilidades',
      'Projetos',
    ]) {
      const heading = page.getByRole('heading', { name, exact: true })
      await expect(heading).toBeVisible()
      const visible = await heading.evaluate((element) => {
        for (let node = element; node; node = node.parentElement) {
          if (getComputedStyle(node).opacity === '0') return false
        }
        return true
      })
      expect(visible).toBe(true)
    }
  })

  test('metadados e imagem de compartilhamento estão no HTML', async ({
    page,
    request,
  }) => {
    await page.goto('/')
    const siteUrl = new URL(
      '/',
      process.env.NEXT_PUBLIC_SITE_URL ||
        'https://lucasmontenegro-ns.vercel.app',
    ).href
    const imageUrl = new URL(
      process.env.NEXT_PUBLIC_OG_IMAGE || '/og-image.png',
      siteUrl,
    ).href

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      siteUrl,
    )
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      imageUrl,
    )
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      imageUrl,
    )
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image',
    )
    for (const name of ['twitter:title', 'twitter:description']) {
      await expect(page.locator(`meta[name="${name}"]`)).toHaveAttribute(
        'content',
        /\S+/,
      )
    }

    const schema = JSON.parse(
      await page.locator('script[type="application/ld+json"]').textContent(),
    )
    expect(schema).toMatchObject({
      '@type': 'Person',
      name: 'Lucas Montenegro',
      url: siteUrl,
    })
    const image = await request.get('/og-image.png')
    expect(image.ok()).toBe(true)
    const png = await image.body()
    expect(png.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a')
    expect(png.readUInt32BE(16)).toBe(1200)
    expect(png.readUInt32BE(20)).toBe(630)
  })
})
