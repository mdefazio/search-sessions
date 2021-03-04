import React, { useState } from "react";
import {
	EuiButtonIcon,
	EuiPopover,
	EuiFlexItem,
	EuiFlexGroup,
	EuiProgress,
	EuiText,
	EuiLoadingSpinner,
} from "@elastic/eui";

import { LoadingIconSVG } from "../loadingIcon";

const PanelInProgress = () => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const onButtonClick = () =>
		setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
	const closePopover = () => setIsPopoverOpen(false);

	const PanelProgressButton = (
		<EuiButtonIcon
			iconType={LoadingIconSVG}
			color="subdued"
			onClick={onButtonClick}
			aria-label="Progress menu"
			isLoading={true}
		/>
	);

	return (
		<EuiPopover
			ownFocus
			button={PanelProgressButton}
			isOpen={isPopoverOpen}
			closePopover={closePopover}
			className="progressMenuButton"
		>
			<EuiFlexGroup direction="column" gutterSize="s">
				<EuiFlexItem>
					<EuiProgress size="xs" />
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiText size="xs" color="subdued">
						4 of 9 shards complete
					</EuiText>
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPopover>
	);
};

export default PanelInProgress;
