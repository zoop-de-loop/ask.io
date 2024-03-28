import React from "react";
import LinkCardStyles from "@/styles/LinkCard.module.scss";

export default function LinkCard(props) {
	return (
		<a className={LinkCardStyles.LinkCard} href={`#${props.name}`}>
			<h2>{props.name}</h2>

			<div className={LinkCardStyles.circleContainer}>
				<div className={LinkCardStyles.bigCircle}>
					<div>{props.icon}</div>
				</div>
				<div className={LinkCardStyles.mediumCircle}></div>
				<div className={LinkCardStyles.smallCircle}></div>
			</div>
		</a>
	);
}
