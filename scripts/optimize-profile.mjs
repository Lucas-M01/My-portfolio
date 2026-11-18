import { mkdir, stat } from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const source = fileURLToPath(
  new URL('../public/assets/imgs/profile/9.jpeg', import.meta.url),
)
const output = fileURLToPath(
  new URL(
    '../public/assets/imgs/profile/lucas-montenegro.webp',
    import.meta.url,
  ),
)

await mkdir(dirname(output), { recursive: true })
await sharp(source)
  .rotate()
  .resize({ width: 780, withoutEnlargement: true })
  .webp({ quality: 85, effort: 6 })
  .toFile(output)

const originalBytes = (await stat(source)).size
const optimizedBytes = (await stat(output)).size
console.log(
  `Foto de perfil: ${originalBytes} → ${optimizedBytes} bytes (${(
    (1 - optimizedBytes / originalBytes) *
    100
  ).toFixed(1)}% menor).`,
)
