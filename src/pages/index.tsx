/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import { NavigationBar } from "@/components/NavigationBar";
import DentistImage from "../../public/images/smile.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div
                className="hero min-h-full"
                style={{
                    backgroundImage: "url(/images/smile.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold p-8">Welcome to</h1>
                        <p className="text-5xl font-bold pb-10">
                            <span className="text-blue-500">one</span>
                            <span>dental</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-theme-light grid grid-flow-row gap-4 justify-center  p-10 sm:flex sm:gap-8">
                <div className="card w-60 bg-base-100 shadow-xl md:w-80">
                    <figure className="px-4 pt-4">
                        <img
                            src="/images/dentist.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">About us</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-60 bg-base-100 shadow-xl md:w-80">
                    <figure className="px-4 pt-4">
                        <img
                            src="/images/dentist.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center justify-center">
                        <div className="card-actions">
                            <button className="btn btn-primary">
                                Teeth Whitening
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
