import { useState } from "react";
import styles from "@/styles/pages/settings.module.scss";

export default function Settings() {
	const [colorMode, setColorMode] = useState("bright");
	const toggleColorMode = () => {
		setColorMode((prev) => {
			document.documentElement.style.setProperty("--primary-color", prev !== "bright" ? "#EC7373" : "#B95151");
			document.documentElement.style.setProperty("--secondary-color", prev !== "bright" ? "#FFFFFF" : "#301E1E");
			document.documentElement.style.setProperty("--text-color", prev !== "bright" ? "#000000" : "#FFFFFF");
			return prev === "bright" ? "dark" : "bright";
		});
	};
	return (
		<main>
			<button onClick={toggleColorMode}>PRESS ME</button>
		</main>
	);
}
