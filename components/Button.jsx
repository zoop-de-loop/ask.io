import styles from "@/styles/components/button.module.scss";

export default function Button({ children, ...rest }) {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	);
}
