import React, { useState } from "react";
import "./App.scss";

import {
	EuiPage,
	EuiFlexGroup,
	EuiFlexItem,
	EuiButton,
	EuiLoadingChart,
} from "@elastic/eui";

import DashPanel from "./panel/dashPanel";

import { BarChartSimple, BarChartDataSet } from "./charts/barChartSimple";
import { LineChartSimple, LineChartDataSet } from "./charts/lineChartSimple";
const DASHGUTTERS = "s";

const timings = [
	800,
	1000,
	1200,
	1500,
	1800,
	2000,
	3000,
	5000,
	7000,
	10000,
	12000,
];

const getTiming = () => {
	let timing = timings[Math.floor(Math.random() * timings.length)];
	console.log(timing);
	return timing;
};

function App() {
	/* States to consider
  // Page reload: Reloads all components
  // Data reload: A new query is made and reloads data within panels and progresses as results come in
  // Auto reload: Data remains in panel, but shows as loading, switches when complete.
  // Edit mode: Panel styling different
  */

	const [isPageReload, setIsPageReload] = useState(true);
	const [isDataRefresh, setIsDataRefresh] = useState(true);
	const [isEditMode, setIsEditMode] = useState(false);

	const onEditClick = () => setIsEditMode((isEditMode) => !isEditMode);
	const onReloadClick = () => setIsPageReload((isPageReload) => !isPageReload);

	const Controls = () => (
		<EuiFlexGroup justifyContent="flexEnd">
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onReloadClick} size="s">
					Page Reload
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onReloadClick} fill={isEditMode} size="s">
					New Query
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton
					onClick={onReloadClick}
					fill={isEditMode}
					color="secondary"
					size="s"
				>
					Data refresh
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton
					onClick={onEditClick}
					fill={isEditMode}
					size="s"
					color="text"
				>
					{isEditMode ? "Preview" : "Edit Dashboard"}
				</EuiButton>
			</EuiFlexItem>
		</EuiFlexGroup>
	);

	const Dashboard = () => {
		if (isPageReload) {
			setTimeout(() => setIsPageReload(false), 1500);
			return (
				<EuiFlexGroup
					alignItems="center"
					justifyContent="center"
					style={{ height: "80vh" }}
				>
					<EuiFlexItem style={{ textAlign: "center" }}>
						<EuiLoadingChart mono size="xl" />
					</EuiFlexItem>
				</EuiFlexGroup>
			);
		}

		return (
			<EuiFlexGroup direction="column" gutterSize={DASHGUTTERS}>
				{/* Row */}
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={DASHGUTTERS}>
						<EuiFlexItem grow={1}>
							<DashPanel
								panelTitle="Panel title"
								timing={getTiming()}
								Chart={BarChartSimple}
								dataSet={BarChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem grow={2}>
							<DashPanel
								panelTitle="Panel"
								timing={getTiming()}
								Chart={LineChartSimple}
								dataSet={LineChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem grow={2}>
							<DashPanel
								panelTitle="Panel"
								timing={getTiming()}
								Chart={BarChartSimple}
								dataSet={BarChartDataSet}
							/>
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
				{/* End Row */}
				{/* Row */}
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={DASHGUTTERS}>
						<EuiFlexItem grow={2}>
							<DashPanel
								panelTitle="Panel"
								timing={getTiming()}
								Chart={LineChartSimple}
								dataSet={LineChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem grow={1}>
							<DashPanel
								panelTitle="Panel"
								timing={getTiming()}
								Chart={BarChartSimple}
								dataSet={BarChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem>
							<EuiFlexGroup direction="column" gutterSize={DASHGUTTERS}>
								<EuiFlexItem>
									<DashPanel
										panelTitle="Panel"
										timing={getTiming()}
										Chart={BarChartSimple}
										dataSet={BarChartDataSet}
									/>
								</EuiFlexItem>
								<EuiFlexItem grow={1}>
									<DashPanel
										panelTitle="Panel"
										timing={getTiming()}
										Chart={LineChartSimple}
										dataSet={LineChartDataSet}
									/>
								</EuiFlexItem>
							</EuiFlexGroup>
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
				{/* Row */}

				<EuiFlexItem>
					<EuiFlexGroup gutterSize={DASHGUTTERS}>
						<EuiFlexItem grow={2}>
							<DashPanel
								panelTitle="Panel"
								timing={getTiming()}
								Chart={LineChartSimple}
								dataSet={LineChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem grow={1}>
							<DashPanel
								panelTitle="Panel"
								timing={getTiming()}
								Chart={BarChartSimple}
								dataSet={BarChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem>
							<EuiFlexGroup direction="column" gutterSize={DASHGUTTERS}>
								<EuiFlexItem>
									<DashPanel
										panelTitle="Panel"
										timing={getTiming()}
										Chart={BarChartSimple}
										dataSet={BarChartDataSet}
									/>
								</EuiFlexItem>
								<EuiFlexItem>
									<DashPanel
										panelTitle="Panel"
										timing={getTiming()}
										Chart={BarChartSimple}
										dataSet={BarChartDataSet}
									/>
								</EuiFlexItem>
							</EuiFlexGroup>
						</EuiFlexItem>
						<EuiFlexItem grow={1}>
							<DashPanel
								panelTitle="Panel"
								timing={getTiming()}
								Chart={BarChartSimple}
								dataSet={BarChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem grow={1}>
							<DashPanel
								panelTitle="Panel"
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

	return (
		<EuiPage className={isEditMode ? "editMode" : ""}>
			<EuiFlexGroup direction="column" gutterSize="l">
				<EuiFlexItem>
					<Controls />
				</EuiFlexItem>
				<EuiFlexItem>
					<Dashboard />
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPage>
	);
}

export default App;
