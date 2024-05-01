import { useEffect, useState } from "react";

import styles from "@/styles/components/changers/font-size-changer.module.scss";

export default function FontSizeChanger() {
	const [fontSize, setFontSize] = useState(-1);

	useEffect(() => {
		if (localStorage.getItem("font-size")) {
			if (fontSize === -1) {
				setFontSize(parseInt(localStorage.getItem("font-size")));
			} else {
				localStorage.setItem("font-size", parseInt(fontSize));
			}
		} else {
			localStorage.setItem("font-size", 16);
			setFontSize(parseInt(localStorage.getItem("font-size")));
		}

		document.documentElement.style.setProperty("--font-size", `${parseInt(fontSize)}px`);
	}, [fontSize]);

	const increaseFontSize = () => {
		if (fontSize < 20) {
			setFontSize((prev) => {
				return prev + 1;
			});
		}
	};

	const decreaseFontSize = () => {
		if (fontSize > 10) {
			setFontSize((prev) => {
				return prev - 1;
			});
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
