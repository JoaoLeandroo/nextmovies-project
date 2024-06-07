"use client";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { LogOut } from "lucide-react";

const ButtonLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    Cookie.remove("movie_token");
    console.log("initial")
    await new Promise((resolver) => setTimeout(resolver, 2000))
    console.log("end...")
    router.push("/");
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
