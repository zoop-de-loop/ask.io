import React from "react";
import styles from "@/styles/AccountInfo.module.scss";

export default function AccountInfo(props) {
	return (
		<div className={styles["account-info"]}>
			<img src={props.profilePictureSrc} />
			<div>
				<p>{props.fullName}</p>
				<p>|</p>
				<div>
					<p>Day</p>
					<p className={styles["days-since-reg"]}>
						{props.daysSinceReg}
						<span>d</span>
					</p>
				</div>
			</div>
		</div>
	);
}
