import React, { PropsWithChildren } from "react";
import styles from "../styles/components/button.module.scss";

interface Props extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...rest }: Props) {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	);
}
