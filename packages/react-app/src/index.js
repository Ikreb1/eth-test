import "./index.css";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

require('dotenv').config()

const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT_URI,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
