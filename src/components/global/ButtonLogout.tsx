"use client";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";


const ButtonLogout = () => {
  const router = useRouter();
  const [att, setAtt] = useState(1)

  useEffect(() => {
    console.log("Atualizado")
  }, [att])

  const handleLogout = () => {
    setAtt(1)
    Cookie.remove("movie_token");
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
