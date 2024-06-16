import { defineConfig, renderStudio } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// const projectId = process.env.REACT_APP_PUBLIC_SANITY_PROJECT_ID || "";
// const dataset = process.env.REACT_APP_PUBLIC_SANITY_DATASET || "";

export default defineConfig({
  name: "default",
  title: "react-portfolio",
  basePath: "/studio",

  projectId: "3x68j9xe",
  dataset: "production",

  plugins: [
    structureTool({ structure: (S, context) => {
      return S.list()
        .title("Content")
        .items([orderableDocumentListDeskItem({ type: "project", S, context })]);
    } 
  }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
});

// const config =  defineConfig({
//   name: "default",
//   title: "react-portfolio",
//   basePath: "/studio",

//   projectId: "3x68j9xe",
//   dataset: "production",

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// });

// renderStudio(document.getElementById("studio-app"), config, {reactStrictMode: true});
