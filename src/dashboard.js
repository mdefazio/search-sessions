import React from "react";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

import DashboardPanel from "./panel/dashboardPanel";
import { BarChartSimple, BarChartDataSet } from "./charts/barChartSimple";
import { LineChartSimple, LineChartDataSet } from "./charts/lineChartSimple";
import { AreaChartSimple, AreaChartDataSet } from "./charts/areaChartSimple";

const DASHGUTTERS = "s";
const TIMINGS = [500, 1000, 2000, 4000, 6000, 9000, 12000];

const getTiming = () => {
	let timing = TIMINGS[Math.floor(Math.random() * TIMINGS.length)];
	return timing;
};

const DashboardRow = ({ isThemed, children }) => (
	<EuiFlexGroup gutterSize={isThemed ? "none" : DASHGUTTERS}>
		{children}
	</EuiFlexGroup>
);

const Dashboard = ({ isEditing, isThemed, panelType }) => {
	return (
		<EuiFlexGroup
			direction="column"
			gutterSize={isThemed ? "none" : DASHGUTTERS}
			className={isEditing ? "editMode" : "viewMode"}
		>
			<EuiFlexItem>
				<DashboardRow isThemed={isThemed}>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={LineChartSimple}
							dataSet={LineChartDataSet}
							isThemed={isThemed}
							panelType={panelType}
							showLegend
						/>
					</EuiFlexItem>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={BarChartSimple}
							dataSet={BarChartDataSet}
							isThemed={isThemed}
							panelType={panelType}
							showLegend
						/>
					</EuiFlexItem>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={AreaChartSimple}
							dataSet={AreaChartDataSet}
							isThemed={isThemed}
							panelTitle="Panel with error"
							hasError
							panelType={panelType}
							showLegend
						/>
					</EuiFlexItem>
				</DashboardRow>
			</EuiFlexItem>
			<EuiFlexItem>
				<DashboardRow isThemed={isThemed}>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={LineChartSimple}
							dataSet={LineChartDataSet}
							isThemed={isThemed}
							panelType={panelType}
						/>
					</EuiFlexItem>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={BarChartSimple}
							dataSet={BarChartDataSet}
							isThemed={isThemed}
							panelType={panelType}
						/>
					</EuiFlexItem>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={AreaChartSimple}
							dataSet={AreaChartDataSet}
							isThemed={isThemed}
							panelType={panelType}
						/>
					</EuiFlexItem>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={BarChartSimple}
							dataSet={BarChartDataSet}
							isThemed={isThemed}
							panelType={panelType}
						/>
					</EuiFlexItem>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={BarChartSimple}
							dataSet={BarChartDataSet}
							isThemed={isThemed}
							panelType={panelType}
						/>
					</EuiFlexItem>
				</DashboardRow>
			</EuiFlexItem>
		</EuiFlexGroup>
	);
};

export default Dashboard;
