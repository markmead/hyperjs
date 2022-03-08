import Link from "next/link";

export default function Card({ title, description, path, emoji }) {
  return (
    <Link as={`/examples/${path}`} href={`/examples/[slug]`}>
      <a class="relative block group h-96">
        <span class="absolute inset-0 bg-pink-500 rounded-3xl"></span>

        <div class="relative flex items-end h-full transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl">
          <div class="px-8 pb-8 transition group-hover:opacity-0 group-hover:absolute">
            <span className="text-4xl" role="img" aria-hidden="true">
              {emoji}
            </span>

            <h2 class="mt-4 text-2xl font-bold">{title}</h2>
          </div>

          <div class="absolute p-8 transition opacity-0 group-hover:opacity-100 group-hover:relative">
            <h2 class="mt-4 text-2xl font-bold">{title}</h2>

            <p class="mt-4 text-lg font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
    // <Link as={`/examples/${path}`} href={`/examples/[slug]`}>
    //   <a className="relative block group rounded-xl">
    //     <span className="absolute inset-0 border-2 border-black border-dashed pointer-events-none"></span>

    //     <div className="transition bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
    //       <div className="px-8 pt-24 pb-8 transition group-hover:opacity-0 group-hover:absolute">
    //         <span className="text-3xl" aria-hidden="true" role="img">
    //           {emoji}
    //         </span>

    //         <h2 className="mt-4 text-2xl font-bold">{title}</h2>
    //       </div>
    //     </div>
    //   </a>
    // </Link>
  );
}
