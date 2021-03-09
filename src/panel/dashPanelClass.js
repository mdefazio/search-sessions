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
import PanelInProgress from "./panelInProgress";

const ChartPH = ({ data }) => (
	<EuiText>
		<p>{data}</p>
	</EuiText>
);

class DashboardPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			isEditing: false,
			dataLoad: 0,
		};
	}

	componentDidMount() {
		this.panelID = setInterval(() => {
			if (this.state.isLoading) {
				this.setState({ isLoading: false });
				this.loadData();
			} else {
				clearInterval(this.panelID);
			}
		}, this.props.timing);
	}

	componentWillUnmount() {
		clearInterval(this.panelID);
	}

	loadData() {
		const interval = setInterval(() => {
			if (this.state.dataLoad < 3) {
				this.setState((state) => ({
					dataLoad: state.dataLoad + 1,
				}));
			} else {
				clearInterval(interval);
			}
		}, this.props.timing);
	}

	render() {
		return (
			<EuiPanel className="dashboardPanel">
				<EuiText className={this.state.isLoading ? "loading" : "complete"}>
					<h4>
						{this.state.isLoading ? "true" : "false"}, {this.props.timing}
					</h4>
				</EuiText>
				{!this.state.isLoading && <ChartPH data={this.state.dataLoad} />}
			</EuiPanel>
		);
	}
}

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
			<EuiFlexGroup alignItems="center" style={{ height: "44px" }}>
				<EuiFlexItem grow={true}>
					<EuiFlexGroup
						gutterSize={"none"}
						alignItems="center"
						justifyContent="flexStart"
					>
						<EuiFlexItem grow={false}>
							<EuiText size="xs" color={panelComplete ? "default" : "subdued"}>
								<h4>
									{panelTitle} ({timing})
								</h4>
							</EuiText>
						</EuiFlexItem>
						{!panelComplete && (
							<EuiFlexItem>
								<PanelInProgress />
							</EuiFlexItem>
						)}
					</EuiFlexGroup>
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

export default DashboardPanel;
