import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "./index.css";
import App from "./App";
import AuthProvider from "./context/auth";
import { ApolloProvider } from "@apollo/client";
import client from "./adapters/apolloClient";
import MessageProvider from "./context/message";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Cognito</title>
    </Helmet>
    <AuthProvider>
      <MessageProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </MessageProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
