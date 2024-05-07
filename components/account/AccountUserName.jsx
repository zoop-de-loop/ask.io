import { useState } from "react";
import styles from "@/styles/components/account/account-user-name.module.scss";

export default function AccountUserName() {
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
		<section className={styles["account-user-name"]}>
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
	);
}
