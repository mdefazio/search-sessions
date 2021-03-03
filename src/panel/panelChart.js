import React, { useState } from "react";
import { Axis, BarSeries, Chart, Settings, ScaleType } from "@elastic/charts";
import "@elastic/charts/dist/theme_only_light.css";

const ExampleChart = ({ data1, data2, timing }) => {
	const [useData, setUseData] = useState(data1);
	setTimeout(() => setUseData(data2), 0.9 * timing);
	return (
		<div>
			<Chart size={{ height: 200 }}>
				<Settings showLegend={false} />
				<BarSeries
					id="bars"
					name="Simple bar series"
					xScaleType={ScaleType.Ordinal}
					data={useData}
					xAccessor="x"
					yAccessors={["y"]}
				/>
				<Axis id="bottom-axis" position="bottom" />
				<Axis id="left-axis" position="left" showGridLines />
			</Chart>
		</div>
	);
};

export default ExampleChart;
