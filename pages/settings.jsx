import styles from "@/styles/pages/settings.module.scss";
import Setter from "@/components/Setter";
import ThemeChanger from "@/components/Changers/themeChanger";
import FontSizeChanger from "@/components/Changers/FontSizeChanger";

export default function Settings({ fontSize, setFontSize, theme, setTheme }) {
	return (
		<main id={styles.main}>
			<Setter header='theme' changer={<ThemeChanger theme={theme} setTheme={setTheme} />} />
			<Setter header='font size' changer={<FontSizeChanger fontSize={fontSize} setFontSize={setFontSize} />} />
		</main>
	);
}
