import Image from "next/image";
import { Inter } from "next/font/google";
import { NavigationBar } from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="hero min-h-full  ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold p-8">Welcome to</h1>
                        <p className="text-5xl font-bold pb-10">
                            <span className="text-blue-500">one</span>
                            <span>dental</span>
                        </p>
                        <button className="btn btn-b mb-10">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}
