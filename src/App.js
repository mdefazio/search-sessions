import React, { useState, useEffect } from "react";
import "./App.scss";

import {
	EuiPage,
	EuiFlexGroup,
	EuiFlexItem,
	EuiPanel,
	EuiButtonIcon,
	EuiText,
	EuiPopover,
	EuiButton,
	EuiProgress,
	EuiLoadingChart,
} from "@elastic/eui";
import ExampleChart from "./chart";

const dashGutters = "s";

const DashPanelActionMenu = ({ mode }) => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const onButtonClick = () =>
		setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
	const closePopover = () => setIsPopoverOpen(false);

	const ActionMenuButton = (
		<EuiButtonIcon
			iconType="boxesHorizontal"
			onClick={onButtonClick}
			aria-label="Action menu"
		/>
	);

	return (
		<EuiPopover
			ownFocus
			button={ActionMenuButton}
			isOpen={isPopoverOpen}
			closePopover={closePopover}
			className="actionMenuButton"
		>
			Action menu here...
		</EuiPopover>
	);
};

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
				<EuiFlexGroup alignItems="center" justifyContent="center">
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
					<DashPanelActionMenu />
				</EuiFlexItem>
			</EuiFlexGroup>
			<EuiFlexGroup>
				<EuiFlexItem>
					{!complete ? null : (
						<EuiPanel color="subdued" borderRadius="none" hasShadow={false}>
							<EuiText color="subdued">
								<ExampleChart />
							</EuiText>
						</EuiPanel>
					)}
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPanel>
	);
};

function App() {
	const [isEditing, setIsEditing] = useState(false);
	const [isReloading, setIsReloading] = useState(true);

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
					onClick={onEditClick}
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
			<EuiFlexGroup direction="column" gutterSize={dashGutters}>
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={dashGutters}>
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
					<EuiFlexGroup gutterSize={dashGutters}>
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
					<EuiFlexGroup gutterSize={dashGutters}>
						<EuiFlexItem>
							<DashPanel timing={50000} />
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
