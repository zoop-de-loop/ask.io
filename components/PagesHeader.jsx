import AccountInfo from "@/components/AccountInfo";

export default function PagesHeader() {
	return (
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceRegistration={9} />
			<h1>Ask.io</h1>
			<a href='/index'>HOME</a>
		</header>
	);
}
