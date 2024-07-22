import { PropsData, StatisticsBoxes } from "./components";

export const Statistics = () => {
	return (
		<div>
			<div className="text-center px-7 lg:px-0">
				<h2 className="font-semibold text-4xl">Advanced Statistics</h2>
				<p className="mt-4">
					Track how your links are performing across the web with <br />
					our advanced statistics dashboard.
				</p>
			</div>
			<div className="before:h-full before:border-cyan before:border-4 before:absolute before:left-1/2 mt-28 w-full lg:flex lg:space-x-8 box relative h-full lg:before:hidden lg:px-0 lg:after:border-4 lg:after:absolute lg:after:top-1/2 lg:after:w-full lg:after:border-cyan">
				{PropsData.map((data) => {
					return (
						<StatisticsBoxes
							key={data.id}
							header={data.header}
							image={data.image}
							text={data.text}
						/>
					);
				})}
			</div>
		</div>
	);
};
