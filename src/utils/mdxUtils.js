import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { fileToUrl } from '@/utils/fileToUrl'

export const COMPONENTS_PATH = join(process.cwd(), '/src/data/components')

export const componentFilePaths = fs
  .readdirSync(COMPONENTS_PATH)
  .filter((filePath) => /\.mdx?$/.test(filePath))

export function getComponentBySlug(filePath, dataFields) {
  const trueSlug = fileToUrl(filePath)
  const fullPath = join(COMPONENTS_PATH, `${trueSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: fileData } = matter(fileContents)

  const componentData = {}

  dataFields.forEach((dataField) => {
    if (dataField === 'slug') {
      componentData[dataField] = trueSlug
    }

    if (typeof fileData[dataField] !== 'undefined') {
      componentData[dataField] = fileData[dataField]
    }
  })

  return componentData
}
