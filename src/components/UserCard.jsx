// UserCard.js
import React from "react";

export default function UserCard({name, profile_picture, profile_img}) {
    return (
        <div className="relative">
            {/* Spacer for User Image */}
            <div className="h-5">
            </div>

            {/* User Card */}
            <div
                className="flex flex-col items-center justify-center w-fit m-4 border-2 rounded-xl border-indigo-600"
            >
                {/* User Image */}
                <div className="absolute top-0 w-fit border-2 rounded-full border-indigo-600 bg-white">
                    <img
                        className="rounded-full object-contain"
                        src={profile_picture? profile_picture : "https://placehold.co/90x90"}
                        alt="User"
                        style={{ maxWidth: "90px", maxHeight: "90px" }} // object-contain works, but this should guarentee
                    />
                </div>

                <div>
                    <img
                        src={profile_img? profile_img : "https://placehold.co/325x300"}
                        className="rounded-xl object-contain"
                        alt="User Card"
                        style={{ maxWidth: "325px", maxHeight: "300px" }} // object-contain works, but this should guarentee
                    />
                </div>
                <div>
                    <h3 className="font-extrabold">{name? name: "John Doe"}</h3>
                </div>
            </div>
        </div>
    );
}
