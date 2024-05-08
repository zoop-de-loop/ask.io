import styles from "@/styles/pages/home.module.scss";
import AsksIcon from "@/components/icons/AsksIcon";
import StatisticsIcon from "@/components/icons/StatisticsIcon";
import AccountIcon from "@/components/icons/AccountIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import LinkCard from "@/components/LinkCard";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles["page-links"]}>
				<LinkCard name='Asks' url='/asks' icon={<AsksIcon />} />
				<LinkCard name='Statistics' url='/statistics' icon={<StatisticsIcon />} />
				<LinkCard name='My Profile' url='/account' icon={<AccountIcon />} />
				<LinkCard name='Settings' url='/settings' icon={<SettingsIcon />} />
			</div>
		</main>
	);
}
