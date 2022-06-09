import Link from "next/link";
import CardTag from "./CardTag";

export default function Card({ data, path }) {
  const { title, description, emoji, basic, accessible } = data;

  return (
    <Link as={`/examples/${path}`} href={`/examples/[slug]`}>
      <a className="relative block h-56 group">
        <CardTag basic={basic} accessible={accessible} />

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
