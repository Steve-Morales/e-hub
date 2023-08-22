// UserCard.js
import React, { useState } from "react";

export default function UserCard() {
  const [user, setUser] = useState({
    name: "John Doe",
    profile_picture: "https://placehold.co/90x90",
    profile_img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Round-Up-Featured-Image.jpg?w=960&h=600&crop=1",
  });


  return (
    <div className="relative">
      {/* Spacer for User Image */}
      <div className="h-5"></div>

      {/* User Card */}
      <div
        className="flex flex-col items-center justify-center w-fit m-4 border-2 rounded-xl border-indigo-600"
      >
        {/* User Image */}
        <div className="absolute top-0 w-fit border-2 rounded-full border-indigo-600 bg-white">
          <img
            className="rounded-full object-contain"
            src={user.profile_picture}
            alt="User"
            style={{ maxWidth: "90px", maxHeight: "90px" }}
          />
        </div>
{/* TODO: add blur to image and make object-contain */}
        <div>
          <img
            src={user.profile_img}
            className="rounded-xl object-fill"
            alt="User Card"
            style={{ maxWidth: "325px", maxHeight: "300px", minWidth: "325px", minHeight: "300px" }}
          />
        </div>
        <div>
          <h3 className="font-extrabold">{user.name}</h3>
        </div>
      </div>
    </div>
  );
}
