/* eslint-disable @next/next/no-img-element */
import { NavigationBar } from "@/components/NavigationBar";

export default function AboutUs() {
    return (
        <div className="bg-theme-light pb-20 ">
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
            <div className="w-10/12 mx-auto pt-10 leading-loose md:w-2/4 md:pt-20 ">
                <p>
                    Feeling nervous about dental visits? You&apos;re not alone.
                    At OneDental, we understand that anxiety is common.
                    That&apos;s why we&apos;re dedicated to creating a
                    comfortable and welcoming environment for every patient.
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
                <p className="font-semibold">
                    Your Personalised Smile Journey:
                </p>
                <p>
                    During your first visit, we&apos;ll listen attentively to
                    your concerns and dental history. A thorough exam, will help
                    us create a personalised treatment plan tailored to your
                    unique needs. We prioritise safety and utilise cutting-edge
                    technology. Digital X-rays, for example, emit minimal
                    radiation compared to traditional methods, making it safer
                    for you, our staff, and the environment.
                    <br />
                    <br />
                </p>
                <p className="font-semibold">Family-Friendly Care:</p>
                <p>
                    OneDental is a family-oriented practice welcoming patients
                    of all ages. We understand busy schedules, so we offer
                    flexible appointment times to accommodate your needs.
                    <br />
                    <br />
                </p>
                <p className="text-xl font-semibold">Why Choose OneDental?</p>
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
                <br />
                <p className="text-xl font-semibold">Meet Our Team!</p>
                <br />

                <div className="collapse shadow-lg collapse-arrow bg-theme-med mb-4">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Principal Dentist
                    </div>
                    <div className="collapse-content">
                        <p className="font-semibold">Dr Tariq Yunus BDS</p>
                        <p>
                            Qualified from the United Medical and Dental Schools
                            of Guys and St Thomas’s Hospitals in London. He has
                            over 25 yrs experience working mainly in general
                            practice and is committed to remaining at the
                            cutting edge of dentistry by attending courses and
                            lectures regularly to further enhance his skills.
                            Registered with the General Dental Council
                            (GDC-73907) and a member of the British Dental
                            Association.
                        </p>
                    </div>
                </div>
                <div className="collapse shadow-lg collapse-arrow bg-theme-med mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Visiting Implantologist
                    </div>
                    <div className="collapse-content">
                        <p className="font-semibold">Dr Robert Cope BDS</p>
                        <p>
                            Qualified from Birmingham Dental Hospital in 1992
                            and completed the Certificate in Restorative
                            Dentistry in 1998. Rob has successfully placed
                            hundreds of implants over the years traveling the
                            breadth of the country supporting various practices
                            and patients. Registered with the GDC (GDC - 68088)
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-theme-med mb-4 shadow-lg">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Practice Manager
                    </div>
                    <div className="collapse-content">
                        <p className="font-semibold">Obeeda Yunus</p>
                        <p>
                            Full time Mum, Wife and Qualified Manager. Lets just
                            say she’s got her hands full! Working behind the
                            scenes to ensure the smooth running of one dental
                            since it was set up.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-theme-med mb-4 shadow-lg">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Dental Surgery Assistant
                    </div>
                    <div className="collapse-content">
                        <p className="font-semibold">Nina Chadha</p>
                        <p>
                            Nina has years of experience as a dental nurse
                            having worked previously in Birmingham . As a result
                            of her experience and training she has been
                            registered with the GDC since 2007 (GDC-108768).
                            Nina is a vital part of our dental team,
                            sympathetic, caring and always there to hold your
                            hand through the treatment process.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-theme-med shadow-lg">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Implant Coordinator
                    </div>
                    <div className="collapse-content">
                        <p className="font-semibold">Jenni Harris</p>
                        <p>
                            Jenni qualified as a dental nurse in 1979 from the
                            London Hospital Dental Institute and has been
                            working with Dr Cope since 2003. She has completed
                            the national certificate in Dental Radiology and the
                            Nobel Biocare Implant course. Registered with the
                            GDC since 2007 (GDC - 114481)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
