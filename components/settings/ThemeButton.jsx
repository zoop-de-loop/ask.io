import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import ToggleButton from "@/components/Button";

export default function ThemeButton() {
	const { theme, setTheme } = useContext(ThemeContext);

	const ToggleTheme = () => {
		setTheme((prev) => {
			const newValue = prev === "bright" ? "dark" : "bright";
			localStorage.setItem("theme", newValue);
			return newValue;
		});
	};

	return <ToggleButton onToggle={ToggleTheme}>{`${theme} theme`}</ToggleButton>;
}