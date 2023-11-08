/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx } from 'https://deno.land/x/hono@v3.9.2/middleware.ts'
import { FC } from 'https://deno.land/x/hono@v3.9.2/jsx/index.ts'

import Layout from '../layout/default.tsx'

const Index: FC = () => {
  return (
    <Layout>
      <nav class="p-8">
        <h1 class="font-bold text-[#e31206] dark:text-[#ff685f] text-2xl text-center">Rungkadism</h1>
      </nav>
      <div class="mt-16 flex justify-center flex-col px-8 pb-8">
        <span class="text-[#e31206] dark:text-[#ff685f] text-6xl md:text-8xl lg:text-9xl text-center font-bold">0 Jam</span>
        <span class="text-2xl text-center font-medium mt-4">Sejak masalah terakhir LRT Jabodebek</span>
        <span class="text-xl text-center font-medium mt-2">(berdasarkan laporan <a href="https://google.com" class="underline">berikut</a>)</span>

        <span class="text-lg text-center font-medium mt-12">Ke-<i class="italic">rungkad</i>-an baru? Laporan sebelumnya salah? <a href="/lapor" class="underline">Buat laporan baru</a></span>
      </div>
    </Layout>
  )
}

export default Index
