import { Theme } from "../pages/_app";

type CssVariableName = "primary" | "secondary" | "text" | "invert";
type CssVariables = { [key in CssVariableName]: string };

const colors: Record<Theme, CssVariables> = {
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
