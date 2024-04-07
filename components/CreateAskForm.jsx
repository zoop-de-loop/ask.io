import { useState } from "react";
import styles from "@/styles/components/create-ask-form.module.scss";

export default function CreateAskForm({ setAskFormActive }) {
	const [isAnonymous, setIsAnonymous] = useState(false);

	const handleAnonymousChange = () => {
		setIsAnonymous((prev) => !prev);
	};

	const closeModal = () => {
		setAskFormActive(false);
	};

	return (
		<div className={styles["form-pop-up"]}>
			<div className={styles.background} onClick={closeModal} />
			<form>
				<h2>Ask whatever!</h2>
				<fieldset>
					<input type='text' placeholder='Type here...' />
					<label htmlFor='anonymous'>
						<input type='checkbox' id='anonymous' onClick={handleAnonymousChange} />
						<span className={styles.checkbox}>{isAnonymous && "✓"}</span>
						Anonymous
					</label>
				</fieldset>
				<input type='submit' value='Sure' />
			</form>
		</div>
	);
}
