import React, { useState } from "react";
import {
	EuiButtonIcon,
	EuiPopover,
	EuiFlexItem,
	EuiFlexGroup,
	EuiProgress,
	EuiText,
	EuiLoadingSpinner,
	EuiBadge,
} from "@elastic/eui";

import { LoadingIconSVG } from "../loadingIcon";

const PanelInProgress = ({ animate, start, end, useButton = true }) => {
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
	const PopoverBadge = <EuiBadge onClick={onButtonClick}>Loading</EuiBadge>;

	return (
		<EuiPopover
			ownFocus
			button={useButton ? PopoverButton : PopoverBadge}
			isOpen={isPopoverOpen}
			closePopover={closePopover}
			className={["progressMenuButton", animate ? "animate" : ""]}
		>
			<EuiFlexGroup direction="column" gutterSize="s">
				<EuiFlexItem>
					<EuiProgress size="xs" />
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiText size="xs" color="subdued">
						{start + 1} of {end + 1} shards loaded
					</EuiText>
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPopover>
	);
};

export default PanelInProgress;
