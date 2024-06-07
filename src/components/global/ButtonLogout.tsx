"use client";
import Cookie from "js-cookie";
import { LogOut } from "lucide-react";

const ButtonLogout = () => {

  const handleLogout = async () => {
    Cookie.remove("movie_token");
    console.log("inite...")
    await new Promise((resolver) => setTimeout(resolver, 1000))
    console.log("end")
    window.location.href = "/"
  };

  return (
    <button
      onClick={handleLogout}
    >
      <LogOut className="opacity-75 hover:opacity-100 hover:text-purple-700 transition duration-200"/>
    </button>
  );
};

export default ButtonLogout;
