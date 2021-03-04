import React, { useState, useEffect } from "react";
import {
	EuiPanel,
	EuiFlexGroup,
	EuiFlexItem,
	EuiLoadingChart,
	EuiText,
	EuiProgress,
} from "@elastic/eui";

import PanelActionMenu from "./panelActionMenu";

const DashPanel = ({ panelTitle = "Panel", timing, Chart, dataSet }) => {
	// States:
	// Panel loading: loading icon in middle of panel, no chart
	// Data loading: chart with progress bar atop panel
	// Current data: (Partial results) cycle through provided data set to change chart values
	// Panel complete

	const [currentData, setCurrentData] = useState(0);
	const [panelComplete, setPanelComplete] = useState(false);

	const [loading, setLoading] = useState(true);

	// When component is mounted, show as basic loading state (loading chart icon in center of panel)
	// Clear after timing setting as passed

	useEffect(() => {
		setTimeout(() => {
			// Swap out Loading icon with Chart component
			setLoading(false);
			// Start interval of going through dataset
			const interval = setInterval(() => {
				setCurrentData((prev) => {
					const next = prev + 1;
					if (next < dataSet.length) {
						return next;
					} else {
						clearInterval(interval);
						setPanelComplete(true);
						return prev;
					}
				});
			}, timing);
		}, timing);
	}, []);

	const PanelLoadingView = () => <EuiLoadingChart size="m" mono />;

	return (
		<EuiPanel
			hasShadow={loading ? false : true}
			paddingSize="s"
			className={loading ? "dashPanel loading" : "dashPanel"}
			style={{
				position: "relative",
				overflow: "hidden",
				minHeight: "15vh",
			}}
		>
			{!panelComplete && (
				<EuiProgress size="xs" color="text" position="absolute" />
			)}
			<EuiFlexGroup alignItems="center" style={{ height: "44px" }}>
				<EuiFlexItem grow={true}>
					<EuiText size="xs">
						<h4>{panelTitle}</h4>
					</EuiText>
				</EuiFlexItem>
				<EuiFlexItem grow={false}>
					<PanelActionMenu />
				</EuiFlexItem>
			</EuiFlexGroup>
			<EuiFlexGroup alignItems="center" style={{ height: "100%" }}>
				<EuiFlexItem style={{ textAlign: "center" }}>
					{loading ? (
						<PanelLoadingView />
					) : (
						<Chart data={dataSet[currentData]} />
					)}
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPanel>
	);
};

export default DashPanel;
