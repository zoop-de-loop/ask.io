import { useEffect, useState } from "react";
import styles from "@/styles/pages/settings.module.scss";

export default function Settings() {
	const [theme, setTheme] = useState("bright");
	const [fontSize, setFontSize] = useState(16);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		localStorage.setItem("font-size", fontSize);
	}, [fontSize]);

	const toggleTheme = () => {
		setTheme((prev) => {
			document.documentElement.style.setProperty("--primary-color", prev !== "bright" ? "#EC7373" : "#B95151");
			document.documentElement.style.setProperty("--secondary-color", prev !== "bright" ? "#FFFFFF" : "#301E1E");
			document.documentElement.style.setProperty("--text-color", prev !== "bright" ? "#000000" : "#FFFFFF");
			return prev === "bright" ? "dark" : "bright";
		});
	};

	const handleFontPlusCLicked = () => {
		setFontSize((prev) => {
			if (prev < 20) {
				document.documentElement.style.setProperty("--font-size", `${prev + 1}px`);
				return prev + 1;
			}
			return prev;
		});
	};

	const handleFontMinusCLicked = () => {
		setFontSize((prev) => {
			if (prev > 10) {
				document.documentElement.style.setProperty("--font-size", `${prev - 1}px`);
				return prev - 1;
			}
			return prev;
		});
	};

	return (
		<main>
			<button onClick={toggleTheme}>PRESS ME COLOR</button>
			<button onClick={handleFontPlusCLicked}>PRESS ME FONT PLUS</button>
			<button onClick={handleFontMinusCLicked}>PRESS ME FONT MINUS</button>
		</main>
	);
}
