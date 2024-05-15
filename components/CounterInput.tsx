import styles from "../styles/components/counter-input.module.scss";

export default function CounterInput({ onIncrease, onDecrease, value }:{ onIncrease:Function, onDecrease: Function, value:number}) {
	return (
		<div className={styles["input-counter"]}>
			<button onClick={()=>{onIncrease()}}>+</button>
			<p>{value}</p>
			<button onClick={()=>onDecrease()}>-</button>
		</div>
	);
}
