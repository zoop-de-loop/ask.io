import { Theme } from "../pages/_app";

interface Colors {
	primary: string;
	secondary: string;
	text: string;
	invert: string;
}

const colors: Record<Theme, Colors> = {
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
