import styles from "@/styles/components/counter-input.module.scss";

export default function CounterInput({ onIncrease, onDecrease, children }) {
	return (
		<div className={styles["input-counter"]}>
			<button onClick={onIncrease}>+</button>
			<p>{children}</p>
			<button onClick={onDecrease}>-</button>
		</div>
	);
}
