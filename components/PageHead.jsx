import AccountInfo from "@/components/AccountInfo";
import styles from "@/styles/PageHead.module.scss";
export default function PageHead() {
	return (
		<header className={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceReg={9} />
			<h1>Ask.io</h1>
		</header>
	);
}
