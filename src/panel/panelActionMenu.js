import React, { useState } from "react";
import { EuiButtonIcon, EuiPopover } from "@elastic/eui";

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
			Action menu here...
		</EuiPopover>
	);
};

export default PanelActionMenu;
