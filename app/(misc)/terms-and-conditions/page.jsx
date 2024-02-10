import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

import PageHeader from "@/components/features/page-header";
import { RichTextComponents } from "@/components/features/rich-text-component";

const fetchData = async () => {
  try {
    const res = await client.fetch(`*[_type == 'termsCondition'] {
        ...,
      }`);
    return res?.[0];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const revalidate = 60;

const termsAndConditionsPage = async () => {
  const data = await fetchData();

  return (
    <div className="main">
      <PageHeader title="Terms & Conditions" subTitle="" />
      <div className="w-[95%] md:w-[85%] max-w-[1000px] mx-auto py-20">
        <PortableText
          value={data?.termsConditionText || ""}
          components={RichTextComponents}
        />
      </div>
    </div>
  );
};

export default termsAndConditionsPage;
