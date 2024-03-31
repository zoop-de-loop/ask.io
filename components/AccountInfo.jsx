import styles from "@/styles/account-info.module.scss";

export default function AccountInfo({ profilePictureSrc, fullName, daysSinceReg }) {
	return (
		<div id={styles["account-info"]}>
			<img src={profilePictureSrc} />
			<div className={styles.row}>
				<p>{fullName}</p>
				<p>|</p>
				<div className={styles.row}>
					<p>Day</p>
					<p id={styles["days-since-registration"]}>
						{daysSinceReg}
						<span>d</span>
					</p>
				</div>
			</div>
		</div>
	);
}
