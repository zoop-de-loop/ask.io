import AsksIcon from "@/components/Icons/AsksIcon";
import StatisticsIcon from "@/components/Icons/StatisticsIcon";
import MyProfileIcon from "@/components/Icons/MyProfileIcon";
import SettingsIcon from "@/components/Icons/SettingsIcon";
import LinkCard from "@/components/LinkCard";
import Header from "@/components/Header";
import styles from "@/styles/home.module.scss";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<LinkCard name='Asks' link='Asks' icon={<AsksIcon />} />
				<LinkCard name='Statistics' link='Statistics' icon={<StatisticsIcon />} />
				<LinkCard name='My Profile' link='myProfile' icon={<MyProfileIcon />} />
				<LinkCard name='Settings' link='Settings' icon={<SettingsIcon />} />
			</main>
		</>
	);
}
