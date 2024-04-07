import { useState } from "react";
import styles from "@/styles/pages/asks.module.scss";
import Ask from "@/components/Ask";
import content from "@/server/content";
import CreateAskForm from "@/components/CreateAskForm";

export default function Asks() {
	const contentArr = Object.entries(content);
	const [likedActive, setLikedActive] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAskClick = () => {
		setIsModalOpen((prev) => {
			return !prev;
		});
	};

	const toggleLike = () => {
		setLikedActive((prev) => {
			return !prev;
		});
	};
	let showAsk = [];

	if (likedActive) {
		const likedAsks = contentArr.filter((dataArr) => dataArr[1].like === true);
		showAsk = likedAsks.map((dataArr) => {
			return (
				<Ask
					key={dataArr[0]}
					id={dataArr[0]}
					ask={dataArr[1].ask}
					isLiked={dataArr[1].like}
					isAnonymous={dataArr[1].anonymous}
					userId={dataArr[1].userId}
				/>
			);
		});
	} else {
		showAsk = contentArr.map((dataArr) => {
			return (
				<Ask
					key={dataArr[0]}
					id={dataArr[0]}
					ask={dataArr[1].ask}
					isLiked={dataArr[1].like}
					isAnonymous={dataArr[1].anonymous}
					userId={dataArr[1].userId}
				/>
			);
		});
	}

	return (
		<main>
			<div className={styles["asks-and-buttons"]}>
				<div className={styles.asks}>{showAsk}</div>
				<div className={styles.buttons}>
					<button onClick={toggleLike}>{likedActive ? "Show All Asks" : "Show liked Asks"}</button>
					<button onClick={handleAskClick}>Ask</button>
				</div>
			</div>
			{isModalOpen && <CreateAskForm setAskFormActive={setIsModalOpen} />}
		</main>
	);
}
