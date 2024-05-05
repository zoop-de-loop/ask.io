import { useState, useEffect } from "react";
import "@/styles/globals.scss";
import colors from "@/server/colors";
import PageFeatures from "@/server/context";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState("bright");
	const [fontSize, setFontSize] = useState(16);

	useEffect(() => {
		if (localStorage.getItem("fontSize")) {
			setFontSize(localStorage.getItem("fontSize"));
		} else {
			localStorage.setItem("fontSize", 16);
		}

		if (localStorage.getItem("theme")) {
			setTheme(localStorage.getItem("theme"));
		} else {
			localStorage.setItem("theme", "bright");
		}
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty("--primary-color", theme === "bright" ? colors.brightPrimary : colors.darkPrimary);
		document.documentElement.style.setProperty(
			"--secondary-color",
			theme === "bright" ? colors.brightSecondary : colors.darkSecondary
		);
		document.documentElement.style.setProperty("--text-color", theme === "bright" ? colors.brightText : colors.darkText);
		document.documentElement.style.setProperty("--invert", theme === "bright" ? colors.brightInvert : colors.darkInvert);
	}, [theme]);

	useEffect(() => {
		document.documentElement.style.setProperty("--font-size", `${parseInt(fontSize)}px`);
	}, [fontSize]);

	return (
		<PageFeatures.Provider value={{ theme: theme, setTheme: setTheme, fontSize: fontSize, setFontSize: setFontSize }}>
			<Header />
			<Component {...pageProps} />
		</PageFeatures.Provider>
	);
}
