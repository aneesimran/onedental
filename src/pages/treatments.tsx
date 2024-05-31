/* eslint-disable @next/next/no-img-element */
import { NavigationBar } from "@/components/NavigationBar";

export default function Treatments() {
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
                            Treatments
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-2/3 mx-auto pt-20 leading-loose md:w-2/4 ">
                <p>
                    Achieve a healthy, confident smile with our comprehensive
                    dental treatment options. We offer a wide range of services
                    to address all your oral health needs. Schedule a
                    consultation today and let us help you create a brighter,
                    healthier future for your smile.
                </p>
                <div className="divider items-center text-center justify-center text-xl pt-6 pb-6 text-theme-dark-blue">
                    Fresh Breath
                </div>
                <p>Many things can cause bad breath, including:</p>
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
                <div className="divider items-center text-center justify-center text-xl pt-6 pb-6 text-theme-dark-blue">
                    Teeth Whitening
                </div>
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
                <div className="divider items-center text-center justify-center text-xl pt-6 pb-6 text-theme-dark-blue">
                    Invisalign
                </div>
                <p>Contact us for more information</p>
                <div className="divider items-center text-center justify-center text-xl pt-6 pb-6 text-theme-dark-blue">
                    Children
                </div>
                <p>
                    Good (or bad) habits start early. Prevention is always the
                    best way of ensuring your children achieve a perfectly
                    healthy smile. Regular check ups with diet advice and oral
                    hygiene instruction can ensure healthy teeth free of
                    fillings. We want to offer parents all the information they
                    need to ensure that they can work with their children so
                    that they can enjoy the best possible oral health.
                </p>
                <p className="pt-4">
                    We believe that you are never too young to benefit from
                    excellent dental care. Our aim is to give your child a
                    gentle introduction to dentistry and help them to develop
                    the good habits necessary to keep their teeth healthy for a
                    lifetime. We hope that our children mature into adults who
                    feel relaxed and confident at the dentist as a result of
                    their time with us.
                </p>
                <div className="divider items-center text-center justify-center text-xl pt-6 pb-6 text-theme-dark-blue">
                    Dental Shop
                </div>
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
