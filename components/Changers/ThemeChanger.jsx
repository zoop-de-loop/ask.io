import { useEffect, useState } from "react";

import styles from "@/styles/components/changers/theme-changer.module.scss";

export default function ThemeChanger() {
	const [theme, setTheme] = useState("default");

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
		document.documentElement.style.setProperty("--invert", givenTheme == "bright" ? "0%" : "100%");
		return givenTheme;
	};

	return (
		<button className={styles["theme-changer"]} onClick={toggleTheme}>
			{theme} THEME
		</button>
	);
}
