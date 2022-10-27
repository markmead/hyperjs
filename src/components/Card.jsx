import Link from "next/link";

export default function Card({ data, path }) {
  const { title, description, emoji } = data;

  return (
    <Link as={`/components/${path}`} href={`/components/[slug]`}>
      <a className="flex items-end h-full p-8 pt-12 transition border-2 border-teal-400/25 hover:border-teal-400 group rounded-xl">
        <div>
          <span role="img" aria-hidden="true" className="text-2xl">
            {emoji}
          </span>


          <h5 className="text-2xl font-bold text-white mt-4">{title}</h5>
          <p className="mt-1 text-lg font-medium leading-relaxed text-slate-300 line-clamp-2">
            {description}
          </p>
          </div>
      </a>
    </Link>
  );
}
