import dynamic from 'next/dynamic'
import Head from 'next/head'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import Layout from '../../components/Layout'
import BannerSimple from '../../components/BannerSimple'

import { exampleFilePaths, EXAMPLES_PATH } from '../../utils/mdxUtils'

const components = {
  Example: dynamic(() => import('../../components/Example')),
}

export default function ExamplePage({ examples, source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Alpine JS Snippets | HyperJS</title>
      </Head>

      <Layout examples={examples}>
        <BannerSimple
          title={frontMatter.title}
          description={frontMatter.description}
        />

        <article className="max-w-none prose">
          <MDXRemote {...source} components={components} />
        </article>
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const exampleFilePath = path.join(EXAMPLES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(exampleFilePath)

  const { content, data } = matter(source)

  const examples = exampleFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(EXAMPLES_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      examples,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = exampleFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
