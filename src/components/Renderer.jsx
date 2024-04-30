import { MDXRemote } from 'next-mdx-remote'

export default function Renderer({ mdxSource, mdxComponents = {}, mdxScope = {} }) {
  return <MDXRemote {...mdxSource} components={mdxComponents} scope={mdxScope} />
}
