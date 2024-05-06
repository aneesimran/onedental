/* eslint-disable @next/next/no-img-element */
import { NavigationBar } from "@/components/NavigationBar";
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Implement form submission logic here (e.g., send email)
        console.log("Form submitted:", formData);

        // Reset form after submission
        setFormData({ name: "", subject: "", message: "" });
    };
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
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-4/5 mx-auto pt-20 leading-loose md:w-2/4 md:flex-row">
                <div className="pr-10 pb-6 md:pb-0">
                    <p className="text-blue-600 text-lg font-bold">OneDental</p>
                    <p>51-53 Albert Street</p>
                    <p>Rugby</p>
                    <p>CV21 2SG</p>
                    <p>info@onedental.co.uk</p>
                    <p>0178 855 3999</p>
                    <p className="text-blue-600 text-lg font-bold pt-4 md:pt-8">
                        Opening times
                    </p>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>(Closed for Lunch, 1pm - 2pm)</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.757088559606!2d-1.2618370220642552!3d52.374824472023626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487740b866c286ed%3A0x328dda00cbaff4a2!2sOne%20Dental!5e0!3m2!1sen!2suk!4v1714746511256!5m2!1sen!2suk"
                    className="md:w-full md:max-w-[900px] md:h-auto md:min-h-[400px] w-auto m h-[300px] shadow-xl rounded-2xl"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="w-5/6 shadow-xl mx-auto p-6 mt-20 leading-loose md:p-10 md:w-1/3 bg-theme-med rounded-3xl">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="items-center text-center justify-center text-xl"></div>
                    <div className="divider items-center text-center justify-center text-xl">
                        Contact Form
                    </div>
                    <div className="mb-6 mt-10">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-3 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 p-3 h-40 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 rounded-md bg-theme-blue text-white font-medium hover:bg-theme-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
