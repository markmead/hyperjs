import { componentFilePaths, getComponentBySlug } from '@/utils/mdxUtils'

export default function handler(apiRequest, apiResponse) {
  if (apiRequest.method !== 'GET') {
    return
  }

  const searchData = componentFilePaths.flatMap(function (filePath) {
    return getComponentBySlug(filePath, ['title', 'description', 'slug'])
  })

  apiResponse.status(200).json(JSON.stringify(searchData, null, 2))
}
