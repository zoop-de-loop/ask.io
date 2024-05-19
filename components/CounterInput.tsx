import styles from "../styles/components/counter-input.module.scss";

type OnCounterChange = () => void;


export default function CounterInput({ onIncrease, onDecrease, value }:{ onIncrease:OnCounterChange, onDecrease: OnCounterChange, value:number}) {
	return (
		<div className={styles["input-counter"]}>
			<button onClick={()=>{onIncrease()}}>+</button>
			<p>{value}</p>
			<button onClick={()=>onDecrease()}>-</button>
		</div>
	);
}
