// UserCard.js
import React, { useState } from "react";

export default function UserCard() {
    const [user, setUser] = useState({
        name: "John Doe",
        profile_picture: "https://placehold.co/90x90",
        profile_img: "sample_snapshot.png",
    });

    return (
        <div
        className="relative hover:blur-sm transition duration-500 ease-in-out">
            {/* Spacer for User Image */}
            <div className="h-5"></div>

            {/* User Card */}
            <div
                className="shadow-xl bg-white flex flex-col items-center justify-center w-fit m-4 border-2 rounded-xl border-gray-600"
            >
                <div className="bg-white rounded-xl p-4 relative">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={user.profile_img}
                            className="w-full h-full object-cover rounded-xl blur-sm"
                            alt="User Card"
                        />
                    </div>
                    <div className="relative z-1">
                        <img
                            src={user.profile_img}
                            className="rounded-xl object-contain"
                            alt="User Card"
                            style={{ maxWidth: "325px", maxHeight: "300px", minWidth: "325px", minHeight: "300px" }}
                        />
                    </div>
                </div>
                {/* User Image */}
                <div className="absolute top-0 w-fit border-2 rounded-full border-gray-600 bg-white">
                    <img
                        className="rounded-full object-contain"
                        src={user.profile_picture}
                        alt="User"
                        style={{ maxWidth: "90px", maxHeight: "90px" }}
                    />
                </div>
                <div>
                    <h3 className="text-xl font-extrabold">{user.name}</h3>
                </div>
            </div>

            {/* Dark Overlay */}
            <div className="rounded-3xl top-0 w-full h-full bg-black absolute opacity-0 hover:opacity-50 transition duration-500 ease-in-out"></div>

            {/* <a href="#" className="absolute top-0 text-rose-600">Sample Link</a> */}
        </div>
    );
}
