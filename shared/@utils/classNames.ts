export function classNames(className: string, classNameList: string[]) {
	return [className, ...classNameList.flat(Infinity)].join(" ");
}
