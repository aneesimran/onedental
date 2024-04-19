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
                            Teeth Whitening
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-2/3 mx-auto pt-20 leading-loose md:w-2/4 ">
                <p>
                    The flexi treatment allows you to carry out the teeth
                    whitening procedure in the comfort of your own home or work
                    , and yet benefit from the professional advice of a dentist.
                </p>
                <p className="pt-4">
                    Your teeth are initially checked by a dentist to ensure they
                    are suitable for teeth whitening.
                </p>
                <p className="pt-4">
                    Impressions of your teeth are taken, from which two custom
                    made trays are moulded. These precision trays fit your teeth
                    perfectly and comfortably.
                </p>
                <p className="pt-4">
                    At OneDental we use proven products including NiteWhite,
                    polanight and ZOOM! whitening gels, giving you better and
                    long lasting results.
                </p>
            </div>
        </div>
    );
}
