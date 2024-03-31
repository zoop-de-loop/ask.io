import styles from "@/styles/AccountInfo.module.scss";

export default function AccountInfo({ profilePictureSrc, fullName, daysSinceReg }) {
	return (
		<div className={styles["account-info"]}>
			<img src={profilePictureSrc} />
			<div>
				<p>{fullName}</p>
				<p>|</p>
				<div>
					<p>Day</p>
					<p className={styles["days-since-reg"]}>
						{daysSinceReg}
						<span>d</span>
					</p>
				</div>
			</div>
		</div>
	);
}
