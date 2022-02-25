import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { exampleFilePaths, EXAMPLES_PATH } from "../../utils/mdxUtils";

const components = {
  Example: dynamic(() => import("../../components/Example")),
};

export default function ExamplePage({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Alpine JS Cheats</title>
      </Head>

      <header class="text-center">
        <nav>
          <Link href="/">
            <a className="text-sm font-medium">👈 Go Back</a>
          </Link>
        </nav>
      </header>

      <article class="prose prose-lg mx-auto">
        <h1>{frontMatter.title}</h1>

        <MDXRemote {...source} components={components} />
      </article>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const exampleFilePath = path.join(EXAMPLES_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(exampleFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = exampleFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
