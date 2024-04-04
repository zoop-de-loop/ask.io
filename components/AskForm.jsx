import styles from "@/styles/components/ask-form.module.scss";
import React, { useState } from "react";

export default function AskForm({ setAskFormActive }) {
	const [isMarked, setIsMarked] = useState(false);

	const handleCheckboxClicked = () => {
		setIsMarked((prev) => {
			return !prev;
		});
	};

	const handleBackgroundClicked = () => {
		setAskFormActive(false);
	};

	return (
		<div className={styles["form-pop-up"]}>
			<div className={styles.background} onClick={handleBackgroundClicked} />
			<form className={styles["ask-form"]}>
				<h2>Ask whatever!</h2>
				<div className={styles["user-information"]}>
					<input type='text' placeholder='Type here...' />
					<label htmlFor='anonymous'>
						<input type='checkbox' name='anonymous' id='anonymous' onClick={handleCheckboxClicked} />
						<span>{isMarked ? "✓" : null}</span>
						<span>Anonymous</span>
					</label>
				</div>
				<input type='submit' value='Sure' />
			</form>
		</div>
	);
}
