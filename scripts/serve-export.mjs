import { access, readFile, stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('../out/', import.meta.url)))
await access(join(root, 'index.html'))

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
}

createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return
  }

  try {
    const pathname = decodeURIComponent(
      new URL(request.url, 'http://127.0.0.1:4173').pathname,
    )
    let file = resolve(root, `.${pathname}`)
    if (file !== root && !file.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end()
      return
    }

    if ((await stat(file)).isDirectory()) file = join(file, 'index.html')
    const body = await readFile(file)
    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(file)] ?? 'application/octet-stream',
      'Cache-Control': 'no-store',
    })
    response.end(request.method === 'HEAD' ? undefined : body)
  } catch {
    response.writeHead(404).end('Não encontrado')
  }
}).listen(4173, '127.0.0.1')
