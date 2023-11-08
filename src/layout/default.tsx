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
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}

export default Default
