/* eslint-disable prettier/prettier */
import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join } from 'path'

const dir = './public/assets'

const files = readdirSync(dir).filter(
    (f) => f.endsWith('.png') || f.endsWith('.jpg'),
)

for (const file of files) {
    const input = join(dir, file)
    const output = join(dir, file.replace(/\.(png|jpg)$/, '.webp'))
    await sharp(input).webp({ quality: 85 }).toFile(output)
    console.log(`✓ ${file} → ${file.replace(/\.(png|jpg)$/, '.webp')}`)
}
