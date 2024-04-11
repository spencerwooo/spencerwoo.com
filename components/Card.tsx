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
    <div className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700 md:flex">
      <Link href={href} aria-label={`Link to ${title}`}>
        <Image
          alt={title}
          src={imgSrc}
          className="h-48 w-full border-r object-cover object-center p-2 md:h-full md:w-56"
          width={300}
          height={200}
        />
      </Link>

      <div className="p-4 md:w-5/6">
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
