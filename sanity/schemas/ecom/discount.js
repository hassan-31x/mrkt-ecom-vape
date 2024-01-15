export const discount = {
    name: "discount",
    title: "Ecom - Discount Codes",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Code Name",
        description: "optional",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "code",
        title: "Code",
        description: "Any code of your choice",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "amount",
        title: "Discount Amount",
        description:
          "enter any 1 from amount & percentage. Leave blank if not applicable",
        type: "number",
      },
      {
        name: "percentage",
        title: "Discount Percentage",
        description:
          "enter any 1 from amount & percentage. Leave blank if not applicable",
        type: "number",
      },
      {
        name: "products",
        title: "Products Included",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "product" }],
          },
        ],
      },
    ],
  };