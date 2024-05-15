import React, { useRef, useEffect } from "react";
import styles from "../styles/components/modal.module.scss";

interface Props {
	children?: React.ReactElement;
	isOpen: any;
	setIsOpen: any;
  }

const Modal : React.FC<Props>  = ({ children, isOpen, setIsOpen }:Props) => {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isOpen) {
			if(ref.current){
				ref.current.showModal();
			}
		}

	}, [isOpen]);

	const handleBackgroundClicked = (event: React.MouseEvent) => {
		if (event.target === ref.current) {
			setIsOpen(false);
		}
	};

	const handleButtonClicked = (event: React.KeyboardEvent) => {
		if (event.key === "Escape") {
			setIsOpen(false);
		}
	};

	if (!isOpen) return;

	return (
		<dialog ref={ref} className={styles["modal"]} onClick={handleBackgroundClicked} onKeyDown={handleButtonClicked}>
			{children}
		</dialog>
	);
}

export default Modal;