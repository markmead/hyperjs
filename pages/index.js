import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { exampleFilePaths, EXAMPLES_PATH } from "../utils/mdxUtils";

export default function Index({ examples }) {
  return (
    <>
      <article className="mx-auto prose prose-lg">
        <h1>Alpine JS Snippets</h1>

        <div className="not-prose">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {examples.map((example) => (
              <li
                className="border-2 border-gray-100 rounded-lg"
                key={example.filePath}
              >
                <Link
                  as={`/examples/${example.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/examples/[slug]`}
                >
                  <a className="block p-4 text-sm font-bold hover:bg-gray-50 focus:outline-none focus:ring">
                    {example.data.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}

export function getStaticProps() {
  const examples = exampleFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(EXAMPLES_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { examples } };
}
