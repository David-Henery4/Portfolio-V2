import createImageUrlBuilder from "@sanity/image-url"

const projectId = process.env.REACT_APP_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.REACT_APP_PUBLIC_SANITY_DATASET || "";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId,
  dataset: dataset,
});

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto("format").fit("max").url()
}