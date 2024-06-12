// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// export const client = sanityClient({
//   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
//   dataset: "production",
//   apiVersion: "2024-06-15",
//   useCdn: true,
//   token: process.env.REACT_APP_SANITY_TOKEN,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const writeClient = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-06-15",
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-06-15",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
