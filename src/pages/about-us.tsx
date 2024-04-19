/* eslint-disable @next/next/no-img-element */
import { NavigationBar } from "@/components/NavigationBar";

export default function AboutUs() {
    return (
        <div className="bg-theme-light pb-20 md:h-screen">
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
                            About us
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-2/3 mx-auto pt-20 leading-loose md:w-2/4 ">
                <p>
                    Feeling nervous about dental visits? You're not alone. At
                    OneDental, we understand that anxiety is common. That's why
                    we're dedicated to creating a comfortable and welcoming
                    environment for every patient.
                    <br />
                    <br />
                    Our friendly and compassionate team will be by your side
                    every step of the way, easing your nerves and answering your
                    questions. Our highly skilled dentists are registered with
                    the General Dental Council and committed to ongoing
                    education, ensuring you receive the latest dental care.
                    <br />
                    <br />
                </p>
                <p className="text-lg font-semibold">
                    Your Personalised Smile Journey:
                </p>
                <p>
                    During your first visit, we'll listen attentively to your
                    concerns and dental history. A thorough exam, will help us
                    create a personalised treatment plan tailored to your unique
                    needs. We prioritise safety and utilise cutting-edge
                    technology. Digital X-rays, for example, emit minimal
                    radiation compared to traditional methods, making it safer
                    for you, our staff, and the environment.
                    <br />
                    <br />
                </p>
                <p className="text-lg font-semibold">Family-Friendly Care:</p>
                <p>
                    OneDental is a family-oriented practice welcoming patients
                    of all ages. We understand busy schedules, so we offer
                    flexible appointment times to accommodate your needs.
                    <br />
                    <br />
                </p>
                <p className="text-lg font-semibold">Why Choose OneDental?</p>
                <ul className="list-disc list-inside text-left">
                    <br />
                    <li className="pb-4">
                        <span className="font-semibold">
                            Relaxing Atmosphere:{" "}
                        </span>
                        Our team is dedicated to making you feel comfortable and
                        at ease.
                    </li>
                    <li className="pb-4">
                        <span className="font-semibold">
                            Modern Technology:{" "}
                        </span>
                        We utilise the latest advancements in dental technology
                        for accurate diagnoses and comfortable procedures.
                    </li>
                    <li className="pb-4">
                        <span className="font-semibold">
                            Open Communication:{" "}
                        </span>
                        We encourage questions and provide clear information
                        throughout your treatment.
                    </li>
                    <li>
                        <span className="font-semibold">Friendly Team: </span>
                        Our welcoming staff is happy to answer your questions
                        and build relationships with patients.
                    </li>
                </ul>
                <div className="collapse collapse-arrow bg-theme-med mb-2">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-theme-med mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-theme-med">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
