import { expect, test } from '@playwright/test'

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
