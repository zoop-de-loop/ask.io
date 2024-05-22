import styles from "../styles/components/counter-input.module.scss";

type Props = { onIncrease: () => void; onDecrease: () => void; value: number };

export default function CounterInput({ onIncrease, onDecrease, value }: Props) {
	return (
		<div className={styles["input-counter"]}>
			<button
				onClick={() => {
					onIncrease();
				}}>
				+
			</button>
			<p>{value}</p>
			<button onClick={() => onDecrease()}>-</button>
		</div>
	);
}
