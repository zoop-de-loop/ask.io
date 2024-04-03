import styles from "@/styles/pages/asks.module.scss";
import Ask from "@/components/Ask";

const asks_data = [
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: true, anonymous: true },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: true, anonymous: true },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: true, anonymous: false },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: false, anonymous: false },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
	{ ask: "Can a dog love me?", like: false, anonymous: true },
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
