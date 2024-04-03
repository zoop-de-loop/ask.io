import styles from "@/styles/pages/asks.module.scss";
import Ask from "@/components/Ask";

const asks_data = [
	{ id: 0, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 1, ask: "Can a dog love me?", like: true, anonymous: true },
	{ id: 2, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 3, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 4, ask: "Can a dog love me?", like: true, anonymous: true },
	{ id: 5, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 6, ask: "Can a dog love me?", like: true, anonymous: false },
	{ id: 7, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 8, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 9, ask: "Can a dog love me?", like: false, anonymous: false },
	{ id: 10, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 11, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 12, ask: "Can a dog love me?", like: false, anonymous: true },
	{ id: 13, ask: "Can a dog love me?", like: false, anonymous: true },
];
export default function Asks() {
	const show_ask = asks_data.map(({ ask, like, anonymous }) => {
		<Ask ask={ask} like={like} anonymous={anonymous} />;
	});

	return (
		<main>
			<div className={styles["asks-and-buttons"]}>
				<div className={styles.asks}>{show_ask}</div>
				<div className={styles.buttons}>
					<button>Show liked Asks</button>
					<button>Ask</button>
				</div>
			</div>
		</main>
	);
}
