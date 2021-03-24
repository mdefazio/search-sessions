import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import MaximizePanel from "./maximize-panel";
import * as theme from "@elastic/eui/dist/eui_theme_amsterdam_light.json";
import { ElasticHeader } from "./chrome/elasticHeader";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ElasticHeader theme={theme} />
			<Switch>
				<Route path="/maximize-panel">
					<MaximizePanel />
				</Route>
				<Route path="/">
					<App />
				</Route>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
