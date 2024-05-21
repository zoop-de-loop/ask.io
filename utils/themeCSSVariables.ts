import { Theme } from "../pages/_app";

type ThemeCSSVariableName = "primary" | "secondary" | "text" | "invert";
type ThemeCSSVariables = { [key in ThemeCSSVariableName]: string };

const themeCSSVariables: Record<Theme, ThemeCSSVariables> = {
	bright: {
		primary: "#EC7373",
		secondary: "#FFFFFF",
		text: "#000000",
		invert: "0%",
	},

	dark: {
		primary: "#B95151",
		secondary: "#301E1E",
		text: "#FFFFFF",
		invert: "100%",
	},
};

export default themeCSSVariables;
