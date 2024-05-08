import { useRef, useEffect } from "react";
import styles from "../styles/components/modal.module.scss";

interface Props {
	children?: React.ReactElement;
	isOpen: any;
	setIsOpen: any;
  }

const Modal : React.FC<Props>  = ({ children, isOpen, setIsOpen }:Props) => {
	const ref = useRef(null);

	useEffect(() => {
		if (isOpen) {
			ref.current.showModal();
		}
	}, [isOpen]);

	const handleBackgroundClicked = (event) => {
		if (event.target === ref.current) {
			setIsOpen(false);
		}
	};

	const handleButtonClicked = (event) => {
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