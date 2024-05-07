import styles from "@/styles/pages/account.module.scss";
export default function Account() {
	const daysAlive = 9;

	return (
		<main id={styles.main}>
			<label for='profilePicInput' className={styles["profile-pic-input"]}>
				<img src='/lio_img.png' alt="user's photo" />{" "}
			</label>

			<input type='file' id='profilePicInput' />

			<section>
				<input type='text' value={"Lio Giladi"} disabled />
				<button className={styles.filled}>{"Edit"}</button>
			</section>

			<p>{`Alive for ${daysAlive} days`}</p>
		</main>
	);
}
