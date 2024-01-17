//? further customization for rich text from Sanity

import Image from "next/image";
import Link from "next/link";

import urlFor from "@/sanity/lib/image";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="">{children}</ul>,
    number: ({ children }) => <ol className="">{children}</ol>,
  },
  block: {
    h1: ({ children }) => <h1 className="">{children}</h1>,
    h2: ({ children }) => <h2 className="">{children}</h2>,
    h3: ({ children }) => <h3 className="">{children}</h3>,
    h4: ({ children }) => <h4 className="">{children}</h4>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-[#f05970] border-l-2 pl-3">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f05970] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
