import AsksIcon from "@/components/icons/AsksIcon";
import StatisticsIcon from "@/components/icons/StatisticsIcon";
import MyProfileIcon from "@/components/icons/MyProfileIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import LinkCard from "@/components/LinkCard";
import Header from "@/components/Header";
import styles from "@/styles/pages/home.module.scss";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<LinkCard name='Asks' url='Asks' icon={<AsksIcon />} />
				<LinkCard name='Statistics' link='Statistics' icon={<StatisticsIcon />} />
				<LinkCard name='My Profile' link='myProfile' icon={<MyProfileIcon />} />
				<LinkCard name='Settings' link='Settings' icon={<SettingsIcon />} />
			</main>
		</>
	);
}
