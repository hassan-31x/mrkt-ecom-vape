export const discount = {
    name: "discount",
    title: "Ecom - Discount Codes",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Discount Code Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "code",
        title: "Discount Code",
        description: "Any code of your choice (optional)",
        type: "string",
      },
      // {
      //   name: "amount",
      //   title: "Discount Amount",
      //   description:
      //     "enter any 1 from amount & percentage. Leave blank if not applicable",
      //   type: "number",
      // },
      {
        name: "percentage",
        title: "Discount Percentage",
        description:
          "enter any 1 from amount & percentage. Leave blank if not applicable",
        type: "number",
      },
      // {
      //   name: "products",
      //   title: "Products Included",
      //   type: "array",
      //   of: [
      //     {
      //       type: "reference",
      //       to: [{ type: "product" }],
      //     },
      //   ],
      // },
    ],
    preview: {
      select: {
        title: "name",
        perc: "percentage",
        // media: "mainImage",
      },
      prepare(selection) {
        const { perc } = selection;
        return { ...selection, subtitle: `${perc}%` };
      },
    },
  };