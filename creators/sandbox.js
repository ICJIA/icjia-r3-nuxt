/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const jsonfile = require("jsonfile");
const _ = require("lodash");

const yaml = require("yaml");
const fsExtra = require("fs-extra");

const contentDir = path.join(__dirname, "../content");
// fsExtra.emptyDirSync(contentDir);
// console.log("Content directory cleared");

const SITE_URL = process.env.NUXT_PUBLIC_BASE_URL;
const API = process.env.NUXT_PUBLIC_API_BASE_URL;

const siteContent = [];

// const query = `query {
//     posts {
//       data {
//         id
//         attributes {
//           title
//           slug
//           summary
//           body
//           showTableOfContents
//           section
//           createdAt
//           updatedAt
//           publishedAt
//           searchMeta
//         }
//       }
//     }
//   }`;

// axios
//   .create({ baseURL: API })
//   .post("/graphql", {
//     query,
//     validateStatus: (status) => status === 200,
//     headers: {
//       "Accept-Encoding": "application/json",
//     },
//   })
//   .then((res) => {
//     res.data.data.posts.data.forEach((item) => {
//       console.log(item.attributes.slug);
//     });
//   });

axios

  .get("https://r3.icjia-api.cloud/api/posts", {
    validateStatus: (status) => status === 200,
    headers: {
      "Accept-Encoding": "application/json",
    },
  })
  .then((res) => {
    const routes = res.data.data.map((item) => {
      return `/news/${item.attributes.slug}`;
    });
    console.log(routes);
  });
