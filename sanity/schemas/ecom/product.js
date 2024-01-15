export const product = {
  name: "product",
  title: "Ecom - Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "short_desc",
      title: "Short Description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sale_price",
      title: "Sale Price",
      description: "Only if there's a sale on this product",
      type: "number",
    },
    {
      name: "until",
      title: "Until",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "nicotinePercentage",
      title: "Available Nicotine Percentage",
      type: "array",
      of: [{ type: "number" }],
    },

    {
      name: "hot",
      title: "Hot",
      type: "boolean",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
    },
    {
      name: "showInTrendy",
      title: "Show In Trendy?",
      type: "boolean",
    },
    {
      name: "pictures",
      title: "Pictures",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "img",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.min(1).error("At least one picture must be added"),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "additionalInfo",
      title: "Additional Info",
      type: "blockContent",
    },
    {
      name: "shippingDetails",
      title: "Shipping Details",
      type: "blockContent",
    },
  ],
};
