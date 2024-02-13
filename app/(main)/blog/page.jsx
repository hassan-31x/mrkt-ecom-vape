import BlogPageComponent from "./_components/index.jsx"

import { client } from '@/sanity/lib/client'

export const metadata = {
  title: "Benefits",
}

const fetchData = async () => {
  try {

    const res = await client.fetch(`*[_type == 'post'] {
      ...,
      author->,
      categories[]->,
    }`)
    return res
  } catch (err) {
    console.log(err)
    return []
  }
}

export const revalidate = 60

const BlogPage = async () => {
  const posts = await fetchData()

  return <BlogPageComponent posts={posts} />
}

export default BlogPage