import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { mdx } from "../utils/fileToUrl";
import { exampleFilePaths, EXAMPLES_PATH } from "../utils/mdxUtils";

import { useEffect, useState } from "react";

export default function Index({ examples }) {
  let [simple, setSimple] = useState(true);
  let [accessible, setAccessible] = useState(true);
  let [components, setComponents] = useState(examples);

  useEffect(() => {
    const filteredComponents = examples.filter((component) => {
      if (simple && accessible) {
        return true;
      }

      if (simple && !accessible) {
        return component.data.simple;
      }

      if (accessible && !simple) {
        return component.data.accessible;
      }
    });

    setComponents(filteredComponents);
  }, [simple, accessible]);

  return (
    <>
      <Banner />

      <div>
        <div className="max-w-screen-xl px-4 mx-auto">
          <strong className="text-lg font-medium">Filter Examples</strong>

          <div className="flex flex-wrap gap-4 mt-4">
            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium border-2 border-black rounded-lg ${
                simple && "bg-black text-white"
              }`}
              onClick={() => setSimple(!simple)}
            >
              Simple
            </button>

            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium border-2 border-black rounded-lg ${
                accessible && "bg-black text-white"
              }`}
              onClick={() => setAccessible(!accessible)}
            >
              Accessible
            </button>
          </div>
        </div>
      </div>

      <section id="exampleGrid" className="mt-12">
        <div className="max-w-screen-xl px-4 mx-auto" id="mainContent">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {components.map((component) => (
              <li key={component.filePath}>
                <Card
                  title={component.data.title}
                  description={component.data.description}
                  path={mdx(component.filePath)}
                  emoji={component.data.emoji}
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
