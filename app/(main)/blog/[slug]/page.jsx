import { client } from "@/sanity/lib/client";

import SingleBlogPageComponent from "./_components"
import NotFound from "@/app/not-found";

export const metadata = {
  title: "Blog",
};

const fetchData = async (slug) => {
  try {
    const res = await client.fetch(
      `*[_type == 'post' && slug.current == $slug] {
        ...,
        author->,
        categories[]->,
        relatedBlogs[] {
          ...,
          categories[]->
        }->
      }`,
      { slug }
    );

    const popular = await client.fetch(
      `*[_type == 'post' && slug.current != $slug && popular == true] {
        ...,
        categories[]->,
        relatedBlogs[]->
      }`,
      { slug }
    );
    return [res, popular];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const revalidate = 60;

const SingleBlogPage = async ({ params }) => {
  const { slug = "" } = params;
  const [post, popular] = await fetchData(slug);

  if (!post?.length || !slug) return <NotFound />;

  return <SingleBlogPageComponent post={post[0]} popular={popular} />
};

export default SingleBlogPage;
