import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiButton } from "@elastic/eui";

export default Controls = () => (
	<EuiFlexGroup justifyContent="flexEnd">
		<EuiFlexItem grow={false}>
			<EuiButton onClick={onReloadClick} size="s">
				Page Reload
			</EuiButton>
		</EuiFlexItem>
		<EuiFlexItem grow={false}>
			<EuiButton onClick={onReloadClick} fill={isEditMode} size="s">
				New Query
			</EuiButton>
		</EuiFlexItem>
		<EuiFlexItem grow={false}>
			<EuiButton
				onClick={onReloadClick}
				fill={isEditMode}
				color="secondary"
				size="s"
			>
				Data refresh
			</EuiButton>
		</EuiFlexItem>
		<EuiFlexItem grow={false}>
			<EuiButton onClick={onEditClick} fill={isEditMode} size="s" color="text">
				{isEditMode ? "Preview" : "Edit Dashboard"}
			</EuiButton>
		</EuiFlexItem>
	</EuiFlexGroup>
);
