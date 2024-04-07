import { useState } from "react";
import styles from "@/styles/components/ask.module.scss";
import content from "@/server/content";

export default function Ask({ id, ask, like, anonymous }) {
	const [isLiked, setIsLiked] = useState(like);

	const handleClicked = () => {
		setIsLiked((prev) => {
			content[id]["like"] = !prev;
			return !prev;
		});
	};

	return (
		<article className={styles.ask}>
			<h2>{ask}</h2>
			<img src='/blob.png' alt='blob' />
			<img onClick={handleClicked} src={isLiked ? "/likeActive.png" : "/likeNotActive.png"} alt='like' />
			{!anonymous && (
				<a href={`/account/${id}`}>
					<img src='/lio_img.png' />
				</a>
			)}
		</article>
	);
}
