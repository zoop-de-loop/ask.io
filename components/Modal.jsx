import { useRef } from "react";
import styles from "@/styles/components/modal.module.scss";

export default function Modal({ content, isModalOpen, setIsModalOpen }) {
	const modalRef = useRef(null);

	const backgroundClicked = (event) => {
		if (event.target === modalRef.current) {
			setIsModalOpen(false);
		}
	};

	if (!isModalOpen) return;

	return (
		<div className={styles.modal} onClick={backgroundClicked} ref={modalRef}>
			{content}
		</div>
	);
}
