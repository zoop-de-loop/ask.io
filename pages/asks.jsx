import styles from "@/styles/pages/asks.module.scss";
import Ask from "@/components/Ask";
import asksData from "@/server/asksData";
import React, { useState } from "react";

export default function Asks() {
	const askDataArr = Object.entries(asksData);
	const [likedActive, setLikedActive] = useState(false);

	const handleLikeButtonClick = () => {
		setLikedActive((prev) => {
			return !prev;
		});
	};
	let showAsk = [];

	if (likedActive) {
		const likedAsks = askDataArr.filter((dataArr) => dataArr[1]["like"] === true);
		console.log(likedAsks);
		showAsk = likedAsks.map((dataArr) => {
			console.log(`==> ask: ${dataArr[1]["ask"]} like: ${dataArr[1]["like"]} anonymous: ${dataArr[1]["anonymous"]}`);
			return <Ask key={dataArr[0]} ask={dataArr[1]["ask"]} like={dataArr[1]["like"]} anonymous={dataArr[1]["anonymous"]} />;
		});
	} else {
		showAsk = askDataArr.map((dataArr) => {
			return <Ask key={dataArr[0]} ask={dataArr[1]["ask"]} like={dataArr[1]["like"]} anonymous={dataArr[1]["anonymous"]} />;
		});
	}

	return (
		<main>
			<div className={styles["asks-and-buttons"]}>
				<div className={styles.asks}>{showAsk}</div>
				<div className={styles.buttons}>
					<button onClick={handleLikeButtonClick}>{likedActive ? "Show All Asks" : "Show liked Asks"}</button>
					<button>Ask</button>
				</div>
			</div>
		</main>
	);
}
