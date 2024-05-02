import { useEffect, useState } from "react";

import styles from "@/styles/components/toggle-button.module.scss";

export default function ThemeChanger({ name, value1, value2 }) {
	const [currentValue, setCurrentValue] = useState(value1);

	useEffect(() => {
		if (localStorage.getItem(name)) {
			setCurrentValue(localStorage.getItem(name));
		} else {
			localStorage[name] = value1;
		}
	}, []);

	const toggleVariables = () => {
		setCurrentValue((prev) => {
			const newValue = prev === value1 ? value2 : value1;
			localStorage[name] = newValue;
			return newValue;
		});
	};

	return (
		<section className={styles["toggle-button"]}>
			<h2>{name} - </h2>
			<button onClick={toggleVariables}>{`${currentValue} ${name}`}</button>
		</section>
	);
}
