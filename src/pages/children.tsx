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
                            Children
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-2/3 mx-auto pt-20 leading-loose md:w-2/4 ">
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
            </div>
        </div>
    );
}
