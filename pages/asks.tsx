import { useState, useMemo } from "react";
import styles from "../styles/pages/asks.module.scss";
import content from "../server/asks";
import Ask from "../components/Ask";
import CreateAskForm from "../components/CreateAskForm";
import Modal from "../components/Modal";

export default function Asks() {
	const [showOnlyLikedAsks, setShowOnlyLikedAsks] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAskClick = () => {
		setIsModalOpen((prev) => !prev);
	};

	const toggleLike = () => {
		setShowOnlyLikedAsks((prev) => !prev);
	};

	const askElements = useMemo(() => {
		return Object.entries(content).reduce((acc, [id, ask]) => {
			if (!showOnlyLikedAsks || (showOnlyLikedAsks && ask["isLiked"])) {
				acc.push(
					<Ask key={id} id={id} content={ask["content"]} isLiked={ask["isLiked"]} isAnonymous={ask["isAnonymous"]} userId={ask["userId"]} />

				);
			}

			return acc;
		}, []);
	}, [showOnlyLikedAsks]);

	return (
		<main className={styles["main"]}>
			<div className={styles["asks"]}>{askElements}</div>
			<div className={styles["buttons"]}>
				<button className={styles["outlined"]} onClick={toggleLike}>
					{showOnlyLikedAsks ? "Show All Asks" : "Show liked Asks"}
				</button>
				<button className={styles["filled"]} onClick={handleAskClick}>
					Ask
				</button>
			</div>
			<Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
				<CreateAskForm />
			</Modal>
		</main>
	);
}
