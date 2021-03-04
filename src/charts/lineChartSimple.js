import React from "react";
import {
	Axis,
	Chart,
	LineSeries,
	niceTimeFormatByDay,
	Position,
	ScaleType,
	timeFormatter,
} from "@elastic/charts";
import "@elastic/charts/dist/theme_only_light.css";

const data0 = [
	[1551438000000, 0],
	[1551438030000, 0],
	[1551438060000, 0],
	[1551438090000, 0],
	[1551438120000, 0],
	[1551438150000, 0],
	[1551438180000, 0],
	[1551438210000, 0],
	[1551438240000, 0],
	[1551438270000, 0],
	[1551438300000, 0],
	[1551438330000, 0],
	[1551438360000, 0],
	[1551438390000, 0],
	[1551438420000, 0],
	[1551438450000, 0],
	[1551438480000, 0],
	[1551438510000, 0],
	[1551438540000, 0],
	[1551438570000, 0],
];

const data1 = [
	[1551438000000, 8.3203125],
	[1551438030000, 7.9140625],
	[1551438060000, 7.8671875],
	[1551438090000, 7.125],
	[1551438120000, 8.765625],
	[1551438150000, 11.546875],
	[1551438180000, 12.984375],
	[1551438210000, 13.546875],
	[1551438240000, 13.390625],
	[1551438270000, 11.5625],
	[1551438300000, 11.5859375],
	[1551438330000, 10.0546875],
	[1551438360000, 9.921875],
	[1551438390000, 9.4921875],
	[1551438420000, 9.78125],
	[1551438450000, 10.046875],
	[1551438480000, 14.0546875],
	[1551438510000, 10.640625],
	[1551438540000, 8.2421875],
	[1551438570000, 8.5],
];

const dateFormatter = timeFormatter(niceTimeFormatByDay(1));

export const LineChartDataSet = [data0, data1];

export const LineChartSimple = ({ data }) => {
	return (
		<Chart size={{ height: 200 }}>
			<Axis
				id="bottom"
				position={Position.Bottom}
				showOverlappingTicks
				tickFormat={dateFormatter}
			/>
			<LineSeries
				id="lineChart"
				xScaleType={ScaleType.Time}
				yScaleType={ScaleType.Linear}
				xAccessor={0}
				yAccessors={[1]}
				data={data}
			/>
		</Chart>
	);
};
