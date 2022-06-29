import { useEffect, useState } from "react";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Banner from "../components/Banner";
import Card from "../components/Card";

import { mdx } from "../utils/fileToUrl";

import { exampleFilePaths, EXAMPLES_PATH } from "../utils/mdxUtils";

export default function Index({ examples }) {
  let [basic, setBasic] = useState(true);
  let [accessible, setAccessible] = useState(true);
  let [components, setComponents] = useState(examples);

  useEffect(() => {
    const filteredComponents = examples.filter((component) => {
      if (basic && accessible) {
        return true;
      }

      if (basic && !accessible) {
        return component.data.basic;
      }

      if (accessible && !basic) {
        return component.data.accessible;
      }
    });

    setComponents(filteredComponents);
  }, [basic, accessible]);

  let basicCount = examples.filter((example) => example.data.basic).length;

  let accessibleCount = examples.filter(
    (example) => example.data.accessible
  ).length;

  return (
    <>
      <Banner />

      <div id="mainContent" className="pt-16 -mt-16">
        <div className="max-w-screen-xl px-4 mx-auto space-y-12">
          <section>
            <strong className="text-lg font-medium">Filter Components</strong>

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                className={`px-5 py-3 text-sm font-medium border-2 border-black rounded-lg ${
                  basic && "bg-black text-white"
                }`}
                onClick={() => setBasic(!basic)}
              >
                Basic
                <sup className="ml-0.5">({basicCount})</sup>
              </button>

              <button
                type="button"
                className={`px-5 py-3 text-sm font-medium border-2 border-black rounded-lg ${
                  accessible && "bg-black text-white"
                }`}
                onClick={() => setAccessible(!accessible)}
              >
                Accessible
                <sup className="ml-0.5">({accessibleCount})</sup>
              </button>
            </div>
          </section>

          <section>
            {components.length ? (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {components.map((component) => (
                  <li key={component.filePath}>
                    <Card
                      data={component.data}
                      path={mdx(component.filePath)}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lg font-medium text-center">
                No components found. Try a different filter.
              </p>
            )}
          </section>
        </div>
      </div>
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
