import { useEffect, useState } from "react";
import styles from "@/styles/pages/settings.module.scss";

export default function Settings() {
	const [theme, setTheme] = useState("default");
	const [fontSize, setFontSize] = useState(-1);

	useEffect(() => {
		if (localStorage.getItem("theme")) {
			if (theme === "default") {
				setTheme(localStorage.getItem("theme"));
			} else {
				localStorage.setItem("theme", theme);
			}
		} else {
			localStorage.setItem("theme", "bright");
		}
		changeTheme(theme);
	}, [theme]);

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

	const toggleTheme = () => {
		setTheme((prev) => {
			if (prev === "bright") {
				return changeTheme("dark");
			} else {
				return changeTheme("bright");
			}
		});
	};

	const changeTheme = (givenTheme) => {
		document.documentElement.style.setProperty("--primary-color", givenTheme === "bright" ? "#EC7373" : "#B95151");
		document.documentElement.style.setProperty("--secondary-color", givenTheme === "bright" ? "#FFFFFF" : "#301E1E");
		document.documentElement.style.setProperty("--text-color", givenTheme === "bright" ? "#000000" : "#FFFFFF");
		return givenTheme;
	};

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
		<main className={styles.main}>
			<article className={styles.theme}>
				<h2>theme -</h2>
				<button className={styles["theme-switch"]} onClick={toggleTheme}>
					{theme.toUpperCase()} THEME
				</button>
			</article>

			<article>
				<h2>font size -</h2>
				<div className={styles["font-size-switch"]}>
					<button onClick={handleFontPlusCLicked}>+</button>
					<h3>{fontSize}</h3>
					<button onClick={handleFontMinusCLicked}>-</button>
				</div>
			</article>
		</main>
	);
}
