import { useEffect, useState, createContext } from "react";
import "../styles/globals.scss";
import colors from "../utils/colors";
import Header from "../components/Header";
import type { AppProps } from 'next/app'

type Themes= "bright" | "dark";
type ThemeContextType = {
	theme?:Themes,
	setTheme?: React.Dispatch<React.SetStateAction<Themes>>
};

export const ThemeContext = createContext<ThemeContextType>({});

export default function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme]= useState<Themes>("bright");

	useEffect(() => {
		if (!localStorage.getItem("fontSize")) {
			localStorage.setItem("fontSize", "16");
		}

		if (!localStorage.getItem("theme")) {
			localStorage.setItem("theme", "bright");
		}

		setTheme(localStorage.getItem("theme") as Themes);
		document.documentElement.style.setProperty("--font-size", `${localStorage.getItem("fontSize")}px`);
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty("--primary-color", colors[theme].primary);
		document.documentElement.style.setProperty("--secondary-color", colors[theme].secondary);
		document.documentElement.style.setProperty("--text-color", colors[theme].text);
		document.documentElement.style.setProperty("--invert", colors[theme].invert);
		document.documentElement.style.setProperty("--font-size", `${localStorage.getItem("fontSize")}px`);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Header />
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}
