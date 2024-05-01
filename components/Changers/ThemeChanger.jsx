import { useEffect, useState } from "react";

import styles from "@/styles/components/changers/theme-changer.module.scss";

export default function ThemeChanger() {
	const [theme, setTheme] = useState("default");
	const brightPrimary = "#EC7373";
	const brightSecondary = "#FFFFFF";
	const brightText = "#000000";
	const brightInvert = "0%";
	const darkPrimary = "#B95151";
	const darkSecondary = "#301E1E";
	const darkText = "#FFFFFF";
	const darkInvert = "100%";

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

	const updateThemeVariables = () => {
		setTheme((prev) => {
			if (prev === "bright") {
				changeTheme("dark");
				return "dark";
			} else {
				changeTheme("bright");
				return "bright";
			}
		});
	};

	const changeTheme = (givenTheme) => {
		document.documentElement.style.setProperty("--primary-color", givenTheme === "bright" ? brightPrimary : darkPrimary);
		document.documentElement.style.setProperty("--secondary-color", givenTheme === "bright" ? brightSecondary : darkSecondary);
		document.documentElement.style.setProperty("--text-color", givenTheme === "bright" ? brightText : darkText);
		document.documentElement.style.setProperty("--invert", givenTheme == "bright" ? brightInvert : darkInvert);
	};

	return (
		<button className={styles["theme-changer"]} onClick={updateThemeVariables}>
			{theme} THEME
		</button>
	);
}
