import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProfileModal from "../components/ProfileModal";

export default function Profile({ match }) {
    console.log("Match", match)
    const { userId } = useParams(); // Use the correct parameter name here
    // const userId = match.params.userId; // Extract userId from the route parameter

    // Fetch user data based on userId (you can replace this with your data fetching logic)
    const userData = {};

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
                
                {/* <div className="fixed inset-0 modal-overlay top-0 w-screen h-screen flex flex-col items-center justify-center z-50">
                    <ProfileModal />
                </div> */}
                <div className="relative w-full"> {/* items within me are relative to me */}
                    <div className="absolute inset-0 z-0">
                        <img
                            className="object-cover blur-md w-full"
                            src="https://placehold.co/1920x300"
                        />
                    </div>
                    <div className="relative z-1">
                        <img
                            className="object-contain w-full"
                            src="https://placehold.co/1920x300"
                        />
                    </div>



                </div>

                <div
                    onClick={() => {

                    }}
                    className="shadow-black shadow-lg absolute sm:-bottom-16 md:-bottom-20 lg:-bottom-24 w-fit border-2 rounded-full border-gray-600 bg-white">
                    <img
                        className="rounded-full object-contain sm:h-24 md:h-32 lg:h-40"
                        src="https://placehold.co/180x180"
                        alt="User"
                    // style={{ maxWidth: "150px", maxHeight: "150px" }}
                    />
                </div>
            </div>

            <div className="mt-20 flex items-center justify-center bg-gradient-to-b from-white to-gray-800">
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-32 gap-x-48">
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