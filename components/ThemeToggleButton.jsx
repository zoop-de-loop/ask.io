import { useContext } from "react";
import styles from "@/styles/components/theme-toggle-button.module.scss";
import PageFeatures from "@/server/context";
import ToggleButton from "@/components/ToggleButton";

export default function ThemeToggleButton() {
	const theme = useContext(PageFeatures)["theme"];
	const setTheme = useContext(PageFeatures)["setTheme"];
	const ToggleTheme = () => {
		setTheme((prev) => {
			const newValue = prev === "bright" ? "dark" : "bright";
			localStorage.setItem("theme", newValue);
			return newValue;
		});
	};
	return (
		<section className={styles["toggle-theme"]}>
			<h2>theme - </h2>
			<ToggleButton onToggle={ToggleTheme}>{`${theme} theme`}</ToggleButton>
		</section>
	);
}
