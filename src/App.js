import React, { useState } from "react";
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
} from "@elastic/eui";

const dashGutters = "m";

const DashPanelActionMenu = () => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const onButtonClick = () =>
		setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
	const closePopover = () => setIsPopoverOpen(false);

	const ActionMenuButton = (
		<EuiButtonIcon iconType="boxesHorizontal" onClick={onButtonClick} />
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

const DashPanel = ({ panelTitle, hasShadow }) => (
	<EuiPanel hasShadow={hasShadow} paddingSize="s" className="dashPanel">
		<EuiFlexGroup alignItems="center" style={{ height: "44px" }}>
			<EuiFlexItem grow={true}>
				<EuiText size="xs">
					<h4>{(panelTitle = "Panel")}</h4>
				</EuiText>
			</EuiFlexItem>
			<EuiFlexItem grow={false}>
				<DashPanelActionMenu />
			</EuiFlexItem>
		</EuiFlexGroup>
		<EuiFlexGroup>
			<EuiFlexItem>
				<EuiPanel color="subdued" borderRadius="none" hasShadow={false}>
					<EuiText color="subdued">Content</EuiText>
				</EuiPanel>
			</EuiFlexItem>
		</EuiFlexGroup>
	</EuiPanel>
);

function App() {
	const [isEditing, setIsEditing] = useState(false);

	const onButtonClick = () => setIsEditing((isEditing) => !isEditing);

	return (
		<EuiPage className={isEditing ? "editMode" : ""}>
			<EuiFlexGroup direction="column" gutterSize={dashGutters}>
				<EuiFlexItem>
					<EuiButton onClick={onButtonClick}>Edit</EuiButton>
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={dashGutters}>
						<EuiFlexItem>
							<DashPanel />
						</EuiFlexItem>
						<EuiFlexItem grow={1}>
							<DashPanel />
						</EuiFlexItem>
						<EuiFlexItem grow={2}>
							<DashPanel />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel />
						</EuiFlexItem>
						<EuiFlexItem grow={3}>
							<DashPanel />
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={dashGutters}>
						<EuiFlexItem>
							<DashPanel />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel />
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiFlexGroup gutterSize={dashGutters}>
						<EuiFlexItem>
							<DashPanel />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel />
						</EuiFlexItem>
						<EuiFlexItem>
							<DashPanel />
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPage>
	);
}

export default App;
