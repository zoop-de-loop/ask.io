import React from "react";
import styles from "../styles/components/button.module.scss";

interface Props {
	children: string;
	onClick(): void;
  }

const Button : React.FC<Props> = ({ children, ...rest }:Props) => {
	return (
		<button className={styles["button"]} {...rest}>
			{children}
		</button>
	);
}

export default Button;
