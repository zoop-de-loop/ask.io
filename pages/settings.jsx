import styles from "@/styles/pages/settings.module.scss";
import ThemeButton from "@/components/settings/ThemeButton";
import FontSizeCounterInput from "@/components/settings/FontSizeCounterInput";

export default function Settings() {
	return (
		<main id={styles.main}>
			<section>
				<h2>theme - </h2>
				<ThemeButton />
			</section>

			<section>
				<h2>font size - </h2>
				<FontSizeCounterInput />
			</section>
		</main>
	);
}
