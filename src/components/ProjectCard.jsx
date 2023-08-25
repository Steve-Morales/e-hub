import React, {useState} from "react";

export default function ProjectCard() {
    const [user, setUser] = useState({
        name: "John Doe",
        profile_picture: "https://placehold.co/90x90",
        profile_img: "https://placehold.co/325x300",
    });

    return (
        <div
            className="relative hover:blur-sm transition duration-500 ease-in-out hover:scale-110">

            {/* Project Card */}
            <div
                className="shadow-xl bg-white flex flex-col items-center justify-center w-fit m-4 border-2 rounded-xl border-gray-600"
            >
                <div className="bg-white rounded-xl p-4 relative">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={user.profile_img}
                            className="w-full h-full object-cover rounded-xl blur-sm"
                            alt="Project Card"
                        />
                    </div>
                    <div className="relative z-1">
                        <img
                            src={user.profile_img}
                            className="rounded-xl object-contain"
                            alt="Project Card"
                            style={{ maxWidth: "325px", maxHeight: "300px", minWidth: "325px", minHeight: "300px" }}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-extrabold">Project Name</h3>
                </div>
            </div>

            {/* Dark Overlay */}
            <div className="rounded-3xl top-0 w-full h-full bg-black absolute opacity-0 hover:opacity-50 transition duration-500 ease-in-out"></div>
        </div>
    );
}