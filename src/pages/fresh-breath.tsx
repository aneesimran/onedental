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
                        <h1 className="text-5xl font-bold p-8 ">About us</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-2/3 mx-auto pt-20 leading-loose ">
                <p>
                    At onedental we are dedicated to making your visit an
                    enjoyable experience. We have a dedicated team to help guide
                    you through your treatment. We understand that not everybody
                    is eager to visit the dentist and that many patients feel
                    anxious about treatment.
                </p>
                <br></br>
                <p>
                    All of our staff are trained to make you feel calm and ease
                    any nerves. Our clinical staff are registered with the
                    General Dental Council and are commited to continuing
                    professional development.
                </p>
                <br></br>

                <p>
                    On your first visit we will ask you questions about your
                    medical and dental history to make sure that we fully
                    understand your needs and concerns. This is followed by a
                    thorough oral examination where time will be taken to fully
                    chart the health of your teeth and gums, take digital x-rays
                    and assess any dental work that needs to be carried out. All
                    treatments take place under stringent cross-infection
                    control guidelines.
                </p>
                <br></br>

                <p>
                    We use the latest technologies including plasma screens,
                    intra oral cameras and digital xrays to aid in diagnoses.
                    Digital xrays use a fraction of the radiation dose to
                    produce an image. Safer for you, safer for the practice team
                    and no hazardous chemicals to dispose of. So safer for the
                    environment.
                </p>
                <br></br>

                <p>
                    Every person we see is different. However, we endeavour to
                    make you and your dental care special and tailored to your
                    personal needs. We will listen to your requests, concerns
                    and problems to provide you with the best treatment.
                </p>
                <br></br>

                <p>
                    We will give you the support and information you need to
                    make the right choices for you, your smile and your dental
                    health.
                </p>
            </div>
        </div>
    );
}
