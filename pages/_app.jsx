import { useEffect, useState } from "react";
import "@/styles/globals.scss";
import colors from "@/server/colors";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState("bright");
	const [fontSize, setFontSize] = useState(16);

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
