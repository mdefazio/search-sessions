import React, { useState } from "react";
import "./App.scss";

import {
	EuiPage,
	EuiFlexGroup,
	EuiFlexItem,
	EuiButton,
	EuiLoadingChart,
	EuiButtonGroup,
} from "@elastic/eui";

import Dashboard from "./dashboard";

const panelOptionButtons = [
	{
		id: 0,
		label: "Progress",
	},
	{
		id: 1,
		label: "Progress + Icon",
	},
	{
		id: 2,
		label: "Icon only",
	},
	{
		id: 3,
		label: "Badge",
	},
];

const App = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);
	const [dataRefresh, setDataRefresh] = useState(true);
	const [isThemed, setIsThemed] = useState(false);
	const [panelOptionID, setPanelOptionID] = useState(0);

	const onEditClick = () => setIsEditMode((isEditMode) => !isEditMode);
	const onReloadClick = () => setIsLoaded((isLoaded) => !isLoaded);
	const onThemeClick = () => setIsThemed((isThemed) => !isThemed);

	const onDataRefreshClick = () => {
		setDataRefresh((dataRefresh) => !dataRefresh);
		setTimeout(() => setDataRefresh(true), 0);
	};

	const onPanelButtonChange = (optionId) => {
		setPanelOptionID(optionId);
	};

	const LoadingScreen = () => {
		if (!isLoaded) {
			setTimeout(() => setIsLoaded(true), 1500);
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
		} else {
			return null;
		}
	};

	const Controls = () => (
		<EuiFlexGroup justifyContent="flexEnd">
			<EuiFlexItem>
				<EuiButtonGroup
					options={panelOptionButtons}
					onChange={onPanelButtonChange}
					idSelected={panelOptionID}
				/>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onThemeClick} color="text" size="s">
					Theme Dashboard
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onReloadClick} color="danger" size="s">
					Page Reload
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onReloadClick} color="warning" size="s">
					New Query
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onDataRefreshClick} color="secondary" size="s">
					Data refresh
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton
					onClick={onEditClick}
					fill={isEditMode}
					size="s"
					color="primary"
				>
					{isEditMode ? "Preview" : "Edit Dashboard"}
				</EuiButton>
			</EuiFlexItem>
		</EuiFlexGroup>
	);

	return (
		<EuiPage>
			<EuiFlexGroup direction="column" gutterSize="l">
				<EuiFlexItem>
					<Controls />
				</EuiFlexItem>
				<EuiFlexItem>
					<LoadingScreen />
					{isLoaded && dataRefresh && (
						<Dashboard
							isEditing={isEditMode}
							isThemed={isThemed}
							panelType={panelOptionID}
						/>
					)}
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPage>
	);
};

export default App;
