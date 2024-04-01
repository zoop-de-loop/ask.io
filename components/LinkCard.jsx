import styles from "@/styles/components/link-card.module.scss";

export default function LinkCard({ name, link, icon }) {
	return (
		<a className={styles["link-card"]} href={`#${link}`}>
			<h2>{name}</h2>

			<div className={styles.circles}>
				<div className={styles.circle}>{icon}</div>
				<div className={styles.circle} />
				<div className={styles.circle} />
			</div>
		</a>
	);
}
