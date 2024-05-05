import styles from "@/styles/components/toggle-button.module.scss";

export default function ToggleButton({ onToggle, children }) {
	return (
		<button className={styles["toggle-button"]} onClick={onToggle}>
			{children}
		</button>
	);
}
