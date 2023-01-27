import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./styles/fonts.css";
import "./styles/reset.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
