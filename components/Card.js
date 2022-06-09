import Link from "next/link";
import CardTag from "./CardTag";

export default function Card({ data, path }) {
  const { title, description, emoji, basic, accessible } = data;

  return (
    <Link as={`/examples/${path}`} href={`/examples/[slug]`}>
      <a className="flex flex-col justify-between h-full p-8 transition bg-white border-4 border-black group rounded-xl hover:bg-pink-100 hover:shadow-offset hover:shadow-black">
        <div className="flex justify-end">
          <CardTag basic={basic} accessible={accessible} />
        </div>

        <div className="mt-8">
          <span role="img" aria-hidden="true" className="text-3xl">
            {emoji}
          </span>

          <h5 className="mt-4 text-2xl font-bold">{title}</h5>

          <p className="mt-1 text-lg font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}
