import React from "react";
import { Axis, BarSeries, Chart, Settings, ScaleType } from "@elastic/charts";
import "@elastic/charts/dist/theme_only_light.css";

const ExampleChart = ({ data }) => {
	return (
		<div>
			<Chart size={{ height: 200 }}>
				<Settings showLegend={false} />
				<BarSeries
					id="bars"
					name="Simple bar series"
					xScaleType={ScaleType.Ordinal}
					data={data}
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
