import styles from "@/styles/components/stat.module.scss";

export default function Stat({ amount, name }) {
	return (
		<article className={styles.stat}>
			<p>{amount}</p>
			<p>{name}</p>
		</article>
	);
}
