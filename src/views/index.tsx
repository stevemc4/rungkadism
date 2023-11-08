/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx } from 'https://deno.land/x/hono@v3.9.2/middleware.ts'
import { FC } from 'https://deno.land/x/hono@v3.9.2/jsx/index.ts'

import Layout from '../layout/default.tsx'

const Index: FC = () => {
  return (
    <Layout>
      Rungkadism
    </Layout>
  )
}

export default Index
