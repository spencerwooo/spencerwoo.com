import Image from './Image'
import Link from './Link'

const Card = ({
  title,
  description,
  authors,
  href,
  imgSrc,
  tag,
  tagColor,
  publisher,
  publishDate,
}) => (
  <div className="w-full p-4">
    <div className="relative flex flex-col border-t border-gray-200 dark:border-gray-700 md:flex-row">
      <div className="md:tex-3xl absolute right-0 top-4 hidden bg-opacity-50 text-xl font-light text-gray-300 dark:text-gray-700 md:block">
        {publishDate}
      </div>

      <div className="mt-6 flex-shrink-0">
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="h-32 w-full rounded-lg border object-cover object-center md:h-48 md:w-48 md:shadow-lg"
            width={192}
            height={192}
          />
        </Link>
      </div>

      <div className="mt-6 flex-grow md:ml-8 md:p-4">
        <p
          className="mb-2 inline-block rounded-sm px-1.5 text-sm font-bold text-white shadow-lg"
          style={{ backgroundColor: tagColor }}
        >
          {tag}
        </p>
        <h2 className="mb-1 text-lg font-bold leading-8 tracking-tight transition-all duration-150 hover:text-primary-700 hover:underline">
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose mb-2 max-w-none text-sm text-gray-400 dark:text-gray-300">
          {authors.split(', ').map((author: string, i: number, arr: string[]) => {
            const isLast = i === arr.length - 1
            const authorWithComma = isLast ? author : `${author}, `

            if (author === 'Shangbo Wu' || author === 'Shangbo Wu*') {
              return <b key={i}>{authorWithComma}</b>
            } else {
              return <span key={i}>{authorWithComma}</span>
            }
          })}
        </p>
        <p className="prose mb-2 max-w-none text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <p className="prose text-xs font-light text-primary-600">
          <em>{publisher}</em>, {publishDate}
        </p>
      </div>
    </div>
  </div>
)

export default Card
