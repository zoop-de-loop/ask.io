import styles from "../styles/pages/statistics.module.scss";
import Stat from "../components/Stat";

const data = [
	{ id: 0, amount: 19, name: "all asks" },
	{ id: 1, amount: 7, name: "my asks" },
	{ id: 2, amount: 3, name: "liked asks" },
	{ id: 3, amount: 3, name: "accounts" },
	{ id: 4, amount: 1, name: "accounts" },
	{ id: 5, amount: 1, name: "accounts" },
	{ id: 6, amount: 1, name: "accounts" },
];

export default function Statistics() {
	const stats = data.map(({ amount, name }) => <Stat amount={amount} name={name} />);

	return (
		<main>
			<div className={styles.stats}>{stats}</div>
		</main>
	);
}
