export const user = {
  name: "user",
  title: "Auth - User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "discountsAvailable",
      title: "Discounts Available",
      type: "array",
      initialValue: [{
        _ref: "1de00e92-4f59-44ca-be10-c7b3bc3dea2e"
      }],
      of: [{ type: "reference", to: [{ type: "discount" }] }],
    },
    {
      // this is only if you use credentials provider
      name: "password",
      type: "string",
      hidden: true,
    },
    {
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    },
  ],
};
