import HomePageComponent from './_components'

import { client } from '@/sanity/lib/client'

const fetchData = async () => {
  try {

    const res = await client.fetch(`*[_type == 'product'] {
      ...,
      relatedProducts[]->,
    }`)
    return res
  } catch (err) {
    console.log(err)
    return []
  }
}

const HomePage = async () => {
  const products = await fetchData()
  const bestSellers = products.filter(product => product.showInTrendy)
  const hotProducts = products.filter(product => product.hot)


  return <HomePageComponent products={products} bestSellers={bestSellers} hotProducts={hotProducts} />
}

export default HomePage