import React, { Component } from "react";
import { render } from "react-dom";
import App from "./routes/home";
import Item from "./routes/itemDetail";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/item/:id" component={Item} />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById("root"));
