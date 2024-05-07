import styles from "@/styles/pages/account.module.scss";
import { useState } from "react";
export default function Account() {
	const daysAlive = 9;
	const [isEditActive, setIsEditActive] = useState(false);
	const [userName, setUserName] = useState("Lio Giladi");
	const [profilePicSrc, setProfilePicSrc] = useState("/lio_img.png");
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

	const onUpload = (event) => {
		try {
			const file = event.target.files[0];
			setProfilePicSrc(URL.createObjectURL(file));
		} catch {}
	};

	return (
		<main id={styles.main}>
			<label for='profilePicInput' className={styles["profile-pic-input"]}>
				<img src={profilePicSrc} alt="user's photo" />
			</label>

			<input type='file' id='profilePicInput' onChange={onUpload} accept='image/png, image/jpg, image/jpeg' />

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
