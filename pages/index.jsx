import AsksIcon from "@/Icons/AsksIcon";
import StatisticsIcon from "@/Icons/StatisticsIcon";
import MyProfileIcon from "@/Icons/MyProfileIcon";
import SettingsIcon from "@/Icons/SettingsIcon";
import LinkCard from "@/components/LinkCard";

import PageHead from "@/components/PageHead";
import styles from "@/styles/Home.module.scss";

export default function Home() {
	return (
		<>
			<PageHead />
			<main className={styles.main}>
				<LinkCard name='Asks' icon={<AsksIcon />} />
				<LinkCard name='Statistics' icon={<StatisticsIcon />} />
				<LinkCard name='My Profile' icon={<MyProfileIcon />} />
				<LinkCard name='Settings' icon={<SettingsIcon />} />
			</main>
		</>
	);
}
