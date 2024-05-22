import { Theme } from "../pages/_app";

type ThemeCSSVariableName = "primary-color" | "secondary-color" | "text-color" | "invert-images";
type ThemeCSSVariables = { [key in ThemeCSSVariableName]: string };

const THEME_CSS_VARIABLES: Record<Theme, ThemeCSSVariables> = Object.freeze({
	bright: {
		"primary-color": "#EC7373",
		"secondary-color": "#FFFFFF",
		"text-color": "#000000",
		"invert-images": "0%",
	},

	dark: {
		"primary-color": "#B95151",
		"secondary-color": "#301E1E",
		"text-color": "#FFFFFF",
		"invert-images": "100%",
	},
});

export default THEME_CSS_VARIABLES;
