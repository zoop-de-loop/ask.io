import React, { useState, useEffect } from "react";
export default function AccountInfo(props) {
	return (
		<>
			<img src={props.src} />
			<p>{props.fullName}</p>
			<p>|</p>
			<p>Day {props.day}</p>
		</>
	);
}
