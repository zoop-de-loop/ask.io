import styles from "@/styles/components/ask.module.scss";
import React, { useState } from "react";

export default function Ask({ key, ask, like, anonymous }) {
	const [isLiked, setIsLike] = useState(like);

	const handleClicked = () => {
		setIsLike((prev) => !prev);
	};

	return (
		<article className={styles.ask}>
			<h2>{ask}</h2>
			<img src='/blob.png' alt='blob' />
			<img onClick={handleClicked} src={isLiked ? "/likeActive.png" : "/likeNotActive.png"} alt='like' />
			{!anonymous && (
				<a href={`/account/${key}`}>
					<img src='/lio_img.png' />
				</a>
			)}
		</article>
	);
}
