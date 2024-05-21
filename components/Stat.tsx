import styles from "../styles/components/stat.module.scss";

type Props = { amount: number; name: string };
export default function Stat({ amount, name }: Props) {
	return (
		<article className={styles.stat}>
			<p>{amount}</p>
			<h2>{name}</h2>
		</article>
	);
}
