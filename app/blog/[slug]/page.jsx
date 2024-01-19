import BlogPageComponent from "./_components"
import ProductPageComponent from "./_components"c

const fetchData = async (slug) => {
    try {
      const res = await client.fetch(`*[_type == 'product' && slug.current == $slug] {
        ...,
        relatedProducts[]->,
      }`, { slug })
      return res
    } catch (err) {
      console.log(err)
      return []
    }
  }
  
  export const revalidate = 60
const BlogPage = async () => {
    const { slug='' } = params
  const blog = await fetchData(slug)

  if (!blog?.length || !slug) return <NotFound />
  return <BlogPageComponent blog={blog} />>
}

export default BlogPage