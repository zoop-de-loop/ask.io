import AccountInfo from "@/components/AccountInfo";
import styles from "@/styles/components/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();
	const homeLink = router.asPath === "/" ? undefined : <a href='/'>HOME</a>;

	return (
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceRegistration={9} />
			<h1>Ask.io</h1>
			{homeLink}
		</header>
	);
}
