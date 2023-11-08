/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx } from 'https://deno.land/x/hono@v3.9.2/middleware.ts'
import { FC } from 'https://deno.land/x/hono@v3.9.2/jsx/index.ts'

import Layout from '../layout/default.tsx'

const Report: FC = () => {
  return (
    <Layout title="Lapor">
      <nav class="p-8">
        <h1 class="font-bold text-[#e31206] dark:text-[#ff685f] text-2xl text-center"><a href="/">Rungkadism</a></h1>
      </nav>
      <div class="mt-16 flex justify-center flex-col px-4 pb-4 md:px-8 md:pb-8">
        <h2 class="font-bold text-xl">Laporkan</h2>
        <form method="POST" class="mt-8">
          <p class="text-lg">
            Aku ingin melaporkan&nbsp;
            <select name="reportType" class="bg-transparent border-b-2 p-2 border-b-[#2d2d2d] dark:border-b-white font-bold" required>
              <option value="new" selected class="dark:bg-[#2d2d2d] font-bold">Ke-<i class="italic">rungkad</i>-an</option>
              <option value="correction" class="dark:bg-[#2d2d2d] font-bold">Salah Laporan</option>
            </select>&nbsp;
            dengan sumber dan bukti sebagai berikut:<br />
            <input
              name="proof"
              type="url"
              placeholder="Masukkan link berita/tweet/dll yang bisa diakses"
              class="bg-transparent mt-2 p-2 w-full max-w-3xl inline-block border-b-2 border-b-[#2d2d2d] dark:border-b-white font-bold"
              required
            /><br />
            <button type="submit" class="px-4 py-2 bg-[#2d2d2d] dark:bg-white text-white dark:text-[#2d2d2d] font-bold mt-6 rounded">Kirim Laporan</button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Report
