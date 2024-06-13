import { createClient } from "@sanity/client";

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION;

export const client = createClient({
  apiVersion,
  projectId,
  dataset,
  useCdn: true
})