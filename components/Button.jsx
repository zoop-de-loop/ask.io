import styles from "@/styles/components/toggle-button.module.scss";

export default function Button({ onToggle, children }) {
	return (
		<button className={styles["toggle-button"]} onClick={onToggle}>
			{children}
		</button>
	);
}
