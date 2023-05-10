require("dotenv").config();

const fs = require("fs");
const path = require("path");
const ProgressBar = require("progress");
const fetch = require("node-fetch");

const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} = require("graphql");

function fetchGraphQLSchema(url, options) {
  options = options || {}; // eslint-disable-line no-param-reassign

  const bar = new ProgressBar("🔦  Introspecting schema [:bar]", 24);

  const id = setInterval(function () {
    bar.tick();
    if (bar.complete) {
      clearInterval(id);
    }
  }, 250);

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      apiKey: process.env.SUPABASE_KEY,
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  })
    .then((res) => res.json())
    .then((schemaJSON) => {
      if (options.readable) {
        return printSchema(buildClientSchema(schemaJSON.data));
      }

      bar.complete();
      return JSON.stringify(schemaJSON, null, 2);
    });
}

const filePath = path.join(__dirname, "../gql/", "schema.graphql");

console.log();

console.log(`🗞   Fetching GraphQL Schema from ${process.env.SUPABASE_URL + "/graphql/v1"} ...`);

fetchGraphQLSchema(process.env.SUPABASE_URL + "/graphql/v1", {
  readable: true,
}).then((schema) => {
  fs.writeFileSync(filePath, schema, "utf-8");
  console.log(`✨  Saved to ${filePath}`);
  console.log(
    '💡  Be sure to run "npm run codegen" to generate latest types.'
  );
});