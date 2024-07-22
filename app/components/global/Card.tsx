import { ReactNode } from "react";

interface CardProps {
	className?: string;
	children: ReactNode;
}
export const Card = ({ children, className }: CardProps) => {
	return (
		<div className={`p-5 max-w-7xl m-auto md:p-7 ${className}`}>{children}</div>
	);
};
