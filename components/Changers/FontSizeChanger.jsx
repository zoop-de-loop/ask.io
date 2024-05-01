import { useEffect, useState } from "react";

import styles from "@/styles/components/changers/font-size-changer.module.scss";

export default function FontSizeChanger({ fontSize, setFontSize }) {
	const increaseFontSize = () => {
		if (fontSize < 20) {
			localStorage["font-size"] = parseInt(fontSize) + 1;
			setFontSize(localStorage["font-size"]);
		}
	};

	const decreaseFontSize = () => {
		if (fontSize > 10) {
			localStorage["font-size"] = parseInt(fontSize) - 1;
			setFontSize(localStorage["font-size"]);
		}
	};

	return (
		<div className={styles["font-size-counter"]}>
			<button onClick={increaseFontSize}>+</button>
			<p>{fontSize}</p>
			<button onClick={decreaseFontSize}>-</button>
		</div>
	);
}
