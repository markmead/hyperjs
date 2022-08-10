import Link from 'next/link'

import { useRouter } from 'next/router'

export default function SideBar({ examples }) {
  let nextRouter = useRouter()

  return (
    <aside className="w-72 border-r border-stone-100 fixed inset-y-0 left-0 overflow-y-auto">
      <div className="sticky top-0 inset-x-0 bg-white border-b px-4 h-20 border-stone-100 flex items-center">
        <p>
          <Link href="/">
            <a className="flex gap-1.5">
              <span aria-hidden="true" role="img">
                👾
              </span>

              <span className="text-stone-700 font-bold">HyperJS</span>
            </a>
          </Link>

          <small className="text-xs mt-1.5 text-stone-700">
            Components for Alpine JS
          </small>
        </p>
      </div>

      <nav className="p-4">
        <ul>
          {examples &&
            examples.map((example) => (
              <li key={example.filePath}>
                <Link
                  as={`/components/${example.filePath.replace('.mdx', '')}`}
                  href={`/components/[slug]`}
                >
                  <a
                    className={`text-xs p-2 rounded-lg font-medium block
                      ${
                        nextRouter.query.slug ===
                        example.filePath.replace('.mdx', '')
                          ? 'text-stone-600 bg-stone-100'
                          : 'text-stone-500 hover:bg-stone-100 hover:text-stone-600'
                      }
                      `}
                  >
                    {example.data.title}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  )
}
