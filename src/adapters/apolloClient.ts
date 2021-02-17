import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import constants from "../config/constants";
import { getAuthCookie } from "../utils/cookie";

const link = createHttpLink({
  uri: constants.GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = getAuthCookie();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

export default client;
