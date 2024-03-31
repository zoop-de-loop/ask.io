import React from "react";
import styles from "@/styles/LinkCard.module.scss";

export default function LinkCard(props) {
	return (
		<a className={styles.LinkCard} href={`#${props.name}`}>
			<h2>{props.name}</h2>

			<div className={styles.circleContainer}>
				<div className={styles.bigCircle}>
					<div>{props.icon}</div>
				</div>
				<div className={styles.mediumCircle}></div>
				<div className={styles.smallCircle}></div>
			</div>
		</a>
	);
}
