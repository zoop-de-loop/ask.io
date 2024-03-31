import React from "react";
import AccountInfo from "@/components/AccountInfo";
import PageHeadStyles from "@/styles/PageHead.module.scss";
export default function PageHead() {
	return (
		<header className={PageHeadStyles.header}>
			<AccountInfo profilePictureSrc={"/lio_img.png"} fullName='Lio Giladi' daysSinceReg={9} />
			<h1>Ask.io</h1>
		</header>
	);
}
