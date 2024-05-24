"use client"

import Container from "@/components/global/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";

const RegisterPage = () => {
  const [state, formState] = useFormState(register, null);

  return (
    <div className="relative w-full">
      <Image
        src={"/banner-register.jpg"}
        width={2430}
        height={1080}
        alt="Banner Página login"
        className="w-full absolute top-0 left-0 -z-10 select-none opacity-75 hidden md:block"
      />
      <Container>
        <div className="w-full h-[90vh] flex items-center justify-center">
          <form
            action={formState}
            className="max-w-[400px] w-full bg-slate-950/90 shadow-xl rounded-lg py-6 px-3 border border-white"
          >
            <h2 className="text-2xl font-bold text-white text-center">
              Next<span className="text-purple-700">MOVIES</span>
            </h2>

            <div className="text-white flex flex-col gap-2 px-3">
              <div className="mt-3">
                <Label htmlFor="name">Seu nome</Label>
                <Input
                  autoFocus
                  className="bg-zinc-700/20 h-12"
                  placeholder="Informe o seu nome"
                  name="name"
                  id="name"
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.name}
                  </p>
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  className="bg-zinc-700/20 h-12"
                  placeholder="Informe o seu email..."
                  type="email"
                  name="email"
                  id="email"
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.email}
                  </p>
                </div>
              </div>

              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  className="bg-zinc-700/40 h-12"
                  placeholder="Digite sua senha"
                  type="password"
                  name="password"
                  id="password"
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  <p className="mt-2 text-sm text-red-500">
                    {state?.Error?.password}
                  </p>
                </div>
              </div>

              <Button className="mt-3 font-medium text-xl" type="submit">
                Entrar
              </Button>
              <div className="mt-1 text-center">
                <p className="mt-3">
                  Já possui conta?{" "}
                  <Link
                    href={"/"}
                    className="text-purple-500 hover:text-purple-700 transition duration-300"
                  >
                    Faça login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
