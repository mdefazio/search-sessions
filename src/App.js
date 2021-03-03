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

const DASHGUTTERS = "s";

function App() {
	/* States to consider
  // Page reload: Reloads all components
  // Data reload: A new query is made and reloads data within panels and progresses as results come in
  // Auto reload: Data remains in panel, but shows as loading, switches when complete.
  // Edit mode: Panel styling different
  */

	const [isReloading, setIsReloading] = useState(true);
	const [isDataLoading, setIsDataLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);

	const onEditClick = () => setIsEditing((isEditing) => !isEditing);
	const onReloadClick = () => setIsReloading((isReloading) => !isReloading);

	const Controls = () => (
		<EuiFlexGroup justifyContent="flexEnd">
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onReloadClick} size="s">
					Reload
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton
					onClick={onReloadClick}
					fill={isEditing}
					color="secondary"
					size="s"
				>
					New Query
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onEditClick} fill={isEditing} size="s" color="text">
					{isEditing ? "Preview" : "Edit Dashboard"}
				</EuiButton>
			</EuiFlexItem>
		</EuiFlexGroup>
	);

	const Dashboard = () => {
		if (isReloading) {
			setTimeout(() => setIsReloading(false), 1500);
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
							<DashPanel panelTitle="panel 1" timing={8000} />
						</EuiFlexItem>
						<EuiFlexItem grow={2}>
							<DashPanel panelTitle="panel 2" timing={6400} />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel panelTitle="panel 3" timing={3000} />
						</EuiFlexItem>
						<EuiFlexItem grow={3}>
							<DashPanel panelTitle="panel 4" timing={1400} />
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={DASHGUTTERS}>
						<EuiFlexItem>
							<DashPanel panelTitle="panel 5" timing={1900} />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel panelTitle="panel 6" timing={6200} />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel panelTitle="panel 7" timing={4300} />
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={DASHGUTTERS}>
						<EuiFlexItem>
							<DashPanel timing={5000} />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel timing={2300} />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel timing={3300} />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel timing={5200} />
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
			</EuiFlexGroup>
		);
	};

	return (
		<EuiPage className={isEditing ? "editMode" : ""}>
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
