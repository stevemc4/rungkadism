import { handle } from 'https://deno.land/x/hono@v3.9.2/adapter/netlify/mod.ts'
import { Hono } from 'https://deno.land/x/hono@v3.9.2/mod.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.text('>LRT Jabodebek rungkad kah?\n-nggak tau, webnya belom jadi gan, malas ngoding saya')
})

export default handle(app)
