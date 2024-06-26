import styles from "../styles/components/account-info.module.scss";

type Props = {
	profilePictureSrc: string;
	fullName: string;
	daysSinceRegistration: number;
};

export default function AccountInfo({ profilePictureSrc, fullName, daysSinceRegistration }: Props) {
	return (
		<div id={styles["account-info"]}>
			<img src={profilePictureSrc} alt='profile-pic' />
			<div className={styles.row}>
				<p>{fullName}</p>
				<p>|</p>
				<div className={styles.row}>
					<p>Day</p>
					<p id={styles["days-since-registration"]}>
						{daysSinceRegistration}
						<span>d</span>
					</p>
				</div>
			</div>
		</div>
	);
}
