// UserCard.js
import React, { useState, useEffect } from "react";
import { fetchRandomUserData } from "./api";

export default function UserCard() {
  const [user, setUser] = useState({
    name: "John Doe",
    profile_picture: "https://placehold.co/90x90",
    profile_img: "https://placehold.co/325x300",
  });

  useEffect(() => {
    async function getRandomUserData() {
      const data = await fetchRandomUserData();
      setUser({
        name: `${data.name.first} ${data.name.last}`,
        profile_picture: data.picture.large,
        profile_img: "https://placehold.co/325x300",
      });
    }

    getRandomUserData();
  }, []);


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

        <div>
          <img
            src={user.profile_img}
            className="rounded-xl object-contain"
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
