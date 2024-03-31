import AsksIcon from "@/components/AsksIcon";
import StatisticsIcon from "@/components/StatisticsIcon";
import MyProfileIcon from "@/components/MyProfileIcon";
import SettingsIcon from "@/components/SettingsIcon";
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
