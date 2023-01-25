import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import alipay from '@/data/alipay.png'
import wechatpay from '@/data/wechatpay.png'

export default function Sponsor() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sponsor
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Hey! Thanks for considering to sponsor me. 🥂
          </p>
        </div>

        <article className="prose pt-10 pb-8 dark:prose-dark max-w-none">
          <h3>爱发电</h3>
          <p>
            <a href="https://afdian.net/@spencerwoo" target="_blank" rel="noopener noreferrer">
              爱发电 · 连接创作者与粉丝的会员制平台
            </a>
          </p>
          <h3>Alipay and Wechat Pay</h3>
          <p>
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
          </p>
        </article>
      </div>
    </>
  )
}
