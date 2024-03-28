import React from "react";
import AccountInfoStyles from "@/styles/AccountInfo.module.scss";

export default function AccountInfo(props) {
	return (
		<div className={AccountInfoStyles.accountInfo}>
			<img src={props.src} className={AccountInfoStyles.img} />
			<div className={AccountInfoStyles.div}>
				<p className={AccountInfoStyles.p}>{props.fullName}</p>
				<p className={AccountInfoStyles.p}>|</p>
				<div className={AccountInfoStyles.div}>
					<p className={AccountInfoStyles.p}>Day</p>
					<p className={AccountInfoStyles.date}>{props.day}</p>
				</div>
			</div>
		</div>
	);
}
