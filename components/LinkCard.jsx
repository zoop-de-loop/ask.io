import React from "react";
import styles from "@/styles/Home.module.scss";

export default function LinkCard(props) {
	return (
		<a className={props.className} href={`#${props.name}`}>
			<h2 className={styles.h2}>{props.name}</h2>

			<div className={styles.circleContainer}>
				<div className={styles.bigCircle}>
					<div className={styles.svg}>{props.icon}</div>
				</div>
				<div className={styles.mediumCircle}></div>
				<div className={styles.smallCircle}></div>
			</div>
		</a>
	);
}
