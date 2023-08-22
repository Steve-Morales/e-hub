// UserCard.js
import React from "react";

export default function UserCard() {
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
                        className="rounded-full"
                        src="https://placehold.co/90x90"
                        alt="User"
                    />
                </div>

                <div>
                    <img
                        src="https://placehold.co/325x300"
                        className="rounded-xl"
                        alt="User Card"
                    />
                </div>
                <div>
                    <h3 className="font-extrabold">John Doe</h3>
                </div>
            </div>
        </div>
    );
}
