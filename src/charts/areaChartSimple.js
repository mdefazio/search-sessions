import React from "react";
import { Axis, AreaSeries, Chart, Settings, ScaleType } from "@elastic/charts";
import "@elastic/charts/dist/theme_only_light.css";

const data0 = [
	[1551439110000, 4.26171875],
	[1551439140000, 11.1171875],
	[1551439170000, 10.8515625],
	[1551439200000, 12.6171875],
	[1551439230000, 11.1171875],
	[1551439260000, 11.6640625],
	[1551439290000, 11.109375],
	[1551439320000, 10.6015625],
	[1551439350000, 11.21875],
];

const data1 = [
	[1551439590000, 9.9609375],
	[1551439620000, 10.8515625],
	[1551439650000, 12.1171875],
	[1551439680000, 19.375],
	[1551439710000, 20.609375],
	[1551439740000, 16.484375],
	[1551439770000, 15.515625],
	[1551439800000, 14.9140625],
	[1551439830000, 10.8828125],
	[1551439860000, 9.7578125],
	[1551439890000, 8.625],
	[1551439920000, 9.21875],
	[1551439950000, 8.5390625],
	[1551439980000, 8.40625],
	[1551440010000, 6.671875],
	[1551439380000, 13.53125],
	[1551439410000, 15.4609375],
	[1551439440000, 15.1796875],
	[1551439470000, 11.984375],
	[1551439500000, 24.8125],
	[1551439530000, 21.46875],
	[1551439560000, 14.484375],
];
const data2 = [
	[1551440040000, 7.24609375],
	[1551440070000, 7.1015625],
	[1551440100000, 7.09375],
	[1551440130000, 10.8125],
	[1551440160000, 10.90625],
	[1551440190000, 12.453125],
	[1551440220000, 11.8984375],
	[1551440250000, 10.875],
	[1551440280000, 12.4140625],
	[1551440310000, 12.78125],
	[1551440340000, 34.28125],
	[1551440370000, 29.84375],
	[1551440400000, 22.40625],
	[1551440430000, 16.046875],
	[1551440460000, 12.6328125],
	[1551440490000, 8.8125],
	[1551440520000, 6.93359375],
	[1551440550000, 6.12890625],
	[1551440580000, 5.69921875],
];

const data3 = [
	[1551440610000, 5.48828125],
	[1551440640000, 12.0234375],
	[1551440670000, 14.484375],
	[1551440700000, 12.890625],
	[1551440730000, 11.578125],
	[1551440760000, 10.7578125],
	[1551440790000, 9.921875],
	[1551440820000, 10.5078125],
	[1551440850000, 11.375],
	[1551440880000, 15.890625],
	[1551440910000, 14.1953125],
	[1551440940000, 11.625],
	[1551440970000, 11.734375],
	[1551441000000, 10.1640625],
	[1551441030000, 9.296875],
	[1551441060000, 7.5546875],
	[1551441090000, 7.17578125],
	[1551441120000, 5.8671875],
	[1551441150000, 6.828125],
	[1551441180000, 10.578125],
	[1551441210000, 16.140625],
	[1551441240000, 15.640625],
	[1551441270000, 13.1484375],
	[1551441300000, 11.9140625],
	[1551441330000, 10.0625],
	[1551441360000, 7.66015625],
	[1551441390000, 9.0078125],
	[1551441420000, 8.78125],
	[1551441450000, 8.0390625],
	[1551441480000, 25.515625],
	[1551441510000, 18.640625],
	[1551441540000, 13.1953125],
];

export const AreaChartDataSet = [data0, data1, data2, data3];

export const AreaChartSimple = ({ data, showLegend = false }) => {
	return (
		<div>
			<Chart size={{ height: 400 }}>
				<Settings showLegend={showLegend ? true : false} />
				<AreaSeries
					id="area"
					name="Area chart"
					xScaleType={ScaleType.Time}
					yScaleType={ScaleType.Linear}
					xAccessor={0}
					yAccessors={[1]}
					data={data}
				/>
				<Axis id="bottom-axis" position="bottom" title="x axis" />
				<Axis id="left-axis" position="left" showGridLines title="y axis" />
			</Chart>
		</div>
	);
};