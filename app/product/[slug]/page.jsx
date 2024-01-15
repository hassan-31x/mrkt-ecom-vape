import ProductPageComponent from "./_components"

const ProductPage = ({ params }) => {
    const { slug='' } = params
  return <ProductPageComponent slug={slug} />
}

export default ProductPage