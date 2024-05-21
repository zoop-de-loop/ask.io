import { Theme } from "../pages/_app";

type themeCSSVariableName = "primary" | "secondary" | "text" | "invert";
type themeCSSVariables = { [key in themeCSSVariableName]: string };

const colors: Record<Theme, themeCSSVariables> = {
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

export default colors;
