import styles from "@/styles/components/setter.module.scss";

export default function Setter({ header, changer }) {
	return (
		<section className={styles.setter}>
			<h2>{header} - </h2>
			{changer}
		</section>
	);
}
