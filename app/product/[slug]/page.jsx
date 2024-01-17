import NotFound from "@/app/not-found"
import ProductPageComponent from "./_components"

import { client } from "@/sanity/lib/client"

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

const ProductPage = async ({ params }) => {
  const { slug='' } = params
  const product = await fetchData(slug)

  if (!product?.length || !slug) return <NotFound />

  return <ProductPageComponent product={product[0]} />
}

export default ProductPage