import React from "react";
import styles from "@/styles/LinkCard.module.scss";

export default function LinkCard({ name, icon }) {
	return (
		<a className={styles["Link-card"]} href={`#${name}`}>
			<h2>{name}</h2>

			<div className={styles.circles}>
				<div className={styles.circle}>{icon}</div>
				<div className={styles.circle} />
				<div className={styles.circle} />
			</div>
		</a>
	);
}
