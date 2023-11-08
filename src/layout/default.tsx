/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono@v3.9.2/middleware.ts'
import { FC } from 'https://deno.land/x/hono@v3.9.2/jsx/index.ts'

interface Props {
  title?: string
}

const Default: FC<Props> = ({ children, title }) => {
  return (
    <html lang="id">
      <head>
        <title>{title ? `${title} – Rungkadism` : 'Rungkadism'}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;1,500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href={Netlify.env.get("DENO_DEPLOYMENT_ID") ? '/static/output.css' : 'http://localhost:3999/static/output.css'} />
      </head>
      <body class="text-[#2d2d2d] dark:text-white dark:bg-[#2d2d2d] font-['Plus_Jakarta_Sans']">
        { children }
      </body>
    </html>
  )
}

export default Default
