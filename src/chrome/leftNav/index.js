import React, { useState } from "react";
import find from "lodash/find";
import findIndex from "lodash/findIndex";

import {
	EuiIcon,
	EuiFlexItem,
	EuiHorizontalRule,
	EuiShowFor,
	EuiCollapsibleNav,
	EuiCollapsibleNavGroup,
	EuiHeaderSectionItemButton,
	EuiPinnableListGroup,
	EuiListGroupItem,
} from "@elastic/eui";

import {
	SecurityLinks,
	KibanaLinks,
	ObservabilityLinks,
	EnterpriseSearchLinks,
	ManagementLinks,
} from "./leftNavMenuGroups";

const TopLinks = [
	{
		label: "Home",
		iconType: "home",
		isActive: true,
		"aria-current": true,
		href: "#/navigation/collapsible-nav",
		pinnable: false,
	},
];

export const ElasticLeftNav = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const [navIsDocked, setNavIsDocked] = useState(false);

	/**
	 * Accordion toggling
	 */
	const [openGroups, setOpenGroups] = useState(["Kibana", "Learn"]);

	// Save which groups are open and which are not with state and local store
	const toggleAccordion = (isOpen, title) => {
		if (!title) return;
		const itExists = openGroups.includes(title);
		if (isOpen) {
			if (itExists) return;
			openGroups.push(title);
		} else {
			const index = openGroups.indexOf(title);
			if (index > -1) {
				openGroups.splice(index, 1);
			}
		}
		setOpenGroups([...openGroups]);
		localStorage.setItem("openNavGroups", JSON.stringify(openGroups));
	};

	/**
	 * Pinning
	 */
	const [pinnedItems, setPinnedItems] = useState([]);

	const addPin = (item) => {
		if (!item || find(pinnedItems, { label: item.label })) {
			return;
		}
		item.pinned = true;
		const newPinnedItems = pinnedItems ? pinnedItems.concat(item) : [item];
		setPinnedItems(newPinnedItems);
		localStorage.setItem("pinnedItems", JSON.stringify(newPinnedItems));
	};

	const removePin = (item) => {
		const pinIndex = findIndex(pinnedItems, { label: item.label });
		if (pinIndex > -1) {
			item.pinned = false;
			const newPinnedItems = pinnedItems;
			newPinnedItems.splice(pinIndex, 1);
			setPinnedItems([...newPinnedItems]);
			localStorage.setItem("pinnedItems", JSON.stringify(newPinnedItems));
		}
	};

	function alterLinksWithCurrentState(links, showPinned = false) {
		return links.map((link) => {
			const { pinned, ...rest } = link;
			return {
				pinned: showPinned ? pinned : false,
				...rest,
			};
		});
	}

	function addLinkNameToPinTitle(listItem) {
		return `Pin ${listItem.label} to top`;
	}

	function addLinkNameToUnpinTitle(listItem) {
		return `Unpin ${listItem.label}`;
	}

	return (
		<EuiCollapsibleNav
			id="guideCollapsibleNavAllExampleNav"
			aria-label="Main navigation"
			isOpen={navIsOpen}
			isDocked={navIsDocked}
			button={
				<EuiHeaderSectionItemButton
					aria-label="Toggle main navigation"
					onClick={() => setNavIsOpen(!navIsOpen)}
				>
					<EuiIcon type={"menu"} size="m" aria-hidden="true" />
				</EuiHeaderSectionItemButton>
			}
			onClose={() => setNavIsOpen(false)}
		>
			{/* DEPLOYMENTS -- Removed for now */}

			{/* HOME + PINNED ITEMS */}
			<EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
				<EuiCollapsibleNavGroup
					background="light"
					className="eui-yScroll"
					style={{ maxHeight: "40vh" }}
				>
					<EuiPinnableListGroup
						aria-label="Pinned links" // A11y : Since this group doesn't have a visible `title` it should be provided an accessible description
						listItems={alterLinksWithCurrentState(TopLinks).concat(
							alterLinksWithCurrentState(pinnedItems, true)
						)}
						unpinTitle={addLinkNameToUnpinTitle}
						onPinClick={removePin}
						maxWidth="none"
						color="text"
						gutterSize="none"
						size="s"
					/>
				</EuiCollapsibleNavGroup>
			</EuiFlexItem>

			<EuiHorizontalRule margin="none" />

			{/* MAIN SECTIONS */}
			<EuiFlexItem className="eui-yScroll">
				<EuiCollapsibleNavGroup
					title="Analytics"
					iconType="logoKibana"
					isCollapsible={true}
					initialIsOpen={openGroups.includes("Kibana")}
					onToggle={(isOpen) => toggleAccordion(isOpen, "Kibana")}
				>
					<EuiPinnableListGroup
						aria-label="Kibana" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
						listItems={alterLinksWithCurrentState(KibanaLinks)}
						pinTitle={addLinkNameToPinTitle}
						onPinClick={addPin}
						maxWidth="none"
						color="subdued"
						gutterSize="none"
						size="s"
					/>
				</EuiCollapsibleNavGroup>

				{/* EnterpriseSearch */}
				<EuiCollapsibleNavGroup
					title="EnterpriseSearch"
					iconType="logoEnterpriseSearch"
					isCollapsible={true}
					initialIsOpen={openGroups.includes("EnterpriseSearch")}
					onToggle={(isOpen) => toggleAccordion(isOpen, "EnterpriseSearch")}
				>
					<EuiPinnableListGroup
						aria-label="EnterpriseSearch" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
						listItems={alterLinksWithCurrentState(EnterpriseSearchLinks)}
						pinTitle={addLinkNameToPinTitle}
						onPinClick={addPin}
						maxWidth="none"
						color="subdued"
						gutterSize="none"
						size="s"
					/>
				</EuiCollapsibleNavGroup>

				{/* Observability */}
				<EuiCollapsibleNavGroup
					title="Observability"
					iconType="logoObservability"
					isCollapsible={true}
					initialIsOpen={openGroups.includes("Observability")}
					onToggle={(isOpen) => toggleAccordion(isOpen, "Observability")}
				>
					<EuiPinnableListGroup
						aria-label="Observability" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
						listItems={alterLinksWithCurrentState(ObservabilityLinks)}
						pinTitle={addLinkNameToPinTitle}
						onPinClick={addPin}
						maxWidth="none"
						color="subdued"
						gutterSize="none"
						size="s"
					/>
				</EuiCollapsibleNavGroup>

				{/* Security */}
				<EuiCollapsibleNavGroup
					title="Security"
					iconType="logoSecurity"
					isCollapsible={true}
					initialIsOpen={openGroups.includes("Security")}
					onToggle={(isOpen) => toggleAccordion(isOpen, "Security")}
				>
					<EuiPinnableListGroup
						aria-label="Security" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
						listItems={alterLinksWithCurrentState(SecurityLinks)}
						pinTitle={addLinkNameToPinTitle}
						onPinClick={addPin}
						maxWidth="none"
						color="subdued"
						gutterSize="none"
						size="s"
					/>
				</EuiCollapsibleNavGroup>

				{/* Managemenmt section */}
				<EuiCollapsibleNavGroup
					title="Management"
					iconType="managementApp"
					isCollapsible={true}
					initialIsOpen={openGroups.includes("Management")}
					onToggle={(isOpen) => toggleAccordion(isOpen, "Management")}
				>
					<EuiPinnableListGroup
						aria-label="Management" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
						listItems={alterLinksWithCurrentState(ManagementLinks)}
						pinTitle={addLinkNameToPinTitle}
						onPinClick={addPin}
						maxWidth="none"
						color="subdued"
						gutterSize="none"
						size="s"
					/>
				</EuiCollapsibleNavGroup>

				{/* Docking button only for larger screens that can support it*/}
				<EuiShowFor sizes={["l", "xl"]}>
					<EuiCollapsibleNavGroup>
						<EuiListGroupItem
							size="xs"
							color="subdued"
							label={`${navIsDocked ? "Undock" : "Dock"} navigation`}
							onClick={() => {
								setNavIsDocked(!navIsDocked);
								localStorage.setItem(
									"navIsDocked",
									JSON.stringify(!navIsDocked)
								);
							}}
							iconType={navIsDocked ? "lock" : "lockOpen"}
						/>
					</EuiCollapsibleNavGroup>
				</EuiShowFor>
			</EuiFlexItem>
		</EuiCollapsibleNav>
	);
};
