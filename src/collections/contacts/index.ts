import type { CollectionConfig } from "payload";

const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: { useAsTitle: "name" },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text" },
    { name: "message", type: "textarea", required: true },
    { name: "source", type: "text", defaultValue: "web" },
    {
      name: "meta",
      type: "group",
      fields: [
        { name: "ip", type: "text" },
        { name: "userAgent", type: "text" },
      ],
    },
  ],
  timestamps: true,
};
export default Contacts;
