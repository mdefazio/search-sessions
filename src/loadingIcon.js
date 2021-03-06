import { EuiIcon } from "@elastic/eui";

export const LoadingIconSVG = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		style={{ width: "12px", height: "12px" }}
	>
		<path d="M7.5 13c3.033 0 5.5-2.467 5.5-5.5S10.533 2 7.5 2c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5C11.09 1 14 3.91 14 7.5S11.09 14 7.5 14 1 11.09 1 7.5c0-.27614.22386-.5.5-.5s.5.22386.5.5C2 10.533 4.467 13 7.5 13zM4.6724 1.96808c0 .27614.22386.5.5.5s.5-.22386.5-.5-.22386-.5-.5-.5-.5.22386-.5.5zM2.8627 3.15836c0 .27614.22386.5.5.5s.5-.22386.5-.5c0-.27615-.22386-.5-.5-.5s-.5.22385-.5.5zm-.82355 2.33755c-.27615 0-.5-.22386-.5-.5s.22385-.5.5-.5c.27614 0 .5.22386.5.5s-.22386.5-.5.5zM10.5 7H8V3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5z" />
	</svg>
);

export const LoadingIcon = () => (
	<EuiIcon type={LoadingIconSVG} color="subdued" size="s" />
);
