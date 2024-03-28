import AsksIcon from "@/components/AsksIcon";
import StatisticsIcon from "@/components/StatisticsIcon";
import MyProfileIcon from "@/components/MyProfileIcon";
import SettingsIcon from "@/components/SettingsIcon";
import LinkCard from "@/components/LinkCard";
import AccountInfo from "@/components/AccountInfo";
import styles from "@/styles/Home.module.scss";

export default function Home() {
	return (
		<>
			<header className={styles.header}>
				<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceReg={9} />
				<h1 className={styles.h1}>Ask.io</h1>
			</header>
			<main className={styles.main}>
				<LinkCard name='Asks' icon={<AsksIcon />} />
				<LinkCard name='Statistics' icon={<StatisticsIcon />} />
				<LinkCard name='My Profile' icon={<MyProfileIcon />} />
				<LinkCard name='Settings' icon={<SettingsIcon />} />
			</main>
		</>
	);
}
