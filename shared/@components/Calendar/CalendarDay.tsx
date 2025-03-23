import React from "react";

type Props = {
	day: string;
};

export default function CalendarDay({ day }: Props) {
	return (
		<div className="p-2 text-center text-sm font-medium text-black bg-white">
			{day}
		</div>
	);
}
