import React from "react";
import styles from "@/styles/Home.module.scss";

export default function AccountInfo(props) {
	return (
		<div className={props.className}>
			<img src={props.src} className={styles.img} />
			<div className={styles.div}>
				<p className={styles.p}>{props.fullName}</p>
				<p className={styles.p}>|</p>
				<div className={styles.div}>
					<p className={styles.p}>Day</p>
					<p className={styles.date}>{props.day}</p>
				</div>
			</div>
		</div>
	);
}
