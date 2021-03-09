import React, { useState } from "react";
import "./App.scss";

import {
	EuiPage,
	EuiFlexGroup,
	EuiFlexItem,
	EuiButton,
	EuiLoadingChart,
} from "@elastic/eui";

import Dashboard from "./dashboard";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);

	const onEditClick = () => setIsEditMode((isEditMode) => !isEditMode);
	const onReloadClick = () => setIsLoaded((isLoaded) => !isLoaded);

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
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onReloadClick} size="s">
					Page Reload
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onReloadClick} size="s">
					New Query
				</EuiButton>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<EuiButton onClick={onReloadClick} color="secondary" size="s">
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

	return (
		<EuiPage>
			<EuiFlexGroup direction="column" gutterSize="l">
				<EuiFlexItem>
					<Controls />
				</EuiFlexItem>
				<EuiFlexItem>
					<LoadingScreen />
					{isLoaded && <Dashboard isEditing={isEditMode} />}
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPage>
	);
}

export default App;
