export const faq = {
  name: "faq",
  title: "Misc - FAQ",
  type: "document",
  fields: [
    {
      name: "categoryName",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "array",
              of: [{ type: "block" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "order",
              title: "Arrangement Number",
              description:
                "Which order this question should appear in the list",
              type: "number",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
