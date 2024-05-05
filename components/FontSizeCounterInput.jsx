import { useContext } from "react";
import PageFeatures from "@/server/context";
import styles from "@/styles/components/font-size-counter-input.module.scss";
import CounterInput from "@/components/CounterInput";
export default function FontSizeCounterInput() {
	const fontSize = parseInt(useContext(PageFeatures)["fontSize"]);
	const setFontSize = useContext(PageFeatures)["setFontSize"];

	const onIncrease = () => {
		if (fontSize < 20) {
			setFontSize((prev) => {
				const newFontSize = parseInt(prev) + 1;
				localStorage.setItem("fontSize", newFontSize);
				return newFontSize;
			});
		}
	};

	const onDecrease = () => {
		if (fontSize > 10) {
			setFontSize((prev) => {
				const newFontSize = parseInt(prev) - 1;
				localStorage.setItem("fontSize", newFontSize);
				return newFontSize;
			});
		}
	};

	return (
		<section className={styles["font-size-counter"]}>
			<h2>font size - </h2>
			<CounterInput onIncrease={onIncrease} onDecrease={onDecrease}>
				{fontSize}
			</CounterInput>
		</section>
	);
}
