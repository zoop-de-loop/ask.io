import styles from "@/styles/pages/settings.module.scss";
import ToggleButton from "@/components/ToggleButton";
import CounterInput from "@/components/CounterInput";

export default function Settings() {
	return (
		<main id={styles.main}>
			<ToggleButton name='theme' value1={"bright"} value2={"dark"} />
			<CounterInput name='font size' defaultValue={16} minValue={10} maxValue={20} />
		</main>
	);
}
