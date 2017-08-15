if [ -f ./db.json ]; then
    echo "Deleting existing database"
    rm db.json
    echo "Existing database deleted"
fi

echo "migrating all markdown files to json"
node index.js *.md 

echo "serving using json-server"
npm run serve 


