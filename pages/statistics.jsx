import PagesHeader from "@/components/PagesHeader";
import Statistic from "@/components/statistic";
import styles from "@/styles/pages/statistics.module.scss";
export default function Statistics() {
	return (
		<>
			<PagesHeader />
			<main className={styles.main}>
				<Statistic amount={19} statisticName='all asks' />
				<Statistic amount={7} statisticName='my asks' />
				<Statistic amount={3} statisticName='liked asks' />
				<Statistic amount={1} statisticName='accounts' />
				<Statistic amount={1} statisticName='accounts' />
				<Statistic amount={1} statisticName='accounts' />
			</main>
		</>
	);
}
