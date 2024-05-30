"use client";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

const ButtonLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookie.remove("movie_token");
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-5 py-2 rounded shadow-xl font-medium text-white bg-red-400 hover:bg-red-400/70 transition duration-200"
    >
      Logout
    </button>
  );
};

export default ButtonLogout;
