import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import Button from "@/components/Button";

export default function ThemeButton() {
	const { theme, setTheme } = useContext(ThemeContext);

	const ToggleTheme = () => {
		setTheme((prev) => {
			const newValue = prev === "bright" ? "dark" : "bright";
			localStorage.setItem("theme", newValue);
			return newValue;
		});
	};

	return <Button onClick={ToggleTheme}>{`${theme} theme`}</Button>;
}
