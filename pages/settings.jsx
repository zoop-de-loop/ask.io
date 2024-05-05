import styles from "@/styles/pages/settings.module.scss";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import FontSizeCounterInput from "@/components/FontSizeCounterInput";

export default function Settings() {
	return (
		<main id={styles.main}>
			<ThemeToggleButton />
			<FontSizeCounterInput />
		</main>
	);
}
