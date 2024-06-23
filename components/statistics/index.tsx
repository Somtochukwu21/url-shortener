import { LinkInput } from "./link-input";
import { StatisticsBoxes } from "./statistic-boxes";
import { PropsData } from "./useBoxData";

export const StatisticsAndLinkInput = () => {
	return (
		<section className="h-full w-full bg-grayish-violet mt-40 lg:mt-48">
			<main className="max-w-custom m-auto h-full pb-32">
				<LinkInput />
				<div className="text-center px-7 lg:px-0">
					<h2 className="font-semibold text-4xl">Advanced Statistics</h2>
					<p className="mt-4">
						Track how your links are performing across the web with <br />
						our advanced statistics dashboard.
					</p>
				</div>
				<div className="mt-28 w-full lg:flex lg:space-x-8 box relative h-full px-7 lg:px-0 lg:after:border-4 lg:after:absolute lg:after:top-1/2 lg:after:w-full lg:after:border-cyan">
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
			</main>
		</section>
	);
};
