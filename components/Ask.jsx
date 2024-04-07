import { useState } from "react";
import styles from "@/styles/components/ask.module.scss";
import content from "@/server/content";

export default function Ask({ id, ask, isLiked, isAnonymous }) {
	const [isCurrentlyLiked, setIsCurrentlyLiked] = useState(isLiked);

	const handleClicked = () => {
		setIsCurrentlyLiked((prev) => {
			content[id]["like"] = !prev;
			return !prev;
		});
	};

	return (
		<article className={styles.ask}>
			<h2>{ask}</h2>
			<img src='/blob.png' alt='blob' />
			<img onClick={handleClicked} src={isCurrentlyLiked ? "/likeActive.png" : "/likeNotActive.png"} alt='like' />
			{!isAnonymous && (
				<a href={`/account/${id}`}>
					<img src='/lio_img.png' />
				</a>
			)}
		</article>
	);
}
