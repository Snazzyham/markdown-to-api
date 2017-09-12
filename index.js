const fs = require("fs");
const matter = require("gray-matter");
const JsonDB = require("node-json-db");
const series = require("async-series");
const jsonServer = require("json-server");
const cmd = require("node-cmd");
let posts = [];

let id = 0;
function checkDBExists(callback) {
  if (fs.existsSync("./db.json")) {
    fs.unlinkSync("./db.json");
  }

  callback();

  return true;
}

async function scrapePosts(callback) {
  //console.log("Scraping Posts");
  for (let i = 2; i < process.argv.length; i++) {
    let str = fs.readFileSync(process.argv[i], "utf8");
    let obj = matter(str);
    let post = {
      id: ++id,
      content: obj.content,
      matter: obj.data
    };
    await posts.push(post);
    //console.log("Converting to JSON");
    callback();
  }
}

function pushToDB(callback) {
  const db = new JsonDB("db", true, true);
  //console.log("Storing to DB");
  db.push("/posts", posts);
  callback();
}

series(
  [
    done => {
      checkDBExists(done);
    },
    done => {
      scrapePosts(done);
    },
    done => {
      pushToDB(done);
    }
  ],
  err => {
    if (err) {
      console.log("dun fuked up");
    }
    cmd.run("node test-server.js");
  }
);
