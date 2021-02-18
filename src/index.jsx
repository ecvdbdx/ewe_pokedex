import React from "react";
import ReactDOM from "react-dom";

//import App from "./component/App";
import Details from "./component/componentDetails";

import "./index.scss";
import pokemon from "./_data/pokemon.json";
ReactDOM.render(<Details data={pokemon[5]} />, document.getElementById("root"));
