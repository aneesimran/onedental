/* eslint-disable @next/next/no-img-element */
import { NavigationBar } from "@/components/NavigationBar";

export default function FreshBreath() {
    return (
        <div className="bg-theme-light pb-20 md: min-h-screen ">
            <div className="">
                <NavigationBar></NavigationBar>
            </div>
            <div
                className="hero h-72"
                style={{
                    backgroundImage: "url(/images/smile.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold p-8 text-white ">
                            Fresh Breath Services
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-2/3 mx-auto pt-20 leading-loose md:w-2/4 ">
                <p className="font-semibold text-blue-600 text-xl pb-8">
                    A fresh mouth is a healthy mouth...
                </p>
                <p className="pb-8">
                    Our appointments will ensure your mouth is free from
                    halitosis (bad breath).
                </p>
                <p className="font-semibold">
                    Many things can cause bad breath, including:
                </p>
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2">
                        Poor oral hygiene (not brushing and flossing properly)
                    </li>
                    <li className="pb-2">Gum disease</li>
                    <li className="pb-2">
                        Eating certain foods like onions or garlic
                    </li>
                    <li className="pb-2">Tobacco and alcohol products</li>
                    <li className="pb-2">
                        Dry mouth (caused by reduced saliva flow, certain
                        medications or medical disorders)
                    </li>
                    <li>Systemic diseases </li>
                </ul>
                <p className="pt-8">
                    We can teach you how to look after your teeth and gums with
                    custom oral hygiene regimes. Correct tooth brushing and
                    interdental techniques can help minimise and eliminate
                    problems. Good oral hygiene is imperative in maintaining
                    healthy gums and bone support for your teeth.
                </p>
            </div>
        </div>
    );
}
