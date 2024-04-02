import Header from "@/components/Header";
import Stat from "@/components/Stat";
import styles from "@/styles/pages/statistics.module.scss";

export default function Statistics() {
	const data = [
		{ amount: 19, name: "all asks" },
		{ amount: 7, name: "my asks" },
		{ amount: 3, name: "liked asks" },
		{ amount: 3, name: "accounts" },
		{ amount: 1, name: "accounts" },
		{ amount: 1, name: "accounts" },
		{ amount: 1, name: "accounts" },
	];

	return (
		<>
			<Header />
			<main>
				<div className={styles.stats}>
					{data.map(({ amount, name }) => (
						<Stat amount={amount} name={name} />
					))}
				</div>
			</main>
		</>
	);
}
