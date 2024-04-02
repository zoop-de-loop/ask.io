import AsksIcon from "@/components/icons/AsksIcon";
import StatisticsIcon from "@/components/icons/StatisticsIcon";
import MyProfileIcon from "@/components/icons/MyProfileIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import LinkCard from "@/components/LinkCard";
import styles from "@/styles/pages/home.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles["page-links"]}>
				<LinkCard name='Asks' url='/ask' icon={<AsksIcon />} />
				<LinkCard name='Statistics' url='/statistics' icon={<StatisticsIcon />} />
				<LinkCard name='My Profile' url='/myProfile' icon={<MyProfileIcon />} />
				<LinkCard name='Settings' url='/settings' icon={<SettingsIcon />} />
			</div>
		</main>
	);
}
