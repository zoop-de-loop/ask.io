import { useState } from "react";
import styles from "@/styles/components/ask.module.scss";
import content from "@/server/content";
import users from "@/server/users";

export default function Ask({ id, ask, isLiked, isAnonymous, userId }) {
	const [isCurrentlyLiked, setIsCurrentlyLiked] = useState(isLiked);

	const toggleLike = () => {
		setIsCurrentlyLiked((prev) => {
			content[id].like = !prev;
			return !prev;
		});
	};

	return (
		<article className={styles.ask}>
			<h2>{ask}</h2>
			<img src='/speechBubble.png' alt='speech bubble' />
			<img onClick={toggleLike} src={isCurrentlyLiked ? "/likeActive.png" : "/likeNotActive.png"} alt='like' />
			{!isAnonymous && (
				<a href={`/account/${userId}`}>
					<img src={users[userId].photo} alt="user's photo" />
				</a>
			)}
		</article>
	);
}
