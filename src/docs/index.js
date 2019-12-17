import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../lib";

const App = () => (
  <div>
    <h1>Easy Components</h1>
    <h2>Button</h2>
    <p>Here's an example of button.</p>
    <Button text="My Button" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
