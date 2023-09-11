import matter from 'gray-matter'
import { join } from 'path'
import { promises as fs } from 'fs'

import Container from '@component/Container'
import Grid from '@component/Grid'

async function getComponents() {
  const componentsPath = join(process.cwd(), '/src/data/components')
  const componentSlugs = await fs.readdir(componentsPath)

  const componentItems = await Promise.all(
    componentSlugs.map(async (componentSlug) => {
      const componentPath = join(componentsPath, componentSlug)
      const componentItem = await fs.readFile(componentPath, 'utf-8')

      const { data: componentData } = matter(componentItem)

      const componentSlugFormatted = componentSlug.replace('.mdx', '')

      return {
        title: componentData.title,
        description: componentData.description,
        emoji: componentData.emoji,
        slug: componentSlugFormatted,
      }
    })
  )

  return componentItems
}

export default async function Page() {
  const componentItems = await getComponents()

  return (
    <>
      <Banner />

      <Container classNames="pb-8 lg:pb-12">
        <Grid componentItems={componentItems} />
      </Container>
    </>
  )
}

function Banner() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto">
        <div className="max-w-xl">
          <h1 className="text-3xl font-black text-white sm:text-5xl">
            Enjoy the DOM
            <br />
            with <em className="mt-1 not-italic text-teal-400">Alpine JS</em> 💫
          </h1>

          <p className="mt-4 font-medium text-slate-300 sm:leading-relaxed sm:text-xl">
            Alpine JS allows you to write DOM manipulation all in your HTML,
            Liquid, Blade etc. Here is a collection of components that you can
            copy and paste into your project.
          </p>
        </div>
      </div>
    </section>
  )
}
