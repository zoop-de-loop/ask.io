import React, { useRef, useEffect, PropsWithChildren } from "react";
import styles from "../styles/components/modal.module.scss";

interface Props {
	isOpen: boolean;
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Modal = ({ children, isOpen, setIsOpen }: PropsWithChildren<Props>) => {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isOpen) {
			ref.current?.showModal();
		}
	}, [isOpen]);

	const handleBackgroundClicked = (event: React.MouseEvent) => {
		if (event.target === ref.current) {
			if (setIsOpen) {
				setIsOpen(false);
			}
		}
	};

	const handleButtonClicked = (event: React.KeyboardEvent) => {
		if (event.key === "Escape") {
			if (setIsOpen) {
				setIsOpen(false);
			}
		}
	};

	if (!isOpen) return;

	return (
		<dialog ref={ref} className={styles["modal"]} onClick={handleBackgroundClicked} onKeyDown={handleButtonClicked}>
			{children}
		</dialog>
	);
};

export default Modal;
