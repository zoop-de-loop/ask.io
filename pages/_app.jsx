import { useEffect, useState } from "react";
import "@/styles/globals.scss";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState("bright");
	const [fontSize, setFontSize] = useState(16);

	const brightPrimary = "#EC7373";
	const brightSecondary = "#FFFFFF";
	const brightText = "#000000";
	const brightInvert = "0%";
	const darkPrimary = "#B95151";
	const darkSecondary = "#301E1E";
	const darkText = "#FFFFFF";
	const darkInvert = "100%";

	useEffect(() => {
		if (localStorage.getItem("font-size")) {
			setFontSize(localStorage.getItem("font-size"));
		} else {
			localStorage.setItem("font-size", 16);
		}

		if (localStorage.getItem("theme")) {
			setTheme(localStorage.getItem("theme"));
		} else {
			setTheme("bright");
		}
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty("--primary-color", theme === "bright" ? brightPrimary : darkPrimary);
		document.documentElement.style.setProperty("--secondary-color", theme === "bright" ? brightSecondary : darkSecondary);
		document.documentElement.style.setProperty("--text-color", theme === "bright" ? brightText : darkText);
		document.documentElement.style.setProperty("--invert", theme === "bright" ? brightInvert : darkInvert);
	}, [theme]);

	useEffect(() => {
		document.documentElement.style.setProperty("--font-size", `${parseInt(fontSize)}px`);
	}, [fontSize]);

	pageProps["theme"] = theme;
	pageProps["setTheme"] = setTheme;
	pageProps["fontSize"] = fontSize;
	pageProps["setFontSize"] = setFontSize;

	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
