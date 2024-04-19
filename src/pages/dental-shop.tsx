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
                            Dental Shop
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-2/3 mx-auto pt-20 leading-loose md:w-2/4 ">
                <p>
                    Don’t be fooled by glossy marketing and adverts. We’ll give
                    you the low down on which oral hygiene products are suitable
                    for you and what works and what you’re wasting your money
                    on.
                </p>
                <p className="pt-4">
                    We carry a selection of specialist and daily oral hygiene
                    products to maintain that bright smile at competitive
                    prices. The dentist or hygienist will be able to recommend
                    which products suit you best.
                </p>
            </div>
        </div>
    );
}
