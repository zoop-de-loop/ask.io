import styles from "@/styles/pages/asks.module.scss";
import Ask from "@/components/Ask";
import asksData from "@/server/asksData";

export default function Asks() {
	const showAsk = asksData.map(({ ask, like, anonymous }) => {
		return <Ask ask={ask} like={like} anonymous={anonymous} />;
	});
	console.log(showAsk);

	return (
		<main>
			<div className={styles["asks-and-buttons"]}>
				<div className={styles.asks}>{showAsk}</div>
				<div className={styles.buttons}>
					<button>Show liked Asks</button>
					<button>Ask</button>
				</div>
			</div>
		</main>
	);
}
