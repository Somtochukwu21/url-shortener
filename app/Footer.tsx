import footerLogo from "@/public/svg/footer-logo.svg";
import facebook from "@/public/svg/icon-facebook.svg";
import instagram from "@/public/svg/icon-instagram.svg";
import pinterest from "@/public/svg/icon-pinterest.svg";
import twitter from "@/public/svg/icon-twitter.svg";
import Image from "next/image";
import { Card } from "./components";
const features = ["Link Shortening", " Branded Links", "Analytics"];
const resources = ["Blog", " Developers ", "Support "];
const company = [" About", "Our Team", " Careers", " Contact"];

export const PageFooter = () => {
	return (
		<footer className="bg-very-dark-violet">
			<Card className=" w-full">
				<div className=" max-w-custom m-auto px-7 lg:px-0 flex justify-center text-center lg:text-left lg:block">
					<div className="lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-16">
						<div className="lg:block flex justify-center">
							<Image src={footerLogo} alt="footer logo" />
						</div>

						<div className="col-span-2 lg:grid grid-cols-3 w-full">
							<div className="lg:grid grid-cols-3 gap-8 col-span-2 my-8  lg:my-0  [&>*]:mt-8 lg:[&>*]:mt-0">
								<div>
									<h3 className=" font-semibold text-white">Features</h3>
									<ul className="mt-4 space-y-3 sm:mt-6 md:space-y-4">
										<ListItem data={features} />
									</ul>
								</div>

								<div>
									<h3 className=" font-semibold text-white">Resources</h3>
									<ul className="mt-4 space-y-3 sm:mt-6 md:space-y-4">
										<ListItem data={resources} />
									</ul>
								</div>

								<div>
									<h3 className=" font-semibold text-white">Company</h3>
									<ul className="mt-4 space-y-3 sm:mt-6 md:space-y-4">
										<ListItem data={company} />
									</ul>
								</div>
							</div>

							<div className="flex space-x-7 ">
								<div>
									<Image src={facebook} alt="social media" />
								</div>
								<div>
									<Image src={twitter} alt="social media" />
								</div>
								<div>
									<Image src={pinterest} alt="social media" />
								</div>
								<div>
									<Image src={instagram} alt="social media" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</footer>
	);
};

const ListItem = ({ data }: { data: string[] }) => {
	return (
		<>
			{data.map((item) => (
				<li
					key={item}
					className="relative items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2  no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400 active:text-cyan">
					{item}
				</li>
			))}
		</>
	);
};
