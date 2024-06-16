import { defineType, defineField } from "sanity";
import { orderRankField,  } from "@sanity/orderable-document-list";

const projectSchema = defineType({
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    defineField({
      title: "Project Name",
      name: "projectName",
      type: "string",
    }),
    defineField({
      title: "Short Description",
      name: "descShort",
      type: "string",
    }),
    defineField({
      title: "Long Description",
      name: "descLong",
      type: "text",
    }),
    defineField({
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
    }),
    defineField({
      title: "Device Mockup Small",
      name: "deviceMockupSml",
      type: "image",
    }),
    defineField({
      title: "Device Mockup Large",
      name: "deviceMockupLg",
      type: "image",
    }),
    defineField({
      title: "Technologies Used",
      name: "technologiesUsed",
      type: "array",
      of: [
        {
          title: "Name of Technology",
          name: "NameOfTechnology",
          type: "string",
        },
      ],
    }),
    defineField({
      title: "Live Url",
      name: "liveUrl",
      type: "url",
    }),
    defineField({
      title: "Repo Url",
      name: "repoUrl",
      type: "url",
    }),
    orderRankField({type: "project", newItemPosition: "before"}),
  ],
});

export default projectSchema;
