import Container from "@/components/global/Container";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return ( 
        <Container>
            <div className="w-full text-white h-[60vh] flex items-center justify-center">
                <div className="max-w-[400px] w-full flex flex-col items-center justify-center">
                    <Image
                        src={"/not-found.gif"}
                        width={400}
                        height={0}
                        alt="Image not found"
                        className="w-full h-auto rounded-xl"
                    />
                    <p className="text-xl font-medium text-zinc-400">Página não encontrada</p>
                    <Link href={"/"} className="text-zinc-500 hover:opacity-75 transition duration-300">Retorne a página inicial.</Link>
                </div>
            </div>
        </Container>
     );
}
 
export default NotFound;