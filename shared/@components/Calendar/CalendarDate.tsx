import { classNames } from "@/shared/@utils/classNames";

type Props = {
	date: React.ReactNode | null;
	isNowDate: boolean;
};

export function CalendarDate({ date, isNowDate }: Props) {
	return (
		<div className="border-r border-b p-1 min-h-28 bg-white">
			<div
				className={classNames("w-8 h-8 flex items-center justify-center p-1", [
					isNowDate ? "bg-blue-600 text-white rounded-full" : "text-black",
				])}
			>
				{date}
			</div>
			<div></div>
		</div>
	);
}
