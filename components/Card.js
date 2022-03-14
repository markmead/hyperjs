import Link from "next/link";

export default function Card({ title, description, path, emoji }) {
  return (
    <Link as={`/examples/${path}`} href={`/examples/[slug]`}>
      <a class="block h-56 group" href="/blog">
        <div class="relative flex items-end h-full transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8">
          <div class="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <span class="text-3xl sm:text-4xl" role="img" aria-hidden="true">
              {emoji}
            </span>
            <p class="mt-4 text-xl font-bold sm:text-2xl">{title}</p>
          </div>

          <div class="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p class="text-2xl font-bold">{title}</p>

            <p class="mt-4 text-lg font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
