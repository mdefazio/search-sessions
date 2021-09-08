import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";

import {
	EuiPage,
	EuiFlexGroup,
	EuiFlexItem,
	EuiResizableContainer,
	EuiListGroup,
	EuiListGroupItem,
} from "@elastic/eui";

import DashboardPanel from "./panel/dashboardPanel";
import { BarChartSimple, BarChartDataSet } from "./charts/barChartSimple";

const TIMINGS = [500, 1000, 2000, 4000, 6000, 9000, 12000];

const getTiming = () => {
	let timing = TIMINGS[Math.floor(Math.random() * TIMINGS.length)];

	return timing;
};
const items = [
	{
		id: 1,
		label: "First item",
	},
	{
		id: 2,
		label: "Second item",
	},
	{
		id: 3,
		label: "Third item",
	},
	{
		id: 4,
		label: "Forth item",
	},
];

const itemElements = items.map((item, index) => (
	<EuiListGroupItem key={index} label={item.label} size="s" href="./" />
));

function MaximizePanel() {
	return (
		<EuiPage>
			<EuiFlexGroup direction="column" gutterSize="l">
				<EuiFlexItem>
					<Link to="/">Back to Dashboard</Link>
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiResizableContainer>
						{(EuiResizablePanel, EuiResizableButton) => (
							<>
								<EuiResizablePanel mode="main" initialSize={80} minSize="50px">
									<DashboardPanel
										timing={getTiming()}
										Chart={BarChartSimple}
										dataSet={BarChartDataSet}
									/>
								</EuiResizablePanel>
								<EuiResizableButton />
								<EuiResizablePanel
									mode="collapsible"
									initialSize={20}
									minSize="10%"
								>
									<EuiListGroup flush>{itemElements}</EuiListGroup>
								</EuiResizablePanel>
							</>
						)}
					</EuiResizableContainer>
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPage>
	);
}

export default MaximizePanel;
