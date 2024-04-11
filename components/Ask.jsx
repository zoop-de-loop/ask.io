import { useState } from "react";
import styles from "@/styles/components/ask.module.scss";
import asks from "@/server/asks";
import users from "@/server/users";

export default function Ask({ id, content, isLiked, isAnonymous, userId }) {
	const [isCurrentlyLiked, setIsCurrentlyLiked] = useState(isLiked);

	const toggleLike = () => {
		setIsCurrentlyLiked((prev) => {
			asks[id].like = !prev;
			return !prev;
		});
	};

	return (
		<article className={styles.ask}>
			<h2>{content}</h2>
			<img className={styles["speech-bubble"]} src='/speechBubble.png' alt='speech bubble' />
			<img
				className={styles["like-heart"]}
				onClick={toggleLike}
				src={isCurrentlyLiked ? "/likeActive.png" : "/likeNotActive.png"}
				alt='like'
			/>
			{!isAnonymous && (
				<a href={`/account/${userId}`}>
					<img src={users[userId].photo} alt="user's photo" />
				</a>
			)}
		</article>
	);
}
