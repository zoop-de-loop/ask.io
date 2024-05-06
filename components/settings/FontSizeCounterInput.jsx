import { useEffect, useState } from "react";
import CounterInput from "@/components/CounterInput";

export default function FontSizeCounterInput() {
	const [fontSize, setFontSize] = useState(16);

	useEffect(() => {
		setFontSize(parseInt(localStorage.getItem("fontSize")) || 16);
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty("--font-size", `${fontSize}px`);
	}, [fontSize]);

	const increaseFontsize = () => {
		if (fontSize < 20) {
			setFontSize((prev) => {
				const newFontSize = prev + 1;
				localStorage.setItem("fontSize", newFontSize);
				return newFontSize;
			});
		}
	};

	const decreaseFontSize = () => {
		if (fontSize > 10) {
			setFontSize((prev) => {
				const newFontSize = prev - 1;
				localStorage.setItem("fontSize", newFontSize);
				return newFontSize;
			});
		}
	};

	return <CounterInput onIncrease={increaseFontsize} onDecrease={decreaseFontSize} value={fontSize} />;
}
