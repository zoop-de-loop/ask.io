import styles from "../styles/components/link-card.module.scss";

export default function LinkCard({ name, url, icon }) {
	return (
		<a className={styles["link-card"]} href={url}>
			<h2>{name}</h2>

			<div className={styles["circles"]}>
				<div className={styles["circle"]}>{icon}</div>
				<div className={styles["circle"]} />
				<div className={styles["circle"]} />
			</div>
		</a>
	);
}
