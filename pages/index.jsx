import AsksIcon from "@/Icons/AsksIcon";
import StatisticsIcon from "@/Icons/StatisticsIcon";
import MyProfileIcon from "@/Icons/MyProfileIcon";
import SettingsIcon from "@/Icons/SettingsIcon";
import LinkCard from "@/components/LinkCard";
import Header from "@/components/Header";
import styles from "@/styles/home.module.scss";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<LinkCard name='Asks' icon={<AsksIcon />} />
				<LinkCard name='Statistics' icon={<StatisticsIcon />} />
				<LinkCard name='My Profile' icon={<MyProfileIcon />} />
				<LinkCard name='Settings' icon={<SettingsIcon />} />
			</main>
		</>
	);
}
