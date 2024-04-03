import AccountInfo from "@/components/AccountInfo";
import styles from "@/styles/components/header.module.scss";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();
	return router.asPath === "/" /* home page, not supposed to render home link */ ? (
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceRegistration={9} />
			<h1>Ask.io</h1>
		</header>
	) : (
		/* other pages, supposed to render home link */
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceRegistration={9} />
			<h1>Ask.io</h1>
			<a href='/'>HOME</a>
		</header>
	);

	return (
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceRegistration={9} />
			<h1>Ask.io</h1>
			<a href='/'>HOME</a>
		</header>
	);
}
