export const extraContents = `## 🚀 Setup Ponder Extension

### Config

Ponder config (\`\`\`packages/ponder/ponder.config.ts\`\`\`) is set automatically from the deployed contracts and using the first blockchain network setup at \`\`\`packages/nextjs/scaffold.config.ts\`\`\`.

### Design your schema

You can define your Ponder data schema on the file at \`\`\`packages/ponder/ponder.schema.ts\`\`\` following the Ponder documentation (https://ponder.sh/docs/schema).

### Indexing data

You can index events by adding files to \`\`\`packages/ponder/src/\`\`\` (https://ponder.sh/docs/indexing/create-update-records)

### Start the development server

Run \`\`\`yarn ponder:dev\`\`\` to start the Ponder development server, for indexing and serving the GraphQL API endpoint at http://localhost:42069

### Query the GraphQL API

With the dev server running, open http://localhost:42069 in your browser to use the GraphiQL interface. GraphiQL is a useful tool for exploring your schema and testing queries during development. (https://ponder.sh/docs/query/graphql)

You can query data on a page using \`\`\`urql\`\`\`. Check the code at \`\`\`packages/nextjs/app/greetings/page.ts\`\`\`to get the greetings updates data and show it.

### Deploy

To deploy the Ponder indexer please refer to the Ponder Deploy documentation https://ponder.sh/docs/production/deploy`;
