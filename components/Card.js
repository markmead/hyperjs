import Link from "next/link";

export default function Card({
  title,
  description,
  path,
  emoji,
  simple,
  accessible,
}) {
  return (
    <Link as={`/examples/${path}`} href={`/examples/[slug]`}>
      <a className="relative block h-56 group">
        {(simple || accessible) && (
          <span className="absolute z-50 text-xs font-medium text-white bg-black top-4 right-6 px-3 py-1.5 rounded-full group-hover:right-8 group-hover:top-2 transition-all">
            {simple && "Simple"}
            {accessible && "Accessible"}
          </span>
        )}

        <div className="relative flex items-end h-full transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8">
          <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true"
            >
              {emoji}
            </span>

            <p className="mt-4 text-xl font-bold sm:text-2xl">{title}</p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p className="text-2xl font-bold">{title}</p>

            <p className="mt-4 text-lg font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
