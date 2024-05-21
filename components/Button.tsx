import React, { PropsWithChildren } from "react";
import styles from "../styles/components/button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: PropsWithChildren<Props>) {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	);
}
