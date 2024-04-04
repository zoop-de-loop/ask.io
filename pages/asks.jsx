import styles from "@/styles/pages/asks.module.scss";
import Ask from "@/components/Ask";
import asksData from "@/server/asksData";

export default function Asks() {
	const askDataArr = Object.entries(asksData);
	const showAsk = askDataArr.map((dataArr) => {
		return <Ask id={dataArr[0]} ask={dataArr[1]["ask"]} like={dataArr[1]["like"]} anonymous={dataArr[1]["anonymous"]} />;
	});

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
