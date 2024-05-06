/* eslint-disable @next/next/no-img-element */
import { NavigationBar } from "@/components/NavigationBar";

export default function Home() {
    return (
        <div className="bg-theme-white h-screen">
            <div className="bg-theme-white">
                <NavigationBar></NavigationBar>
                <div
                    className="hero h-80"
                    style={{
                        backgroundImage: "url(/images/smile.jpg)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-white">
                            <h1 className="text-5xl font-bold p-8">
                                Welcome to
                            </h1>
                            <p className="text-5xl font-bold pb-10">
                                <span className="text-blue-500">one</span>
                                <span>dental</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center p-10 md:flex-wrap">
                    <div className="carousel  shadow-xl carousel-center max-w-7xl p-4 space-x-4 bg-theme-light rounded-box">
                        <div className="carousel-item">
                            <div
                                className="card w-40 bg-base-100 shadow-xl image-full sm:w-96"
                                data-theme="light"
                            >
                                <figure>
                                    <img
                                        src="/images/dentist.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body">
                                    <div className="card-body items-center text-center justify-center">
                                        <button className="btn btn-outline  text-white">
                                            Dental Advice
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div
                                className="card w-40 ml-16 mr-2 bg-base-100 shadow-xl image-full sm:w-96 sm:m-0 "
                                data-theme="light"
                            >
                                <figure>
                                    <img
                                        src="/images/dentist.jpg"
                                        alt="Shoes"
                                    />
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

                        <div className="carousel-item">
                            <div
                                className="card w-40 ml-20 mr-2 bg-base-100 shadow-xl image-full sm:w-96 sm:m-0"
                                data-theme="light"
                            >
                                <figure>
                                    <img
                                        src="/images/dentist.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body">
                                    <div className="card-body items-center text-center justify-center">
                                        <button className="btn btn-outline  text-white">
                                            Treatments
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div
                                className="card w-40 ml-24 bg-base-100 shadow-xl image-full sm:w-96 sm:m-0"
                                data-theme="light"
                            >
                                <figure>
                                    <img
                                        src="/images/dentist.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body">
                                    <div className="card-body items-center text-center justify-center">
                                        <button className="btn btn-outline  text-white">
                                            Contact us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider items-center text-center justify-center text-xl">
                    Why Choose Us?
                </div>
                <div className="flex flex-wrap gap-4 justify-center p-10 md:gap-10">
                    <div className="card w-64  shadow-xl items-center bg-theme-med border-1">
                        <div className="card-body">
                            <h2 className="card-title">Experienced Dentist</h2>
                        </div>
                    </div>
                    <div className="card w-64 bg-theme-med shadow-xl items-center">
                        <div className="card-body">
                            <h2 className="card-title">Affordable</h2>
                        </div>
                    </div>
                    <div className="card w-64 bg-theme-med shadow-xl items-center">
                        <div className="card-body">
                            <h2 className="card-title">Friendly</h2>
                        </div>
                    </div>
                    <div className="card w-64 bg-theme-med shadow-xl items-center">
                        <div className="card-body">
                            <h2 className="card-title">Stress Free</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
