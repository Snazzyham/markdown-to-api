const fs = require("fs");
const matter = require("gray-matter");
const JsonDB = require("node-json-db");

const db = new JsonDB("db", true, true);

let posts = [];

let id = 0;
// Have to add property of ++ID!

for (let i = 2; i < process.argv.length; i++) {
  let str = fs.readFileSync(process.argv[i], "utf8");
  let obj = matter(str);
  let post = {
    id: ++id,
    content: obj.content,
    matter: obj.data
  };
  posts.push(post);
}

db.push("/posts", posts);
