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
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={DASHGUTTERS}>
						<EuiFlexItem grow={1}>
							<DashPanel
								panelTitle="Panel 1 sec"
								timing={1000}
								Chart={BarChartSimple}
								dataSet={BarChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem grow={2}>
							<DashPanel
								panelTitle="Panel 3 sec"
								timing={3000}
								Chart={LineChartSimple}
								dataSet={LineChartDataSet}
							/>
						</EuiFlexItem>
						<EuiFlexItem grow={2}>
							<DashPanel
								panelTitle="Panel 2 sec"
								timing={2000}
								Chart={BarChartSimple}
								dataSet={BarChartDataSet}
							/>
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
				{/* <EuiFlexItem>
					<EuiFlexGroup gutterSize={DASHGUTTERS}>
						<EuiFlexItem grow={2}>
							<DashPanel panelTitle="Panel 4 sec" timing={4000} />
						</EuiFlexItem>
						<EuiFlexItem grow={1}>
							<DashPanel panelTitle="Panel 6 sec" timing={6000} />
						</EuiFlexItem>
						<EuiFlexItem grow={1}>
							<DashPanel panelTitle="Panel 5 sec" timing={5000} />
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem> */}
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
