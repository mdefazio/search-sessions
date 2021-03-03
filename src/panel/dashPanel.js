import React, { useState, useEffect } from "react";
import {
	EuiPanel,
	EuiFlexGroup,
	EuiFlexItem,
	EuiLoadingChart,
	EuiText,
	EuiProgress,
} from "@elastic/eui";

import ExampleChart from "./panelChart";
import PanelActionMenu from "./panelActionMenu";

const data0 = [
	{ x: "trousers", y: 0, val: 1222 },
	{ x: "watches", y: 0, val: 1222 },
	{ x: "bags", y: 0, val: 1222 },
	{ x: "cocktail dresses", y: 0, val: 1222 },
];

const data1 = [
	{ x: "trousers", y: 190, val: 1222 },
	{ x: "watches", y: 4, val: 1222 },
	{ x: "bags", y: 123, val: 1222 },
	{ x: "cocktail dresses", y: 124, val: 1222 },
];

const data2 = [
	{ x: "trousers", y: 390, val: 1222 },
	{ x: "watches", y: 23, val: 1222 },
	{ x: "bags", y: 750, val: 1222 },
	{ x: "cocktail dresses", y: 854, val: 1222 },
];

const data3 = [
	{ x: "trousers", y: 260, val: 1222 },
	{ x: "watches", y: 64, val: 1222 },
	{ x: "bags", y: 827, val: 1222 },
	{ x: "cocktail dresses", y: 702, val: 1222 },
];

const dataSet = [data0, data1, data2, data3];

const DashPanel = ({ panelTitle = "Panel", hasShadow, timing = 2000 }) => {
	const [complete, setComplete] = useState(false);
	const [loading, setLoading] = useState(true);
	const [currentData, setCurrentData] = useState(0);

	useEffect(() => {
		let loading, switchData, complete;
		loading = setTimeout(() => setLoading(false), timing / 2);

		if (!loading) {
			clearTimeout(loading);
		}

		// Switch through dataset every {timing} interval
		if (currentData < dataSet.length - 2) {
			switchData = setTimeout(() => setCurrentData(currentData + 1), timing);
		} else {
			complete = setTimeout(() => setComplete(true), timing);
		}

		return () => {
			clearTimeout(switchData);
			clearTimeout(complete);
		};
	}, [currentData, timing]);

	if (loading) {
		return (
			<EuiPanel
				color="plain"
				borderRadius="none"
				hasShadow={false}
				paddingSize="l"
				className="dashPanel--loading"
			>
				<EuiFlexGroup
					alignItems="center"
					justifyContent="center"
					style={{ height: "100%" }}
				>
					<EuiFlexItem grow style={{ textAlign: "center" }}>
						<EuiLoadingChart size="m" mono />
					</EuiFlexItem>
				</EuiFlexGroup>
			</EuiPanel>
		);
	}

	return (
		<EuiPanel
			hasShadow={hasShadow}
			paddingSize="s"
			className="dashPanel"
			style={{
				position: "relative",
				overflow: "hidden",
				minHeight: "15vh",
			}}
		>
			{complete ? null : (
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
			<EuiFlexGroup alignItems="stretch" style={{ height: "100%" }}>
				<EuiFlexItem>
					{loading ? null : (
						<EuiPanel color="plain" borderRadius="none" hasShadow={false}>
							<EuiText color="subdued">
								<ExampleChart
									timing={timing}
									data={
										complete ? dataSet[currentData + 1] : dataSet[currentData]
									}
								/>
							</EuiText>
						</EuiPanel>
					)}
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPanel>
	);
};

export default DashPanel;
