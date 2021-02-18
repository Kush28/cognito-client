import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import constants from "../config/constants";
import { getAuthCookie } from "../utils/cookie";
import { getMainDefinition } from "@apollo/client/utilities";

const authLink = setContext((_, { headers }) => {
  const token = getAuthCookie();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = authLink.concat(
  createHttpLink({
    uri: constants.GRAPHQL_ENDPOINT,
  })
);

const wsLink = new WebSocketLink({
  uri: constants.GRAPHQL_SUB_ENDPOINT,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${getAuthCookie()}`,
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

export default client;
