import styles from "@/styles/components/ask.module.scss";

export default function Ask({ ask, like, anonymous }) {
	return (
		<article className={styles.ask}>
			<h2>{ask}</h2>
			<img src='/blob.png' alt='blob' />
			<img src={like ? "/likeActive.png" : "/likeNotActive.png"} alt='like' />
			{anonymous && <img src='/lio_img.png' />}
		</article>
	);
}
