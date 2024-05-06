import styles from "@/styles/pages/settings.module.scss";
import ThemeToggleButton from "@/components/settings/ThemeToggleButton";
import FontSizeCounterInput from "@/components/settings/FontSizeCounterInput";

export default function Settings() {
	return (
		<main id={styles.main}>
			<section>
				<h2>theme - </h2>
				<ThemeToggleButton />
			</section>

			<section>
				<h2>font size - </h2>
				<FontSizeCounterInput />
			</section>
		</main>
	);
}
