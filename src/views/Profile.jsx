import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Profile() {

    useEffect(() => {
        // Scroll down to hide the navbar on page load
        const navbarHeight = document.getElementById("navbar").clientHeight;
        const duration = 1000; // Duration in milliseconds
        const startTime = performance.now();

        const scroll = (timestamp) => {
            const elapsedTime = timestamp - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const scrollTop = progress * navbarHeight;

            window.scrollTo(0, scrollTop);

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    }, []);


    return (
        <>
        <div id="navbar" className="relative">

        <Navbar />

        </div>

            <div className="relative flex flex-col items-center justify-center "> {/*center all the "main items"*/}
                <div className="relative w-full"> {/* items within me are relative to me */}
                    <div className="absolute inset-0 z-0">
                        <img
                            className="object-cover blur-md"
                            src="https://placehold.co/1920x300"
                        />
                    </div>
                    <div className="relative z-1">
                        <img
                            className="object-contain"
                            src="https://placehold.co/1920x300"
                        />
                    </div>



                </div>

                <div className="shadow-black shadow-lg absolute -bottom-20 w-fit border-2 rounded-full border-gray-600 bg-white">
                    <img
                        className="rounded-full object-contain"
                        src="https://placehold.co/180x180"
                        alt="User"
                        style={{ maxWidth: "150px", maxHeight: "150px" }}
                    />
                </div>
            </div>

            <div className="mt-20 flex items-center justify-center bg-gradient-to-b from-white to-gray-800">
                <div className="grid grid-cols-2 gap-y-32 gap-x-48">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

            <Footer />
        </>
    );
}