import {
	InternalForwardRefRenderFunction,
	LinkProps,
	Button as NextButton,
} from "@nextui-org/react";
import { ReactNode } from "react";

interface CustomButtonInterface {
	children: ReactNode;
	className?: string;
	href?: string;
	as?: InternalForwardRefRenderFunction<"a", LinkProps, never>;
}
export const Button = ({
	children,
	className,
	href,
	as,
}: CustomButtonInterface) => {
	return (
		<div>
			<NextButton
				as={as}
				className={`bg-cyan text-white text-md font-bold ${className}`}
				href={href}>
				{children}
			</NextButton>
		</div>
	);
};
