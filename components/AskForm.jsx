import { useState } from "react";
import styles from "@/styles/components/ask-form.module.scss";

export default function AskForm({ setAskFormActive }) {
	const [isAnonymous, setIsAnonymous] = useState(false);

	const handleCheckboxClicked = () => {
		setIsAnonymous((prev) => {
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
				<fieldset>
					<input type='text' placeholder='Type here...' />
					<label htmlFor='anonymous'>
						<input type='checkbox' id='anonymous' onClick={handleCheckboxClicked} />
						<span>{isAnonymous && "✓"}</span>
						Anonymous
					</label>
				</fieldset>
				<input type='submit' value='Sure' />
			</form>
		</div>
	);
}
