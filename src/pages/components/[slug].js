import dynamic from 'next/dynamic'
import Head from 'next/head'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import BannerSimple from '../../components/BannerSimple'

import { componentFilePaths, COMPONENTS_PATH } from '../../utils/mdxUtils'

const components = {
  Example: dynamic(() => import('../../components/Example')),
}

export default function ExamplePage({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} Alpine JS Component | HyperJS</title>
        <meta
          name="description"
          content={frontMatter.description}
          key="description"
        />
        <meta
          property="og:title"
          content={`${frontMatter.title} | HyperUI`}
          key="og:title"
        />
        <meta
          property="og:description"
          content={frontMatter.description}
          key="og:description"
        />
        <meta
          name="twitter:title"
          content={`${frontMatter.title} | HyperUI`}
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content={frontMatter.description}
          key="twitter:description"
        />
      </Head>

      <div className="bg-slate-900">
        <BannerSimple
          title={frontMatter.title}
          description={frontMatter.description}
        />

        <div className="max-w-screen-xl px-4 pb-12 mx-auto">
          <article className="mx-auto prose prose-invert">
            <MDXRemote {...source} components={components} />
          </article>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const componentFilePath = path.join(COMPONENTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(componentFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = componentFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
