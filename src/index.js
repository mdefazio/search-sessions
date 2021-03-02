import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import * as theme from "@elastic/eui/dist/eui_theme_amsterdam_light.json";
import { ElasticHeader } from "./chrome/elasticHeader";
import ExampleChart from "./chart";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ElasticHeader theme={theme} />

			<ExampleChart />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
