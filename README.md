<br />
<p align="center">
  <h3 align="center">NX Demo Repo</h3>

  <p align="center">
    Example using NX, GraphQL and Prisma to connect to a MongoDB database
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project

An example repo created to demonstrate NX with some cool tools to make life easy:

- A simple component library using Storybook
- A MongoDB database managed via Prisma
- A client project that uses the component library and Apollo Client to display data
- An Apollo Server service that connects to the database and responds to GraphQL requests
- Full type generation for queries and mutations using GraphQL Code Generator


### Built With

* [NX](https://nx.dev/getting-started/intro)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [GraphQL Code Generator](https://graphql-code-generator.com/)
* [Prisma](https://www.prisma.io/)
* [Prima-typegraphql](https://prisma.typegraphql.com/)


## Getting Started


1. Clone the repo

2. Install root dependencies (via Yarn or NPM)
   ```sh
   npm install
   ```

3. Create a root `.env` file that includes a `DATABASE_URL` string - this will be the MongoDB URL and should include the username and password permissions for a user. It should look something like this:

    ```sh
    DATABASE_URL="mongodb+srv://<USERNAME>:<PASSWORD>@<URL>.mongodb.net/<COLLECTION_NAME>"
    ```

4. Generate the CRUD resolvers for the GraphQL server
   ```sh
   npm run prisma:generate
   ```


<!-- USAGE EXAMPLES -->
## Usage

To start individual apps, use the `nx serve` command:
   ```sh
   npx nx serve mongo-graphql
   npx nx serve frontend
   ```

You can also start both apps and run them in parallel like this:
   ```sh
   npx nx run-many --target=serve --projects=frontend,mongo-graphql --parallel=2
   ```

Similar commands can be used to run other tools, such as jest or storybook:
   ```sh
   npx nx storybook design-system
   npx nx test frontend
   ```

To view the dependancy graph:
   ```sh
   npx nx graph
   npx nx affected:graph #if you want to see the affected apps/libs highlighted
   ```

`affected` can also be used to run commands on all affected projects:
   ```sh
   npx nx affected:test
   ```

If any changes are made to the queries (`.gql` files), re-generate the types by using:
    ```sh
    npm run codegen
    ```