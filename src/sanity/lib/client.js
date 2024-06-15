import { createClient } from "@sanity/client";

export const client = createClient({
  apiVersion: "2024-06-14",
  projectId: "3x68j9xe",
  dataset: "production",
  useCdn: true,
});
