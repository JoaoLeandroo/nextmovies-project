"use client"
import Container from "./Container";
import ButtonLogout from "./ButtonLogout";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderBar = () => {

    const location = usePathname()
    
    return ( 
        <header className=" shadow-xl border-b border-zinc-400 py-2">
            <Container>
                <div className="w-full h-11 flex text-white items-center justify-between">
                    <Link href={"/dashboard/movies"}>
                        <h2 className="font-bold">Next<span className="text-purple-700">MOVIES</span></h2>
                    </Link>
                        {
                            location === "/dashboard/movies" ?
                            <div className="flex gap-2">
                                <Link className="text-white font-medium text-lg underline underline-offset-4 decoration-purple-700" href={"/"}>Movies</Link>
                                <Link className="text-white font-medium text-lg" href={"/dashboard/series"}>Series</Link>
                            </div>
                            :
                            location === "/dashboard/series" ?
                            <div className="flex gap-2">
                                <Link className="text-white font-medium text-lg" href={"/"}>Movies</Link>
                                <Link className="text-white font-medium text-lg underline underline-offset-4 decoration-purple-700" href={"/dashboard/series"}>Series</Link>
                            </div>
                            :
                            <div className="flex gap-2">
                            <Link className="text-white font-medium text-lg" href={"/"}>Movies</Link>
                            <Link className="text-white font-medium text-lg" href={"/dashboard/series"}>Series</Link>
                        </div>
                        }
                    <div>
                        <ButtonLogout/>
                    </div>
                </div>
            </Container>
        </header>
     );
}
 
export default HeaderBar;