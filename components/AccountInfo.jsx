import React from "react";
import styles from "@/styles/AccountInfo.module.scss";

export default function AccountInfo(props) {
	return (
		<div className={styles.accountInfo}>
			<img src={props.profilePictureSrc} />
			<div>
				<p>{props.fullName}</p>
				<p>|</p>
				<div>
					<p>Day</p>
					<p className={styles.date}>
						{props.daysSinceReg}
						<span>d</span>
					</p>
				</div>
			</div>
		</div>
	);
}
