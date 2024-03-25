import React from "react";

export default function LinkCard(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			{props.icon}
		</div>
	);
}
