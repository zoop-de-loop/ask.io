import { useRef, useEffect } from "react";
import styles from "@/styles/components/modal.module.scss";

export default function Modal({ content, isModalOpen, setIsModalOpen }) {
	const modalRef = useRef(null);

	useEffect(() => {
		if (isModalOpen) {
			modalRef.current.showModal();
		}
	}, [isModalOpen]);

	const backgroundClicked = (event) => {
		if (event.target === modalRef.current) {
			setIsModalOpen(false);
		}
	};

	const buttonClicked = (event) => {
		if (event.key === "Escape") {
			setIsModalOpen(false);
		}
	};

	if (!isModalOpen) {
		return;
	}

	return (
		<dialog className={styles.modal} onClick={backgroundClicked} ref={modalRef} onKeyDown={buttonClicked}>
			{content}
		</dialog>
	);
}
