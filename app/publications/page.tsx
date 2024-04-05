import publicationsData from '@/data/publicationsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Publications' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Publications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A selected list of my publications.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {publicationsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                authors={d.authors}
                href={d.href}
                imgSrc={d.imgSrc}
                tags={d.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
