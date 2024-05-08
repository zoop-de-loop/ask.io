import { useEffect, useState } from "react";
import CounterInput from "../CounterInput";

export default function FontSizeCounterInput() {
	const [fontSize, setFontSize] = useState(16);

	useEffect(() => {
		setFontSize(parseInt(JSON.parse(localStorage.getItem("fontSize"))) || 16);
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty("--font-size", `${fontSize}px`);
	}, [fontSize]);

	const increaseFontsize = () => {
		if (fontSize < 20) {
			setFontSize((prev) => {
				const newFontSize:number = prev + 1;
				localStorage.setItem("fontSize", newFontSize.toString());
				return newFontSize;
			});
		}
	};

	const decreaseFontSize = () => {
		if (fontSize > 10) {
			setFontSize((prev) => {
				const newFontSize:number = prev - 1;
				localStorage.setItem("fontSize", (newFontSize).toString());
				return newFontSize;
			});
		}
	};

	return <CounterInput onIncrease={increaseFontsize} onDecrease={decreaseFontSize} value={fontSize} />;
}
