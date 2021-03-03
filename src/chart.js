import { Axis, BarSeries, Chart, Settings, ScaleType } from "@elastic/charts";
import { EUI_CHARTS_THEME_LIGHT } from "@elastic/eui/dist/eui_charts_theme";

const euiTheme = EUI_CHARTS_THEME_LIGHT.theme;

const ExampleChart = () => {
	return (
		<div>
			<Chart size={{ height: 200 }}>
				<Settings
					theme={euiTheme}
					showLegend={true}
					legendPosition="right"
					showLegendDisplayValue={true}
				/>
				<BarSeries
					id="bars"
					name="Simple bar series"
					xScaleType={ScaleType.Ordinal}
					data={[
						{ x: "trousers", y: 390, val: 1222 },
						{ x: "watches", y: 23, val: 1222 },
						{ x: "bags", y: 750, val: 1222 },
						{ x: "cocktail dresses", y: 854, val: 1222 },
					]}
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
