import React, { useState } from "react";
import {
	EuiButtonIcon,
	EuiPopover,
	EuiFlexItem,
	EuiFlexGroup,
	EuiText,
	EuiBadge,
} from "@elastic/eui";

import { LoadingIconSVG } from "../loadingIcon";

const PanelHasError = ({ animate, start, end, useButton = true }) => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const onButtonClick = () =>
		setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
	const closePopover = () => setIsPopoverOpen(false);

	const PopoverButton = (
		<EuiButtonIcon
			iconType={LoadingIconSVG}
			color="subdued"
			onClick={onButtonClick}
			aria-label="Progress menu"
			isLoading={true}
		/>
	);
	const PopoverErrorBadge = (
		<EuiBadge
			color="danger"
			onClick={onButtonClick}
			style={{ position: "relative" }}
			iconType="alert"
		>
			Error
		</EuiBadge>
	);

	return (
		<EuiPopover
			ownFocus
			button={useButton ? PopoverButton : PopoverErrorBadge}
			isOpen={isPopoverOpen}
			closePopover={closePopover}
			className={["progressMenuButton", animate ? "animate" : ""]}
		>
			<EuiFlexGroup direction="column" gutterSize="s">
				<EuiFlexItem>
					<EuiText size="xs" color="subdued">
						{start - 1} of {end + 1} shards loaded
					</EuiText>
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPopover>
	);
};

export default PanelHasError;
