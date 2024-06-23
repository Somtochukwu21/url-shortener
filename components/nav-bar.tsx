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

/*

import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
*/