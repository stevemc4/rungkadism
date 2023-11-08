/** @jsx jsx */
/** @jsxFrag Fragment */

import { handle } from 'https://deno.land/x/hono@v3.9.2/adapter/netlify/mod.ts'
import { Hono } from 'https://deno.land/x/hono@v3.9.2/mod.ts'
import { jsx } from 'https://deno.land/x/hono@v3.9.2/middleware.ts'

import Index from '../../src/views/index.tsx';
import Report from '../../src/views/report.tsx';

const app = new Hono()

app.get('/', (c) => {
  return c.html(<Index />)
})

app.get('/lapor', (c) => {
  return c.html(<Report />)
})

interface Submission {
  reportType: 'new' | 'correction'
  proof: string
}

app.post('/lapor', async (c) => {
  try {
    const body = (await c.req.parseBody()) as unknown as Submission
    const webhookUrl = Netlify.env.get('DISCORD_WEBHOOK_URL')
    if (!webhookUrl) {
      return c.text('500 SERVER RUNGKAD BOS', 500)
    }

    fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify({
        embeds: [{
          color: 14881286,
          title: 'NEW SUBMISSION!',
          fields: [
            {
              name: 'Type',
              value: body.reportType
            },
            {
              name: 'Proof URL',
              value: body.proof
            }
          ]
        }]
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return c.json(body)
  } catch (e) {
    return c.text('500 SERVER RUNGKAD BOS', 500)
  }
})

app.notFound((c) => {
  return c.text('404 RUNGKAD IS RILL')
})

export default handle(app)
