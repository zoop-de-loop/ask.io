interface Colors{
	"primary":string,
	"secondary":string,
	"text":string,
	"invert":string,
}

type Themes= "bright" | "dark";

const colors:Record<Themes, Colors> = {
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
