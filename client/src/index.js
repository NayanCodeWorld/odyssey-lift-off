import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
