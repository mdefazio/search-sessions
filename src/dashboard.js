import React, { useState } from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLoadingChart } from "@elastic/eui";

import DashboardPanel from "./panel/dashboardPanel";
import { BarChartSimple, BarChartDataSet } from "./charts/barChartSimple";
import { LineChartSimple, LineChartDataSet } from "./charts/lineChartSimple";

const DASHGUTTERS = "s";
const TIMINGS = [500, 1000, 2000, 4000, 6000, 9000, 12000];

const getTiming = () => {
	let timing = TIMINGS[Math.floor(Math.random() * TIMINGS.length)];

	return timing;
};

const Dashboard = ({ isEditing, isLoaded }) => {
	return (
		<EuiFlexGroup
			direction="column"
			gutterSize={DASHGUTTERS}
			className={isEditing ? "editMode" : "viewMode"}
		>
			<EuiFlexItem>
				<EuiFlexGroup gutterSize={DASHGUTTERS}>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={BarChartSimple}
							dataSet={BarChartDataSet}
						/>
					</EuiFlexItem>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={BarChartSimple}
							dataSet={BarChartDataSet}
						/>
					</EuiFlexItem>
					<EuiFlexItem>
						<DashboardPanel
							timing={getTiming()}
							Chart={BarChartSimple}
							dataSet={BarChartDataSet}
						/>
					</EuiFlexItem>
				</EuiFlexGroup>
			</EuiFlexItem>
		</EuiFlexGroup>
	);
};

export default Dashboard;
