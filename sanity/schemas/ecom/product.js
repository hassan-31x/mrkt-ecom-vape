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
      validation: (Rule) => Rule.required(),
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
      name: "ratings",
      title: "Ratings",
      description: "Average review score 1-5",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
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
      title: "Show In Best Seller?",
      type: "boolean",
    },
    {
      name: "pictures",
      title: "Pictures",
      type: "array",
      of: [{ type: "image" }],
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
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "stars",
              title: "Stars",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5),
            },
            {
              name: "createdAt",
              title: "Created At",
              type: "datetime",
              options: {
                dateFormat: "YYYY-MM-DD",
                timeFormat: "HH:mm",
                calendarTodayLabel: "Today",
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "pictures.0.img",
    },
  },
};
