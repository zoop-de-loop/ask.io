import styles from "@/styles/components/statistic.module.scss";

export default function Statistic({ amount, statisticName }) {
	return (
		<article className={styles.article}>
			<p>{amount}</p>
			<p>{statisticName}</p>
		</article>
	);
}
