"use client";
import { useState } from "react";

import CalendarDay from "./CalendarDay";
import { CalendarDate } from "./CalendarDate";
import { CalendarHeader } from "./CalendarHeader";

import {
	calculateMonth,
	getWeeksAtMonth,
	isSameDate,
} from "@/shared/@utils/dateUtil";

import { WEEK_DAYS } from "@/shared/@constants";

export function Calendar() {
	const now = new Date();
	const [selectedDate, setSelectedDate] = useState<Date>(now);
	const weeks = getWeeksAtMonth(selectedDate);

	const onClickPrevMonthButton = () => {
		setSelectedDate(calculateMonth(selectedDate, -1));
	};

	const onClickNextMonthButton = () => {
		setSelectedDate(calculateMonth(selectedDate, 1));
	};

	return (
		<div className="w-full h-screen bg-white">
			<CalendarHeader
				selectedDate={selectedDate}
				onClickPrevMonthButton={onClickPrevMonthButton}
				onClickNextMonthButton={onClickNextMonthButton}
			/>
			<div className="grid grid-cols-7 border-y">
				{WEEK_DAYS.map((day) => {
					return <CalendarDay key={day} day={day} />;
				})}
			</div>
			<div className="grid grid-cols-7 h-full">
				{weeks.flat().map((date, index) => {
					const selectedYear = selectedDate.getFullYear();
					const selectedMonth = selectedDate.getMonth();
					return (
						<CalendarDate
							key={index}
							date={date}
							isNowDate={isSameDate(selectedYear, selectedMonth, date)}
						/>
					);
				})}
			</div>
		</div>
	);
}
