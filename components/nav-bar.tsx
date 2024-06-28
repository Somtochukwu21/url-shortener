"use client";
import PageLogo from "@/public/svg/logo.svg";
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { Button } from "./button";

export function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	interface MenuItem {
		title: string;
		href: string;
		id: number;
	}

	const menuItems: MenuItem[] = [
		{ title: "Features", href: "#", id: 1 },
		{ href: "#", id: 2, title: "Pricing" },
		{ href: "#", id: 3, title: "Integrations" },
	];
	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			shouldHideOnScroll
			className="w-full md:py-6 "
			maxWidth="xl">
			<div className="flex gap-9 items-center">
				<NavbarContent>
					<NavbarBrand>
						<Link href="#">
							<div>
								<Image
									src={PageLogo}
									alt="Page Logo"
									className="h-full w-full"
								/>
							</div>
						</Link>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent>
					<div className="hidden md:flex gap-6">
						{menuItems.map((menuItem) => (
							<NavbarItem key={menuItem.id}>
								<Link
									href={menuItem.href}
									className="text-grayish-violet font-bold">
									{menuItem.title}
								</Link>
							</NavbarItem>
						))}
					</div>
				</NavbarContent>
			</div>
			<NavbarContent className="hidden md:flex  items-center  " justify="end">
				<NavbarItem className="md:mr-6">
					<Link href="#" className="text-grayish-violet font-bold">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} href="#" radius="full">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className=" md:hidden" justify="end">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							className="w-full"
							href="#"
							size="lg">
							{item.title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}

/*"use client";
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import Image from "next/image.js";
import { useState } from "react";
import { Button } from "./button";

export const NavBar = () => {
	const [isTrue, setIsTrue] = useState(true);
	const toggleMenu = () => {
		setIsTrue((prevIsTrue) => !prevIsTrue);
	};


	return (
		<Navbar shouldHideOnScroll className="w-full py-6 " maxWidth="xl">
			<div className="flex w-full justify-between items-center md:space-x-10 h-full">
				<div>
					<NavbarBrand>
						<Link href="#">
							<div>
								<Image
									src={PageLogo}
									alt="Page Logo"
									className="h-full w-full"
								/>
							</div>
						</Link>
					</NavbarBrand>
				</div>

				<div
					className={`md:hidden inline-block cursor-pointer [&>*]:w-[35px] [&>*]:h-[5px] [&>*]:bg-gray [&>*]:transition-[0.4s] [&>*]:mx-0 [&>*]:my-1.5 ${
						isTrue && "change"
					}`}
					onClick={toggleMenu}>
					<div
						className={`${
							isTrue && "translate-x-0 translate-y-[11px] -rotate-45"
						}`}
					/>
					<div className={`${isTrue && " opacity-0"}`} />
					<div
						className={`${
							isTrue && "translate-x-0 translate-y-[-11px] rotate-45"
						}`}
					/>
				</div>

				<div className="relative w-full flex">
					<div className="fixed w-full top-0 right-0 md:static bg-dark-violet md:bg-transparent">
						<div className="w-full md:flex  items-center justify-between">
							<div>
								<NavbarContent>
									<div className="w-full text-center md:flex  gap-4 flex-row">
										{menuItems.map((menuItem) => (
											<NavbarItem key={menuItem.id}>
												<Link
													href={menuItem.href}
													className="text-grayish-violet font-bold">
													{menuItem.title}
												</Link>
											</NavbarItem>
										))}
									</div>
								</NavbarContent>
							</div>

							<div>
								<NavbarContent className="md:space-x-7 md:flex-row flex flex-col">
									<NavbarItem>
										<Link href="#" className="text-grayish-violet font-bold	">
											Login
										</Link>
									</NavbarItem>
									<NavbarItem>
										<Button as={Link} className="w-28 rounded-full" href="#">
											Sign Up
										</Button>
									</NavbarItem>
								</NavbarContent>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Navbar>
	);
};
*/
/*import Logo from "@/public/svg/logo.svg";
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { Button } from "./button";

export const NavBar = () => {
 
	return (

				</NavbarBrand>
				<NavbarContent className="md:hidden"  justify="end">
					<NavbarMenuToggle />
				</NavbarContent>

			</div>

	
			</NavbarContent>

			<NavbarMenu >  
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? "warning"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							href="#"
							size="lg">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};
*/
