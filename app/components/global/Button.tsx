import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
	type: "submit" | "reset" | "button";
	className: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
	disabled?:boolean
}

export const Button = ({onClick, className, type, children,disabled }: ButtonProps) => {
	return (
		<button type={type} onClick={onClick} className={`bg-cyan text-white font-semibold active:bg-bright ${className}`}>
			{children}
		</button>
	);
};
