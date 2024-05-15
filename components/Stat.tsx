import styles from "../styles/components/stat.module.scss";

export default function Stat({ amount, name }:{amount:number, name:string}) {
	return (
		<article className={styles["stat"]}>
			<p>{amount}</p>
			<h2>{name}</h2>
		</article>
	);
}
