import { Axis, BarSeries, Chart, Settings, ScaleType } from "@elastic/charts";
import { EUI_CHARTS_THEME_LIGHT } from "@elastic/eui/dist/eui_charts_theme";

const euiTheme = EUI_CHARTS_THEME_LIGHT.theme;

const ExampleChart = () => {
	return (
		<Chart size={{ height: 200 }}>
			<Settings
				theme={euiTheme}
				showLegend={true}
				legendPosition="right"
				showLegendDisplayValue={false}
			/>
			<BarSeries
				id="bars"
				data={[
					{ x: 0, y: 2 },
					{ x: 1, y: 7 },
					{ x: 2, y: 3 },
					{ x: 3, y: 6 },
				]}
				name="Simple bar series"
				xScaleType={ScaleType.Linear}
				yScaleType={ScaleType.Linear}
				xAccessor="x"
				yAccessors={["y"]}
			/>
			<Axis id="bottom-axis" position="bottom" />
			<Axis id="left-axis" position="left" showGridLines />
		</Chart>
	);
};

export default ExampleChart;
