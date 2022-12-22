import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { v4: uuidv4 } = require("uuid");
const jsonfile = require("jsonfile");
const pages = require("../public/pages.json");
const posts = require("../public/posts.json");

const site = [...pages, ...posts];

// eslint-disable-next-line array-callback-return
const searchIndex = site.map((item) => {
  console.log(item.attributes);
  if (!item.attributes.hideFromSearch) {
    const obj = { ...item.attributes };
    obj.id = item.id;
    obj.idUnique = uuidv4();
    return obj;
  }
});

jsonfile.writeFileSync(
  `./assets/json/searchIndex.json`,
  searchIndex,
  function (err) {
    if (err) {
      console.error(err);
    }
  }
);

console.log("searchIndex.json created in /assets/json/");
