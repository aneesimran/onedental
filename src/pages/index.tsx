import Image from "next/image";
import { Inter } from "next/font/google";
import { NavigationBar } from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <p>hello world!</p>
        </>
    );
}
