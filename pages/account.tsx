import { useState } from "react";
import styles from "../styles/pages/account.module.scss";
import AccountUserName from "../components/account/AccountUserName";

export default function Account() {
	const daysAlive = 9;
	const [profilePicSrc, setProfilePicSrc] = useState("/lio_img.png");

	const onUpload = (event) => {
		const file = event.target.files[0];
		setProfilePicSrc(URL.createObjectURL(file));
	};

	return (
		<main id={styles["main"]}>
			<label htmlFor='profilePicInput' className={styles["profile-pic-input"]}>
				<img src={profilePicSrc} alt="user's photo" />
				<input type='file' id='profilePicInput' onChange={onUpload} accept='image/png, image/jpg, image/jpeg' />
			</label>
			<AccountUserName defaultUserName={"Lio Giladi"} />
			<p className={styles["days-alive"]}>{`Alive for ${daysAlive} days`}</p>
		</main>
	);
}