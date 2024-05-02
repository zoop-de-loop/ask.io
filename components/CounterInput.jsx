import { useEffect, useState } from "react";
import styles from "@/styles/components/counter-input.module.scss";

export default function CounterInput({ name, defaultValue, minValue, maxValue }) {
	const [counter, setCounter] = useState(defaultValue);

	useEffect(() => {
		if (localStorage.getItem(name)) {
			setCounter(parseInt(localStorage.getItem(name)));
		} else {
			localStorage[name] = defaultValue;
		}
	}, []);

	const onIncrease = () => {
		if (counter < maxValue) {
			localStorage[name] = counter + 1;
			setCounter((prev) => {
				return prev + 1;
			});
		}
	};

	const onDecrease = () => {
		if (counter > minValue) {
			localStorage[name] = counter - 1;
			setCounter((prev) => {
				return prev - 1;
			});
		}
	};

	return (
		<section className={styles["input-counter"]}>
			<h2>{name} - </h2>
			<div>
				<button onClick={onIncrease}>+</button>
				<p>{counter}</p>
				<button onClick={onDecrease}>-</button>
			</div>
		</section>
	);
}
