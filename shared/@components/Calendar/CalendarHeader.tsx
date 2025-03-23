import { formatMonth } from "@/shared/@utils/dateUtil";
import React from "react";

type Props = {
	selectedDate: Date;
	onClickPrevMonthButton: () => void;
	onClickNextMonthButton: () => void;
};

export function CalendarHeader({
	selectedDate,
	onClickPrevMonthButton,
	onClickNextMonthButton,
}: Props) {
	return (
		<div className="w-full flex items-center justify-center text-black gap-10 p-5">
			<button className="cursor-pointer" onClick={onClickPrevMonthButton}>
				이전
			</button>
			<h2>{formatMonth(selectedDate)}</h2>
			<button className="cursor-pointer" onClick={onClickNextMonthButton}>
				다음
			</button>
		</div>
	);
}
