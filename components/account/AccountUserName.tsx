
import { useState } from "react";
import styles from '../../styles/components/account/account-user-name.module.scss'

export default function AccountUserName({ defaultUserName }) {
	const [isEditing, setIsEditing] = useState(false);
	const [userName, setUserName] = useState(defaultUserName);

	return (
		<section className={styles["account-user-name"]}>
			{isEditing ? (
				<input type='text' value={userName} onChange={(event) => setUserName(event.target.value)} />
			) : (
				<span title={userName}>{userName}</span>
			)}

			<button className={styles["filled"]} onClick={() => setIsEditing((prev) => !prev)}>
				{isEditing ? "Save" : "Edit"}
			</button>
		</section>
	);
}
