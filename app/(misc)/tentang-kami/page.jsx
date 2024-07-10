import { client } from '@/sanity/lib/client'
import AboutPageComponent from './_components/index'

export const metadata = {
  title: "About",
}

const fetchData = async (slug) => {
  try {
    const res = await client.fetch(`*[_type == 'about'] {
      ...,
    }`)
    return res
  } catch (err) {
    console.log(err)
    return []
  }
}

export const revalidate = 60

const AboutPage = async () => {
  const data = await fetchData()

  return <AboutPageComponent about={data?.[0]} />
}

export default AboutPage