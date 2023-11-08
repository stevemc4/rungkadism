/** @jsx jsx */
/** @jsxFrag Fragment */

import { handle } from 'https://deno.land/x/hono@v3.9.2/adapter/netlify/mod.ts'
import { Hono } from 'https://deno.land/x/hono@v3.9.2/mod.ts'
import { jsx } from 'https://deno.land/x/hono@v3.9.2/middleware.ts'

import Index from '../../src/views/index.tsx';

const app = new Hono()

app.get('/', (c) => {
  return c.html(<Index />)
})

app.notFound((c) => {
  return c.text('404 RUNGKAD IS RILL')
})

export default handle(app)
