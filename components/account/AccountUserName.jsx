import { useState } from "react";
import styles from "@/styles/components/account/account-user-name.module.scss";

export default function AccountUserName({ defaultUserName }) {
	const [isEditActive, setIsEditActive] = useState(false);
	const [userName, setUserName] = useState(defaultUserName);

	const onEditbuttonClick = () => {
		setIsEditActive((prev) => {
			return !prev;
		});
	};

	const onUserNameChange = (event) => {
		setUserName(event.target.value);
	};

	return (
		<section className={styles["account-user-name"]}>
			{!isEditActive ? (
				<span className={styles["user-name-view"]} title={userName}>
					{userName}
				</span>
			) : (
				<input
					type='text'
					value={userName}
					onChange={onUserNameChange}
					className={styles[`user-name-input-${isEditActive ? "save" : "edit"}`]}
					disabled={!isEditActive}
				/>
			)}

			<button className={styles.filled} onClick={onEditbuttonClick}>
				{isEditActive ? "Save" : "Edit"}
			</button>
		</section>
	);
}
