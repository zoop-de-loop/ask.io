import { useContext } from "react";
import PageFeatures from "@/server/context";
import ToggleButton from "@/components/ToggleButton";
import styles from "@/styles/components/theme-toggle-button.module.scss";

export default function ThemeToggleButton() {
	const theme = useContext(PageFeatures)["theme"];
	const setTheme = useContext(PageFeatures)["setTheme"];
	const onToggle = () => {
		setTheme((prev) => {
			const newValue = prev === "bright" ? "dark" : "bright";
			localStorage.setItem("theme", newValue);
			return newValue;
		});
	};
	return (
		<section className={styles["toggle-theme"]}>
			<h2>theme - </h2>
			<ToggleButton onToggle={onToggle}>{`${theme} theme`}</ToggleButton>
		</section>
	);
}
