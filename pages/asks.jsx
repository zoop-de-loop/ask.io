import { useState } from "react";
import styles from "@/styles/pages/asks.module.scss";
import Ask from "@/components/Ask";
import content from "@/server/content";
import CreateAskForm from "@/components/CreateAskForm";

export default function Asks() {
	const contentArr = Object.entries(content);
	const [showOnlyLikedAsks, setShowOnlyLikedAsks] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAskClick = () => {
		setIsModalOpen((prev) => !prev);
	};

	const toggleLike = () => {
		setShowOnlyLikedAsks((prev) => !prev);
	};

	const askElements = contentArr.reduce((acc, [id, askContent]) => {
		if (showOnlyLikedAsks && askContent.like !== true) {
		} else {
			acc.push(
				<Ask
					key={id}
					id={id}
					ask={askContent.ask}
					isLiked={askContent.like}
					isAnonymous={askContent.anonymous}
					userId={askContent.userId}
				/>
			);
		}
		return acc;
	}, []);

	return (
		<main>
			<div className={styles["asks-and-buttons"]}>
				<div className={styles.asks}>{askElements}</div>
				<div className={styles.buttons}>
					<button onClick={toggleLike}>{showOnlyLikedAsks ? "Show All Asks" : "Show liked Asks"}</button>
					<button onClick={handleAskClick}>Ask</button>
				</div>
			</div>
			{isModalOpen && <CreateAskForm setAskFormActive={setIsModalOpen} />}
		</main>
	);
}
