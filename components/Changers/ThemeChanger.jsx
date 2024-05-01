import styles from "@/styles/components/changers/theme-changer.module.scss";

export default function ThemeChanger({ theme, setTheme }) {
	const updateThemeVariables = () => {
		setTheme((prev) => {
			if (prev === "bright") {
				localStorage["theme"] = "dark";
				return "dark";
			} else {
				localStorage["theme"] = "bright";
				return "bright";
			}
		});
	};

	return (
		<button className={styles["theme-changer"]} onClick={updateThemeVariables}>
			{theme} THEME
		</button>
	);
}
