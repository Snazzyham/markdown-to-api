# Markdown To API 

I had a problem with jekyll and wanted to move to a more "front-end agnostic" solution. What this script does is takes all your markdown posts, parses the markdown and front-matter with [gray-matter](https://github.com/jonschlinkert/gray-matter), stores it into a json file with [node-json-db](https://www.npmjs.com/package/node-json-db) and serves it over an API with [json-server](https://github.com/typicode/json-server). 

## Usage Instructions 
_It's a little messy for now, I plan on turning it into a command line utility, but will need a little more time for that. At the moment, it's designed for Jeykll front matter, so it pulls in stuff like `date_published`, I'm going to modify it so that it just pulls all the front-matter_

- Copy all your .md files to this directory
- run `chmod +x migrate.sh` to give the script execution privs 
- `npm run migrate` will migrate your posts and serve them 

Additionally, if you don't want to remigrate your posts into the database, you can just run `npm run serve` to serve them. 

![](./screencap.gif)
