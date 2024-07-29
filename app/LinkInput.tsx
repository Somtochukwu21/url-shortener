"use client";

import CustomPatternDesktop from "@/public/svg/bg-shorten-desktop.svg";
import CustomPatternMobile from "@/public/svg/bg-shorten-mobile.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./components";

interface ShortenedLink {
	original: string;
	short: string;
}

const isValidUrl = (url: string) => {
	const urlPattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	);
	return !!urlPattern.test(url);
};

export const LinkInput: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [result, setResult] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [links, setLinks] = useState<ShortenedLink[]>([]);
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const handleShortenUrl = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (inputValue.trim() === "") {
			setError("Please add a link");
			return;
		}

		if (!isValidUrl(inputValue)) {
			setError("Invalid URL");
			return;
		}

		setError("");

		const response = await fetch(
			`https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputValue)}`
		);
		if (response.ok) {
			const shortUrl = await response.text();
			setResult(shortUrl);
			setLinks([...links, { original: inputValue, short: shortUrl }]);
		} else {
			setError("Error shortening URL");
		}

		setInputValue("");
	};

	const handleCopy = (index: number, url: string) => {
		navigator.clipboard.writeText(url);
		setCopiedIndex(index);
		setTimeout(() => {
			setCopiedIndex(null);
		}, 3000);
	};

	return (
		<div className="">
			<div className="-translate-y-24">
				<div className="relative max-w-custom overflow-clip bg-dark-violet h-44 rounded-xl flex w-full justify-center items-center px-7 md:px-0">
					<div className="w-full h-full absolute hidden md:flex">
						<Image
							priority
							src={CustomPatternDesktop}
							className="w-full h-full"
							alt="custom pattern for desktop"
						/>
					</div>

					<div className="w-full absolute h-full">
						<Image
							src={CustomPatternMobile}
							priority
							className="w-3/5 h-3/4 absolute right-0 flex md:hidden"
							alt="custom pattern for mobile"
						/>
					</div>
					<div className="flex w-full flex-col z-10">
						<form
							className="md:flex md:space-x-6 md:px-20 w-full"
							onSubmit={handleShortenUrl}>
							<div className="w-full ">
								<input
									type="text"
									className={`w-full rounded-md p-[14px] md:p-4 outline-none ${
										error ? "border-2 border-red-500" : ""
									}`}
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									placeholder="Shorten a link here..."
								/>
							</div>
							<Button
								type="submit"
								className="w-full h-[50px] md:h-auto mt-4 md:w-40 rounded-md md:mt-0  bg-cyan text-white">
								Shorten it!
							</Button>
						</form>
						<div className="d md:px-20 w-full mt-2">
							{error && <p className="text-red-500">{error}</p>}
						</div>
					</div>
				</div>
				<ul className="mt-8 space-y-4">
					{links.map((link, index) => (
						<li
							key={index}
							className="lg:flex justify-between items-center p-4 bg-white rounded-md shadow flex-row">
							<span>{link.original}</span>
							<div className="w-full border-1 border-gray mt-2 lg:hidden"></div>
							<div className="flex w-full lg:w-auto lg:mt-0 mt-4 lg:items-center lg:space-x-4 flex-col lg:flex-row">
								<Link
									href={link.short}
									target="_blank"
									rel="noopener noreferrer"
									className="text-cyan mb-2 lg:mb-0">
									{link.short}
								</Link>
								<Button
									type="button"
									className={`w-full md:w-[100px] py-3 rounded-md ${
										copiedIndex === index
											? "bg-dark-violet active:bg-dark-violet"
											: "bg-cyan"
									}`}
									onClick={() => handleCopy(index, link.short)}
									disabled={copiedIndex === index}>
									{copiedIndex === index ? "Copied!" : "Copy"}
								</Button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
