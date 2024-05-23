import Link from "next/link";
import Container from "./Container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Send } from "lucide-react";

const FooterBar = () => {
  return (
    <footer>
      <Container>
        <div className="w-full py-4 text-white mt-0 md:mt-11 flex flex-col">
          <div className="grid grid-cols-2 md:flex gap-4 justify-between">
            <div className="flex flex-col gap-2">
                <p className="mb-2">Alguma dúvida? ligue 0800 999</p>
              <Link
                className="text-zinc-300 hover:text-zinc-500 transition duration-100 hover:underline underline-offset-4"
                href={"#"}
              >
                <p>Perguntas Frequentes</p>
              </Link>
              <Link
                className="text-zinc-300 hover:text-zinc-500 transition duration-100 hover:underline underline-offset-4"
                href={"#"}
              >
                <p>Central de ajuda</p>
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-right mr-2 md:mr-0 md:text-left">
              <Link
                className="text-zinc-300 hover:text-zinc-500 transition duration-100 hover:underline underline-offset-4"
                href={"#"}
              >
                <p>Termos de uso</p>
              </Link>
              <Link
                className="text-zinc-300 hover:text-zinc-500 transition duration-100 hover:underline underline-offset-4"
                href={"#"}
              >
                <p>Privacidade</p>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
                <p>{new Date().getFullYear()} &copy; NextMovies</p>

            </div>

          </div>
            <div className="mt-5 flex flex-col justify-around">
                <Label className="mb-2 text-zinc-300 font-semibold text-xl">quer receber todas as novidades?</Label>
                <div className="relative max-w-[500px] w-full">
                    <Input placeholder="Informe o seu email!" className="w-full h-12 bg-zinc-700/20"/>
                    <Send className="w-6 h-6 text-purple-700 absolute top-3 right-3 cursor-pointer hover:scale-125 transition duration-200 hover:opacity-75"/>
                </div>
            </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterBar;
