import AccountInfo from "@/components/AccountInfo";
import styles from "@/styles/header.module.scss";

export default function Header() {
	return (
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceReg={9} />
			<h1>Ask.io</h1>
		</header>
	);
}
