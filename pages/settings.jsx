import styles from "@/styles/pages/settings.module.scss";
import Setter from "@/components/Setter";
import ThemeChanger from "@/components/Changers/themeChanger";
import FontSizeChanger from "@/components/Changers/FontSizeChanger";

export default function Settings() {
	return (
		<main id={styles.main}>
			<Setter header='theme' changer={<ThemeChanger />} />
			<Setter header='font size' changer={<FontSizeChanger />} />
		</main>
	);
}
