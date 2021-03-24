import React, { useState } from "react";
import { EuiButtonIcon, EuiPopover } from "@elastic/eui";
import { Link } from "react-router-dom";

const PanelActionMenu = () => {
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
			<Link to="./maximize-panel">Maximize panel</Link>
		</EuiPopover>
	);
};

export default PanelActionMenu;
