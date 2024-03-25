import AsksIcon from "@/components/AsksIcon";
import StatisticsIcon from "@/components/StatisticsIcon";
import MyProfileIcon from "@/components/MyProfileIcon";
import SettingsIcon from "@/components/SettingsIcon";
import LinkCard from "@/components/LinkCard";
import AccountInfo from "@/components/AccountInfo";

export default function Home() {
	return (
		<>
			<header>
				<AccountInfo src='' fullName='Lio Giladi' day='9' />
				<h1>Ask.io</h1>
			</header>
			<main>
				<LinkCard name='Asks' icon={<AsksIcon />} />
				<LinkCard name='Statistics' icon={<StatisticsIcon />} />
				<LinkCard name='My Profile' icon={<MyProfileIcon />} />
				<LinkCard name='Settings' icon={<SettingsIcon />} />
			</main>
		</>
	);
}
