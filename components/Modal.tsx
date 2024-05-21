import React, { useRef, useEffect, PropsWithChildren } from "react";
import styles from "../styles/components/modal.module.scss";

type Props = {
	isOpen: boolean;
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ children, isOpen, setIsOpen }: PropsWithChildren<Props>) {
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

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Escape") {
			if (setIsOpen) {
				setIsOpen(false);
			}
		}
	};

	if (!isOpen) return;

	return (
		<dialog ref={ref} className={styles.modal} onClick={handleBackgroundClicked} onKeyDown={handleKeyDown}>
			{children}
		</dialog>
	);
}
