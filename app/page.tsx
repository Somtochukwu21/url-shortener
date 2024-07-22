import { NextUIProvider } from "@nextui-org/react";
import HeroSection from "./HeroSection";
import { LinkInput } from "./LinkInput";
import { Statistics } from "./Statistics";
import { Card } from "./components";
import { FooterTop } from "./FooterTop";
import { PageFooter } from "./Footer";

const Home = () => {
	return (
		<NextUIProvider>
			<>
				<HeroSection />
				<section className="h-full w-full bg-grayish-violet mt-40 lg:mt-48  pb-20">
					<Card>
						<LinkInput />
						<Statistics />
					</Card>
				</section>
				<FooterTop />
				<PageFooter />
			</>
		</NextUIProvider>
	);
};

export default Home;

// go to trash find statistics and links
