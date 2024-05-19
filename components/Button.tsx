import React, { PropsWithChildren } from "react";
import styles from "../styles/components/button.module.scss";

interface Props {
	onClick(): void;
  }

const Button= ({ children, ...rest }:PropsWithChildren<Props>) => {
	return (
		<button className={styles["button"]} {...rest}>
			{children}
		</button>
	);
}

export default Button;
