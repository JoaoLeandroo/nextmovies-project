import { Jersey_10 } from "next/font/google";
import Image from "next/image";

const font_tittle = Jersey_10({ subsets: ["latin"], weight: ["400"] });

interface BannerMoviesProps {
    children: React.ReactNode;
    titulo: string
}

const BannerMovies = () => {
    return ( 
        <div className="max-w-[1000px] w-full max-h-[400px] h-auto mx-auto rounded-lg mt-2 shadow-xl relative bg-purple-700 overflow-hidden">
            <h2 className={`${font_tittle.className} absolute text-white font-bold text-7xl z-10 top-20 left-20 select-none`}>Kong fu panda</h2>
            <Image
                src={"https://image.tmdb.org/t/p/original/kYgQzzjNis5jJalYtIHgrom0gOx.jpg"}
                width={720}
                height={0}
                alt="Kong Fu Panda"
                className="w-full h-auto relative top-0 lg:-top-20 select-none"
            />
        </div>
     );
}
 
export default BannerMovies;