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

            <div className="bg-theme-light flex flex-wrap gap-4 justify-center p-10 md:flex-wrap  ">
                <div
                    className="card w-60 bg-base-100 shadow-xl image-full"
                    data-theme="light"
                >
                    <figure>
                        <img src="/images/dentist.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="card-body items-center text-center justify-center">
                            <button className="btn btn-outline  text-white">
                                Teeth Whitening
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="card w-60 bg-base-100 shadow-xl image-full "
                    data-theme="light"
                >
                    <figure>
                        <img src="/images/dentist.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="card-body items-center text-center justify-center">
                            <button className="btn btn-outline  text-white">
                                Teeth Whitening
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="card w-60 bg-base-100 shadow-xl image-full "
                    data-theme="light"
                >
                    <figure>
                        <img src="/images/dentist.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="card-body items-center text-center justify-center">
                            <button className="btn btn-outline  text-white">
                                Teeth Whitening
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="card w-60 bg-base-100 shadow-xl image-full "
                    data-theme="light"
                >
                    <figure>
                        <img src="/images/dentist.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="card-body items-center text-center justify-center">
                            <button className="btn btn-outline  text-white">
                                Teeth Whitening
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
