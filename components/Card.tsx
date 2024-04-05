import Image from './Image'
import Link from './Link'

const Card = ({ title, description, authors, href, imgSrc, tags }) => (
  <div className="p-4">
    <div className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700 md:flex">
      <Link href={href} aria-label={`Link to ${title}`}>
        <Image
          alt={title}
          src={imgSrc}
          className="h-48 w-full object-cover object-center md:h-full md:w-80"
          width={300}
          height={200}
        />
      </Link>

      <div className="p-6 md:w-5/6">
        <h2 className="mb-2 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p>
          {tags.length !== 0 &&
            tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="mb-1 mr-2 inline-block rounded-md bg-primary-100 px-2 py-0.5 text-xs font-medium tracking-wide text-primary-800 dark:bg-primary-900 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
        </p>
        <p className="prose mb-2 max-w-none text-sm italic text-gray-400 dark:text-gray-300">
          {authors.split(', ').map((author: string, i: number, arr: string[]) => {
            const isLast = i === arr.length - 1
            const authorWithComma = isLast ? author : `${author},`

            if (author === 'Shangbo Wu' || author === 'Shangbo Wu*') {
              return <b key={i}>{authorWithComma}</b>
            } else {
              return <span key={i}>{authorWithComma}</span>
            }
          })}
        </p>
        <p className="prose mb-2 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
