import * as React from "react";

import { Chart, Axis, BarSeries, Position, ScaleType } from "@elastic/charts";

export default function App() {
	return (
		<div className="App">
			<Chart size={[500, 200]}>
				<Axis id="count" title="count" position={Position.Left} />
				<Axis id="x" title="goods" position={Position.Bottom} />
				<BarSeries
					id="bars"
					name="amount"
					xScaleType={ScaleType.Ordinal}
					xAccessor="x"
					yAccessors={["y"]}
					data={[
						{ x: "trousers", y: 90, val: 202 },
						{ x: "watches", y: 23, val: 1222 },
						{ x: "bags", y: 750, val: 1222 },
						{ x: "cocktail dresses", y: 854, val: 1222 },
					]}
				/>
			</Chart>
		</div>
	);
}
