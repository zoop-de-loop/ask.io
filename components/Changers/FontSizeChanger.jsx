import { useEffect, useState } from "react";

import styles from "@/styles/components/changers/font-size-changer.module.scss";

export default function FontSizeChanger() {
	const [fontSize, setFontSize] = useState(-1);

	useEffect(() => {
		if (localStorage.getItem("font-size")) {
			if (fontSize === -1) {
				setFontSize(localStorage.getItem("font-size"));
			} else {
				localStorage.setItem("font-size", fontSize);
			}
		} else {
			localStorage.setItem("font-size", 16);
		}
		document.documentElement.style.setProperty("--font-size", `${parseInt(fontSize)}px`);
	}, [fontSize]);

	const handleFontPlusCLicked = () => {
		setFontSize((prev) => {
			if (parseInt(prev) < 20) {
				return parseInt(prev) + 1;
			}
			return parseInt(prev);
		});
	};

	const handleFontMinusCLicked = () => {
		setFontSize((prev) => {
			if (parseInt(prev) > 10) {
				return parseInt(prev) - 1;
			}
			return parseInt(prev);
		});
	};

	return (
		<div className={styles["font-size-counter"]}>
			<button onClick={handleFontPlusCLicked}>+</button>
			<p>{fontSize}</p>
			<button onClick={handleFontMinusCLicked}>-</button>
		</div>
	);
}
