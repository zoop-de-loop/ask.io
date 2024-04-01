import AccountInfo from "@/components/AccountInfo";
import styles from "@/styles/components/header.module.scss";

export default function Header() {
	return (
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceRegistration={9} />
			<h1>Ask.io</h1>
		</header>
	);
}