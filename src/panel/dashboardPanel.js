import React, { useState, useEffect } from "react";
import {
	EuiPanel,
	EuiFlexGroup,
	EuiFlexItem,
	EuiBadge,
	EuiText,
} from "@elastic/eui";

import PanelActionMenu from "./panelActionMenu";
import PanelInProgress from "./panelInProgress";
import { LoadingIconSVG } from "../loadingIcon";

const ChartPH = ({ data }) => (
	<EuiText>
		<p>{data}</p>
	</EuiText>
);

const DashboardPanel = ({
	panelTitle = "Panel title",
	timing,
	Chart,
	dataSet,
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

	return (
		<EuiPanel className="dashboardPanel" paddingSize="s">
			<EuiFlexGroup justifyContent="spaceBetween">
				<EuiFlexItem grow={false}>
					<EuiFlexGroup
						justifyContent="flexStart"
						gutterSize="xs"
						alignItems="center"
					>
						<EuiFlexItem grow={false}>
							<EuiText
								size="s"
								className={dataIsComplete ? "complete" : "loading"}
							>
								<h4>{panelTitle}</h4>
							</EuiText>
						</EuiFlexItem>

						{!dataIsComplete && (
							<EuiFlexItem>
								<PanelInProgress start={currentData} end={dataSet.length - 1} />
							</EuiFlexItem>
						)}
						{!dataIsComplete && (
							<EuiFlexItem>
								<EuiBadge color="hollow">Loading</EuiBadge>
							</EuiFlexItem>
						)}
					</EuiFlexGroup>
				</EuiFlexItem>

				<EuiFlexItem grow={false}>
					<PanelActionMenu />
				</EuiFlexItem>
			</EuiFlexGroup>
			<Chart data={dataSet[currentData]} />
		</EuiPanel>
	);
};

export default DashboardPanel;
