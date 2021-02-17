import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthProvider from "./context/auth";
import { ApolloProvider } from "@apollo/client";
import client from "./adapters/apolloClient";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
