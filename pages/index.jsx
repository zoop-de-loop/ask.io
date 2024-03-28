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
				<AccountInfo src={"/lio_img.png"} fullName='Lio Giladi' day='9' className={styles.accountInfo} />
				<h1 className={styles.h1}>Ask.io</h1>
			</header>
			<main className={styles.main}>
				<LinkCard name='Asks' icon={<AsksIcon />} className={styles.LinkCard} />
				<LinkCard name='Statistics' icon={<StatisticsIcon />} className={styles.LinkCard} />
				<LinkCard name='My Profile' icon={<MyProfileIcon />} className={styles.LinkCard} />
				<LinkCard name='Settings' icon={<SettingsIcon />} className={styles.LinkCard} />
			</main>
		</>
	);
}
