import { useEffect, useState, createContext } from "react";
import "../styles/globals.scss";
import THEME_CSS_VARIABLES from "../utils/themeCSSVariables";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export type Theme = "bright" | "dark";

type ThemeContextType = {
	theme?: Theme;
	setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType>({ theme: "bright", setTheme: undefined });

export default function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useState<Theme>("bright");

	useEffect(() => {
		if (!localStorage.getItem("fontSize")) {
			localStorage.setItem("fontSize", "16");
		}

		if (!localStorage.getItem("theme")) {
			localStorage.setItem("theme", "bright");
		}

		setTheme(localStorage.getItem("theme") as Theme);
		document.documentElement.style.setProperty("--font-size", `${localStorage.getItem("fontSize")}px`);
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty("--primary-color", THEME_CSS_VARIABLES[theme]["primary-color"]);
		document.documentElement.style.setProperty("--secondary-color", THEME_CSS_VARIABLES[theme]["secondary-color"]);
		document.documentElement.style.setProperty("--text-color", THEME_CSS_VARIABLES[theme]["text-color"]);
		document.documentElement.style.setProperty("--invert", THEME_CSS_VARIABLES[theme]["invert-images"]);
		document.documentElement.style.setProperty("--font-size", `${localStorage.getItem("fontSize")}px`);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Header />
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}
