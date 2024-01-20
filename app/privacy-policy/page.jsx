import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

import PageHeader from "@/components/features/page-header";
import { RichTextComponents } from "@/components/features/rich-text-component";

const fetchData = async (slug) => {
  try {
    const res = await client.fetch(`*[_type == 'privacyPolicy'] {
        ...,
      }`);
    return res?.[0];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const revalidate = 60;

const PrivacyPolicyPage = async () => {
  const data = await fetchData();

  return (
    <div className="main">
      <PageHeader title="Privacy Policy" subTitle="" />
      <div className="w-full max-w-[1000px] mx-auto py-20">
        <PortableText
          value={data?.privacyPolicyText || ""}
          components={RichTextComponents}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
