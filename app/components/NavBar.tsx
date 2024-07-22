"use client";
import shortly from "@/public/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Button, Card } from "./global";

export const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-white w-full">
			<Card className="flex items-center gap-6 justify-between md:justify-normal">
				<div>
					<Image alt="page logo" src={shortly} />
				</div>

				<div className="md:w-[90%] relative">
					<LuMenu
						className="md:hidden cursor-pointer text-3xl text-grayish-violet"
						onClick={toggleMenu}
					/>
					{isMenuOpen && (
						<div
							className="  md:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
							onClick={toggleMenu}>
							<div className="text-white bg-dark-violet fixed inset-x-0 top-16 m-auto py-9 px-6 z-50 w-[90%] text-center rounded-lg font-semibold">
								<nav>
									<ul className="flex flex-col gap-6  ">
										<li>
											<Link href="/">Features</Link>
										</li>
										<li>
											<Link href="/">Pricing</Link>
										</li>
										<li>
											<Link href="/">Resources</Link>
										</li>
									</ul>
								</nav>
								<div className=" border-t-small my-8 border-grayish-violet"></div>
								<div className="flex flex-col gap-6 mt-6 ">
									<Link href="/">Login</Link>
									<Button type="button" className="p-4 rounded-full">
										Sign up
									</Button>
								</div>
							</div>
						</div>
					)}

					<div className="hidden md:flex md:items-center md:justify-between text-grayish-violet font-semibold">
						<nav>
							<ul className="flex gap-6">
								<li>
									<Link href="/" className="active:text-black">
										Features
									</Link>
								</li>
								<li>
									<Link href="/" className="active:text-black">
										{" "}
										Pricing
									</Link>
								</li>
								<li>
									<Link href="/" className="active:text-black">
										Resources
									</Link>
								</li>
							</ul>
						</nav>
						<div className="flex gap-6 items-center">
							<Link href="/" className="active:text-black">
								Login
							</Link>
							<Button type="button" className="p-3 rounded-full w-28">
								Sign up
							</Button>
						</div>
					</div>
				</div>
			</Card>
		</header>
	);
};
