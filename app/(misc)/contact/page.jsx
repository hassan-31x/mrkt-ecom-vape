import { client } from '@/sanity/lib/client'
import ContactPageComponent from './_components/index'

export const metadata = {
  title: "Contact Us",
}

const fetchData = async (slug) => {
  try {
    const res = await client.fetch(`*[_type == 'contact'] {
      ...,
    }`)
    return res
  } catch (err) {
    console.log(err)
    return []
  }
}

export const revalidate = 60


const ContactPage = async () => {
  const data = await fetchData()

  return <ContactPageComponent contact={data?.[0]} />
}

export default ContactPage