import { useRef, useEffect } from "react";
import styles from "@/styles/components/modal.module.scss";

export default function Modal({ children, isModalOpen, setIsModalOpen }) {
	const modalRef = useRef(null);

	useEffect(() => {
		if (isModalOpen) {
			modalRef.current.showModal();
		}
	}, [isModalOpen]);

	const handleBackgroundClicked = (event) => {
		if (event.target === modalRef.current) {
			setIsModalOpen(false);
		}
	};

	const handleButtonClicked = (event) => {
		if (event.key === "Escape") {
			setIsModalOpen(false);
		}
	};

	if (!isModalOpen) {
		return;
	}

	return (
		<dialog ref={modalRef} className={styles.modal} onClick={handleBackgroundClicked} onKeyDown={handleButtonClicked}>
			{children}
		</dialog>
	);
}
