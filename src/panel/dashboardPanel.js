import React, { useState, useEffect } from "react";
import {
	EuiPanel,
	EuiFlexGroup,
	EuiFlexItem,
	EuiText,
	EuiLoadingChart,
	EuiProgress,
	EuiBadge,
} from "@elastic/eui";

import PanelActionMenu from "./panelActionMenu";
import PanelInProgress from "./panelInProgress";
import PanelHasError from "./panelHasError";

const DashboardPanel = ({
	panelTitle = "Panel title",
	isThemed,
	timing,
	Chart,
	dataSet,
	hasError,
	hasTimeRange,
	panelType,
	showLegend,
}) => {
	const [currentData, setCurrentData] = useState(0);
	const [dataIsComplete, setIsDataIsComplete] = useState(false);

	useEffect(() => {
		if (currentData < dataSet.length - 1) {
			setTimeout(
				() => setCurrentData((currentData) => currentData + 1),
				timing
			);
		} else {
			setIsDataIsComplete(true);
		}
	}, [currentData]);

	const PanelHeader = () => (
		<EuiFlexGroup
			alignItems="center"
			gutterSize="none"
			justifyContent="spaceBetween"
		>
			<EuiFlexItem grow={false}>
				<EuiFlexGroup gutterSize="xs" style={{ height: "32px" }}>
					{/* Panel title */}
					{!isThemed && (
						<EuiFlexItem>
							<EuiText
								size="s"
								grow={false}
								className={[
									"panelTitle",
									dataIsComplete ? "complete" : "loading",
								]}
							>
								<h4>{panelTitle}</h4>
							</EuiText>
						</EuiFlexItem>
					)}
					{hasTimeRange && (
						<EuiFlexItem>
							<EuiBadge iconType="calendar">Last 2 weeks</EuiBadge>
						</EuiFlexItem>
					)}

					{/* Show session loading icon */}
					{!dataIsComplete && (
						<EuiFlexItem grow={false}>
							{panelType === 0 && (
								<EuiProgress size="xs" color="#98A2B3" position="absolute" />
							)}

							{panelType === 1 && (
								<PanelInProgress start={currentData} end={dataSet.length - 1} />
							)}

							{panelType === 1 && (
								<EuiProgress size="xs" color="#98A2B3" position="absolute" />
							)}

							{panelType === 2 && (
								<PanelInProgress
									start={currentData}
									end={dataSet.length - 1}
									animate
								/>
							)}

							{panelType === 3 && (
								<PanelInProgress
									start={currentData}
									end={dataSet.length - 1}
									animate={false}
									useButton={false}
								/>
							)}
						</EuiFlexItem>
					)}

					{/* Show error icon */}
					{dataIsComplete && hasError && (
						<PanelHasError
							start={currentData}
							end={dataSet.length - 1}
							animate={false}
							useButton={false}
						/>
					)}
				</EuiFlexGroup>
			</EuiFlexItem>
			{/* Panel Action Menu */}
			<EuiFlexItem grow={false}>
				<PanelActionMenu />
			</EuiFlexItem>
		</EuiFlexGroup>
	);

	const Visualization = ({ showLegend }) => {
		if (currentData < 0) {
			return (
				<EuiPanel
					hasShadow={false}
					hasBorder={false}
					color="plain"
					borderRadius="none"
					style={{ textAlign: "center" }}
					grow
				>
					<EuiFlexGroup
						style={{ height: "100%" }}
						justifyContent="center"
						alignItems="center"
						direction="column"
						gutterSize="none"
					>
						<EuiFlexItem grow={false}>
							<EuiLoadingChart mono size="m" />
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiPanel>
			);
		} else {
			return <Chart data={dataSet[currentData]} showLegend={showLegend} />;
		}
	};

	return (
		<EuiPanel
			className="dashboardPanel"
			paddingSize="s"
			hasShadow={isThemed ? false : true}
			hasBorder={isThemed ? true : false}
			borderRadius={isThemed ? "none" : "m"}
			style={{ position: "relative", overflow: "hidden" }}
		>
			<EuiFlexGroup
				direction="column"
				justifyContent="flexStart"
				style={{ height: "100%" }}
				gutterSize="none"
			>
				<EuiFlexItem grow={false}>
					<PanelHeader />
				</EuiFlexItem>
				<EuiFlexItem grow className="chart-fadeIn">
					<Visualization showLegend={showLegend} />
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPanel>
	);
};

export default DashboardPanel;
