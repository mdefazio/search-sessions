import React, { useState } from "react";
import {
	EuiAvatar,
	EuiHeader,
	EuiHeaderLink,
	EuiHeaderLinks,
	EuiHeaderLogo,
	EuiHeaderSectionItemButton,
	EuiIcon,
	EuiPopover,
	EuiShowFor,
	EuiText,
	EuiProgress,
	EuiSelectableTemplateSitewide,
	EuiSelectableMessage,
	EuiButtonIcon,
	EuiHeaderSectionItem,
	EuiFlexGroup,
	EuiFlexItem,
} from "@elastic/eui";

import { ElasticLeftNav } from "./leftNav/index";
import { LoadingIconSVG } from "../loadingIcon";

export const ElasticHeader = ({ theme }) => {
	/**
	 * Header Alerts
	 */
	const [isAlertFlyoutVisible, setIsAlertFlyoutVisible] = useState(false);

	const alertMenu = (
		<EuiHeaderSectionItemButton
			notification={true}
			aria-label="Notifications: Updates available"
			onClick={() => setIsAlertFlyoutVisible(!isAlertFlyoutVisible)}
		>
			<EuiIcon type="cheer" size="m" />
		</EuiHeaderSectionItemButton>
	);
	/**
	 * User Menu
	 */
	const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
	const userMenu = (
		<EuiPopover
			id="guideHeaderUserMenuExample"
			ownFocus
			repositionOnScroll
			button={
				<EuiHeaderSectionItemButton
					aria-controls="guideHeaderUserMenuExample"
					aria-expanded={isUserMenuVisible}
					aria-haspopup="true"
					aria-label="User menu"
					onClick={() => setIsUserMenuVisible(!isUserMenuVisible)}
				>
					<EuiAvatar name="John Username" size="s" />
				</EuiHeaderSectionItemButton>
			}
			isOpen={isUserMenuVisible}
			anchorPosition="downRight"
			closePopover={() => setIsUserMenuVisible(false)}
		>
			<div style={{ width: 320 }}>
				<EuiText size="s" color="subdued">
					<p>
						Please see the component page for on how to configure your user
						menu.
					</p>
				</EuiText>
			</div>
		</EuiPopover>
	);

	/**
	 * Spaces Menu
	 */
	const [isSpacesMenuVisible, setIsSpacesMenuVisible] = useState(false);
	const spacesMenu = (
		<EuiHeaderSectionItem grow={true}>
			<EuiPopover
				id="guideHeaderSpacesMenuExample"
				ownFocus
				repositionOnScroll
				button={
					<EuiHeaderSectionItemButton
						aria-controls="guideHeaderSpacesMenuExample"
						aria-expanded={isSpacesMenuVisible}
						aria-haspopup="true"
						aria-label="Spaces menu"
						onClick={() => setIsSpacesMenuVisible(!isSpacesMenuVisible)}
					>
						<EuiAvatar type="space" name="Default Space" size="s" />
					</EuiHeaderSectionItemButton>
				}
				isOpen={isSpacesMenuVisible}
				anchorPosition="downRight"
				closePopover={() => setIsSpacesMenuVisible(false)}
			>
				<div style={{ width: 320 }}>
					<EuiText size="s" color="subdued">
						<p>
							Please see the component page for on how to configure your spaces
							menu.
						</p>
					</EuiText>
				</div>
			</EuiPopover>
		</EuiHeaderSectionItem>
	);

	/**
	 * Search Session Icon
	 **/

	const [isSessionMenuVisible, setIsSessionMenuVisible] = useState(false);
	const sessionMenu = (
		<EuiPopover
			id="sessionMenu"
			ownFocus
			repositionOnScroll
			className="search-session-menu"
			button={
				<EuiButtonIcon
					color={theme.euiColorDarkestShade}
					iconType={LoadingIconSVG}
					aria-controls="guideHeaderDeploymentMenuExample"
					aria-expanded={isSessionMenuVisible}
					aria-haspopup="true"
					onClickAriaLabel="Current deployment: Production logs. Click to open deployment menu."
					onClick={() => setIsSessionMenuVisible(!isSessionMenuVisible)}
				/>
			}
			isOpen={isSessionMenuVisible}
			anchorPosition="downRight"
			closePopover={() => setIsSessionMenuVisible(false)}
		>
			<EuiFlexGroup direction="column" gutterSize="s">
				<EuiFlexItem>
					<EuiProgress size="xs" color="accent" />
				</EuiFlexItem>
				<EuiFlexItem>
					<EuiText size="s" color="subdued">
						<p>Loading 2 of 4 shards</p>
					</EuiText>
				</EuiFlexItem>
			</EuiFlexGroup>
		</EuiPopover>
	);

	/**
	 * Sitewide search
	 */
	const search = (
		<EuiSelectableTemplateSitewide
			options={[]}
			searchProps={{
				append: "⌘K",
				compressed: true,
			}}
			popoverButton={
				<EuiHeaderSectionItemButton aria-label="Sitewide search">
					<EuiIcon type="search" size="m" />
				</EuiHeaderSectionItemButton>
			}
			popoverButtonBreakpoints={["xs", "s"]}
			popoverProps={{
				repositionOnScroll: true, // Necessary when placing search in a fixed component
			}}
			emptyMessage={
				<EuiSelectableMessage style={{ minHeight: 300 }}>
					<p>
						Please see the component page for on how to configure your sitewide
						search.
					</p>
				</EuiSelectableMessage>
			}
		/>
	);

	return (
		<>
			<EuiHeader
				theme="dark"
				position="fixed"
				sections={[
					{
						items: [
							<EuiHeaderLogo iconType="logoElastic">Elastic</EuiHeaderLogo>,
						],
						borders: "none",
					},
					{
						items: [<EuiShowFor sizes={["m", "l", "xl"]}>{search}</EuiShowFor>],
						borders: "none",
					},
					{
						items: [
							<EuiShowFor sizes={["xs", "s"]}>{search}</EuiShowFor>,
							alertMenu,
							userMenu,
						],
						borders: "none",
					},
				]}
			/>
			<EuiHeader
				position="fixed"
				sections={[
					{
						items: [<ElasticLeftNav />, spacesMenu],
						breadcrumbs: [
							{
								text: "Dashboards",
								onClick: () => {},
							},
							{
								text: "Partial Results Dashboard",
							},
						],
						borders: "right",
					},
					{
						items: [sessionMenu],
					},
					{
						items: [
							<EuiHeaderLinks
								popoverProps={{
									repositionOnScroll: true, // Necessary when placing search in a fixed component
								}}
							>
								<EuiHeaderLink color="primary">Share</EuiHeaderLink>
								<EuiHeaderLink color="primary">Clone</EuiHeaderLink>
							</EuiHeaderLinks>,
						],
					},
				]}
			/>
		</>
	);
};
