import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDom from "react-dom";
import App from "./App";
import {ProductProvider} from './context'

ReactDom.render(
  <ProductProvider>
  <Router>
    <App />
  </Router>
  </ProductProvider>,
  document.getElementById("root")
);
