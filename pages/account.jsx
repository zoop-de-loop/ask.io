import styles from "@/styles/pages/account.module.scss";
import { useState } from "react";
export default function Account() {
	const daysAlive = 9;
	const [isEditActive, setIsEditActive] = useState(false);
	const [userName, setUserName] = useState("Lio Giladi");
	const [changingUserName, setChangingUsername] = useState(userName);

	const onEditbuttonClick = () => {
		setIsEditActive((prev) => {
			if (prev === true) {
				setUserName(changingUserName);
			}

			return !prev;
		});
	};

	const onUserNameChange = (event) => {
		setChangingUsername(event.target.value);
	};

	return (
		<main id={styles.main}>
			<label for='profilePicInput' className={styles["profile-pic-input"]}>
				<img src='/lio_img.png' alt="user's photo" />
			</label>

			<input type='file' id='profilePicInput' />

			<section>
				<input
					type='text'
					value={changingUserName}
					onChange={onUserNameChange}
					className={styles[`user-name-input-${isEditActive ? "save" : "edit"}`]}
					disabled={!isEditActive}
				/>
				<button className={styles.filled} onClick={onEditbuttonClick}>
					{isEditActive ? "Save" : "Edit"}
				</button>
			</section>

			<p>{`Alive for ${daysAlive} days`}</p>
		</main>
	);
}
