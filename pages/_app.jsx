import { useEffect } from "react";
import "@/styles/globals.scss";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		if (localStorage.getItem("font-size")) {
			document.documentElement.style.setProperty("--font-size", `${parseInt(localStorage.getItem("font-size"))}px`);
		} else {
			document.documentElement.style.setProperty("--font-size", `${parseInt(16)}px`);
		}

		if (localStorage.getItem("theme")) {
			document.documentElement.style.setProperty(
				"--primary-color",
				localStorage.getItem("theme") === "bright" ? "#EC7373" : "#B95151"
			);
			document.documentElement.style.setProperty(
				"--secondary-color",
				localStorage.getItem("theme") === "bright" ? "#FFFFFF" : "#301E1E"
			);
			document.documentElement.style.setProperty(
				"--text-color",
				localStorage.getItem("theme") === "bright" ? "#000000" : "#FFFFFF"
			);
		} else {
			document.documentElement.style.setProperty("--primary-color", "#EC7373");
			document.documentElement.style.setProperty("--secondary-color", "#FFFFFF");
			document.documentElement.style.setProperty("--text-color", "#000000");
		}
	}, []);

	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
