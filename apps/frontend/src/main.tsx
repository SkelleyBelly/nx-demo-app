import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: '/api',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          users: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,

            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          }
        }

      }
    }
  }),
});

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
