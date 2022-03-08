import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import BannerSimple from "../../components/BannerSimple";
import { exampleFilePaths, EXAMPLES_PATH } from "../../utils/mdxUtils";

const components = {
  Example: dynamic(() => import("../../components/Example")),
};

export default function ExamplePage({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Alpine JS Snippets | HyperJS</title>
      </Head>

      <BannerSimple
        title={frontMatter.title}
        description={frontMatter.description}
      />

      <article className="mx-auto prose prose-lg">
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
