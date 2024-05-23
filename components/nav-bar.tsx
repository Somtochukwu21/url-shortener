import Logo from "@/public/svg/logo.svg";
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { Button } from "./button";

export const NavBar = () => {
	return (
		<Navbar shouldHideOnScroll className="py-6" maxWidth="xl">
			<div className="flex space-x-10 items-center">
				<NavbarBrand>
					<Link href="#">
						<div>
							<Image src={Logo} alt="Page Logo" />
						</div>
					</Link>
				</NavbarBrand>

				<NavbarContent className="hidden md:flex gap-5">
					<NavbarItem>
						<Link className="text-grayish-violet font-bold" href="#">
							Features
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link
							href="#"
							className="text-grayish-violet font-bold"
							aria-current="page">
							Pricing
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link className="text-grayish-violet font-bold" href="#">
							Resources
						</Link>
					</NavbarItem>
				</NavbarContent>
			</div>

			<NavbarContent justify="end" className="space-x-7">
				<NavbarItem className="hidden lg:flex">
					<Link
						href="#"
						className="
					text-grayish-violet font-bold
					">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} className="w-28 rounded-full" href="#">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};
