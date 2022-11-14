
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3333",
  generates: {
    "./libs/shared-graphql-interface/src/lib/graphql.types.ts": {
      plugins: ["typescript"]
    },
    "./src": {
      documents: 'apps/frontend/src/app/queries.gql',
      preset: "near-operation-file",
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@nx-demo-app/shared-graphql-interface',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo']
    },
    "./libs/shared-graphql-interface/src/lib/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
