import { useState, useMemo } from "react";
import styles from "@/styles/pages/asks.module.scss";
import Ask from "@/components/Ask";
import content from "@/server/content";
import CreateAskForm from "@/components/CreateAskForm";
import Modal from "@/components/Modal";

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

	const askElements = useMemo(() => {
		return contentArr.reduce((acc, [id, askContent]) => {
			if (showOnlyLikedAsks && !askContent.like) {
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
	}, [showOnlyLikedAsks]);

	return (
		<main className={styles.main}>
			<div className={styles.asks}>{askElements}</div>
			<div className={styles.buttons}>
				<button className={styles.outlined} onClick={toggleLike}>
					{showOnlyLikedAsks ? "Show All Asks" : "Show liked Asks"}
				</button>
				<button className={styles.filled} onClick={handleAskClick}>
					Ask
				</button>
			</div>
			{<Modal content={<CreateAskForm />} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
		</main>
	);
}
