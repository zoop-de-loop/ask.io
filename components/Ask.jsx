import { useState } from "react";
import styles from "@/styles/components/ask.module.scss";
import asksData from "@/server/asksData";

export default function Ask({ id, ask, like, anonymous }) {
	const [isLiked, setIsLike] = useState(like);

	const handleClicked = () => {
		setIsLike((prev) => {
			asksData[id]["like"] = !prev;
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
