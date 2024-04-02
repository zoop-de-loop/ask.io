import Header from "@/components/Header";
import Statistic from "@/components/Stat";
import styles from "@/styles/pages/statistics.module.scss";

export default function Statistics() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Statistic amount={19} name='all asks' />
				<Statistic amount={7} name='my asks' />
				<Statistic amount={3} name='liked asks' />
				<Statistic amount={1} name='accounts' />
				<Statistic amount={1} name='accounts' />
				<Statistic amount={1} name='accounts' />
			</main>
		</>
	);
}
