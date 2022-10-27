import Link from 'next/link'

export default function Card({ data, path }) {
  const { title, description, emoji } = data

  return (
    <Link as={`/components/${path}`} href={`/components/[slug]`}>
      <a className="flex items-end h-full p-8 pt-12 min-h-[250px] transition border-2 border-teal-400 rounded-lg bg-slate-900 hover:relative hover:bg-teal-400/5">
        <div>
          <span role="img" aria-hidden="true" className="text-3xl">
            {emoji}
          </span>

          <h5 className="mt-4 text-2xl font-bold text-white">{title}</h5>

          <p className="mt-1 text-lg font-medium leading-relaxed text-slate-300 line-clamp-2">
            {description}
          </p>
        </div>
      </a>
    </Link>
  )
}
