import React, { useState, useEffect } from "react";
import {
	EuiPanel,
	EuiFlexGroup,
	EuiFlexItem,
	EuiLoadingChart,
	EuiText,
} from "@elastic/eui";

import ExampleChart from "./panelChart";
import PanelActionMenu from "./panelActionMenu";

const DashPanel = ({ panelTitle = "Panel", hasShadow, timing = 2000 }) => {
	const [complete, setComplete] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), timing / 2.5);
		setTimeout(() => {
			setComplete(true);
		}, timing);
	});

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
					{!complete ? null : (
						<EuiPanel color="plain" borderRadius="none" hasShadow={false}>
							<EuiText color="subdued">
								<ExampleChart timing={timing} data1={data1} data2={data2} />
							</EuiText>
						</EuiPanel>
					)}
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPanel>
	);
};

export default DashPanel;
