import AccountInfo from "@/components/AccountInfo";
import styles from "@/styles/components/pages-header.module.scss";
export default function PagesHeader() {
	return (
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceRegistration={9} />
			<h1>Ask.io</h1>
			<a href='/'>HOME</a>
		</header>
	);
}
