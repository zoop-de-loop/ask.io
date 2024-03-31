import React from "react";
import styles from "@/styles/LinkCard.module.scss";

export default function LinkCard(props) {
	return (
		<a className={styles["Link-card"]} href={`#${props.name}`}>
			<h2>{props.name}</h2>

			<div className={styles["circle-container"]}>
				<div className={styles["big-circle"]}>
					<div>{props.icon}</div>
				</div>
				<div className={styles["medium-circle"]}></div>
				<div className={styles["small-circle"]}></div>
			</div>
		</a>
	);
}
