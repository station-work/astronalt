import { ApolloProvider } from "@apollo/client";
import { createGlobalStyle } from "styled-components";

import { useApollo } from "../config/appoloClient";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  
  return (
    <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;