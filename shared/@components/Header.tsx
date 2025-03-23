import Link from "next/link";
import React from "react";

export function Header() {
	return (
		<header className="flex justify-between items-center p-5">
			<h1>샤드 CN 싫어</h1>
			<nav className="flex gap-4">
				<Link href="/">Home</Link>
				<Link href="/">Login</Link>
				<Link href="/myPage">MyPage</Link>
			</nav>
		</header>
	);
}
