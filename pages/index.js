import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { mdx } from "../utils/fileToUrl";
import { exampleFilePaths, EXAMPLES_PATH } from "../utils/mdxUtils";

export default function Index({ examples }) {
  return (
    <>
      <Banner />

      <section id="exampleGrid">
        <div class="max-w-screen-xl px-4 mx-auto" id="mainContent">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {examples.map((example) => (
              <li key={example.filePath}>
                <Card
                  title={example.data.title}
                  description={example.data.description}
                  path={mdx(example.filePath)}
                  emoji={example.data.emoji}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
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
