import { useRef, useEffect } from "react";
import styles from "@/styles/components/modal.module.scss";

export default function Modal({ content, isModalOpen, setIsModalOpen }) {
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
		<dialog className={styles.modal} onClick={handleBackgroundClicked} ref={modalRef} onKeyDown={handleButtonClicked}>
			{content}
		</dialog>
	);
}
