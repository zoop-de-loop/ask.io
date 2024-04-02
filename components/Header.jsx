import AccountInfo from "@/components/AccountInfo";
import styles from "@/styles/components/header.module.scss";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();
	const style = {
		display: router.asPath === "/" ? "none" : "block",
	};

	return (
		<header id={styles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceRegistration={9} />
			<h1>Ask.io</h1>
			<a href='/' style={style}>
				HOME
			</a>
		</header>
	);
}
