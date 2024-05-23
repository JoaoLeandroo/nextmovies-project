import Container from "@/components/global/Container";
import Image from "next/image";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full">
      <Image
        src={"/Banner-01.jpg"}
        width={2430}
        height={1080}
        alt="Banner Página login"
        className="w-full absolute top-0 left-0 -z-10 select-none opacity-75 hidden md:block"
      />
      <Container>
        <div className="w-full h-[90vh] flex items-center justify-center">
          <form className="max-w-[400px] w-full bg-slate-950/90 h-[400px] shadow-xl rounded-lg py-6 px-3 border border-white">
            <h2 className="text-2xl font-bold text-white text-center">
              Next<span className="text-purple-700">MOVIES</span>
            </h2>

            <div className="text-white flex flex-col gap-2 px-3">
              <div className="mt-3">
                <Label>Email</Label>
                <Input autoFocus className="bg-zinc-700/20 h-12" placeholder="Informe o seu email..." />
              </div>
              <div>
                <Label>Senha</Label>
                <Input className="bg-zinc-700/40 h-12" placeholder="Digite sua senha" type="password" />
              </div>
              <Button className="mt-3 font-medium text-xl" type="submit">Entrar</Button>
              <div className="mt-1 text-center">
                <Link href={"/"} className="text-zinc-200 hover:text-zinc-400 transition duration-200">Esqueceu sua senha?</Link>
                <p className="mt-3">
                Não possui conta? <Link href={"/"} className="text-purple-500 hover:text-purple-700 transition duration-300">Cadastre-se</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
