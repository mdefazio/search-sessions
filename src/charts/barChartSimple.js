import React from "react";
import { Axis, BarSeries, Chart, Settings, ScaleType } from "@elastic/charts";
import "@elastic/charts/dist/theme_only_light.css";

const data0 = [
	{ x: "trousers", y: 33, val: 1222 },
	{ x: "watches", y: 16, val: 1222 },
	{ x: "bags", y: 88, val: 1222 },
	{ x: "cocktail dresses", y: 268, val: 1222 },
];

const data1 = [
	{ x: "trousers", y: 190, val: 1222 },
	{ x: "watches", y: 4, val: 1222 },
	{ x: "bags", y: 123, val: 1222 },
	{ x: "cocktail dresses", y: 124, val: 1222 },
];

const data2 = [
	{ x: "trousers", y: 390, val: 1222 },
	{ x: "watches", y: 23, val: 1222 },
	{ x: "bags", y: 750, val: 1222 },
	{ x: "cocktail dresses", y: 854, val: 1222 },
];

const data3 = [
	{ x: "trousers", y: 260, val: 1222 },
	{ x: "watches", y: 64, val: 1222 },
	{ x: "bags", y: 827, val: 1222 },
	{ x: "cocktail dresses", y: 702, val: 1222 },
];

export const BarChartDataSet = [data0, data1, data2, data3];

export const BarChartSimple = ({ data, showLegend = false }) => {
	return (
		<div>
			<Chart size={{ height: 400 }}>
				<Settings showLegend={showLegend ? true : false} />
				<BarSeries
					id="bars"
					name="Simple bar series"
					xScaleType={ScaleType.Ordinal}
					data={data}
					xAccessor="x"
					yAccessors={["y"]}
				/>
				<Axis id="bottom-axis" position="bottom" title="x axis" />
				<Axis id="left-axis" position="left" showGridLines title="y axis" />
			</Chart>
		</div>
	);
};
