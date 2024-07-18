/* eslint-disable @next/next/no-img-element */
import { NavigationBar } from "@/components/NavigationBar";
import Link from "next/link";

export default function FreshBreath() {
    return (
        <div className="bg-theme-light pb-20 md: min-h-screen ">
            <div className="">
                <NavigationBar></NavigationBar>
            </div>
            <div
                className="hero h-72"
                style={{
                    backgroundImage: "url(/images/advice.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold p-8 text-white ">
                            Advice Links
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-10/12 mx-auto pt-10 leading-loose md:pt-20 md:w-2/4 ">
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2 underline">
                        <Link href="https://www.cqc.org.uk/">
                            Care Quality Commission
                        </Link>
                    </li>
                    <li className="pb-2 underline">
                        <Link href="https://www.cancerresearchuk.org/about-cancer/mouth-cancer">
                            Mouth Cancer
                        </Link>
                    </li>
                    <li className="pb-2 underline">
                        <Link href="https://www.nhs.uk/">NHS</Link>
                    </li>
                    <li className="pb-2 underline">
                        <Link href="https://www.nhs.uk/better-health/quit-smoking/">
                            Smoke Free
                        </Link>
                    </li>
                    <li className="pb-2 underline">
                        <Link href="https://www.dentalhealth.org/">
                            The British Dental Health Foundation
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
