import React from "react";
import AccountInfoStyles from "@/styles/AccountInfo.module.scss";

export default function AccountInfo(props) {
	return (
		<div className={AccountInfoStyles.accountInfo}>
			<img src={props.src} />
			<div>
				<p>{props.fullName}</p>
				<p>|</p>
				<div>
					<p>Day</p>
					<p className={AccountInfoStyles.date}>
						{props.day}
						<span>d</span>
					</p>
				</div>
			</div>
		</div>
	);
}
