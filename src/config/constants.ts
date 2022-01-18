interface ConstantsType {
  SERVER_ENDPOINT: string;
  GRAPHQL_ENDPOINT: string;
  GRAPHQL_SUB_ENDPOINT: string;
  API_VERSION: string;
}

const development: ConstantsType = {
  SERVER_ENDPOINT: "http://localhost:8000",
  GRAPHQL_ENDPOINT: "http://localhost:8000/graphql",
  GRAPHQL_SUB_ENDPOINT: "ws://localhost:8000/graphql",
  API_VERSION: "v1",
};

// const production: ConstantsType = {
//   SERVER_ENDPOINT: "https://cognito-prod.herokuapp.com",
//   GRAPHQL_ENDPOINT: "https://cognito-prod.herokuapp.com/graphql",
//   GRAPHQL_SUB_ENDPOINT: "wss://cognito-prod.herokuapp.com/graphql",
//   API_VERSION: "v1",
// };

// const constants: ConstantsType =
//   process.env.NODE_ENV === "development" ? development : production;

const constants: ConstantsType = development;

export default constants;
