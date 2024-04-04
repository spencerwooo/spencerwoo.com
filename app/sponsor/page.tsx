import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

import alipay from '@/data/alipay.png'
import wechatpay from '@/data/wechatpay.png'

export const metadata = genPageMetadata({ title: 'Sponsor' })

export default function Sponsor() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sponsor
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Hey! Thanks for considering to sponsor me. 🥂
          </p>
        </div>

        <article className="dark:prose-dark prose max-w-none pb-8 pt-10">
          <h3>爱发电</h3>
          <p>
            <a href="https://afdian.net/@spencerwoo" target="_blank" rel="noopener noreferrer">
              爱发电 · 连接创作者与粉丝的会员制平台
            </a>
          </p>
          <h3>Alipay and Wechat Pay</h3>
          <table>
            <thead>
              <tr>
                <th>Alipay</th>
                <th>Wechat Pay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src={alipay} alt="alipay" />
                </td>
                <td>
                  <Image src={wechatpay} alt="wechatpay" />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </>
  )
}
