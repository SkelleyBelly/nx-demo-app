import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material"

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: '/api',
  headers: {
    Authorization: "6372491b7a442cfe25afa336"
  },
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
    <BrowserRouter>
      <ThemeProvider theme={createTheme()}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
