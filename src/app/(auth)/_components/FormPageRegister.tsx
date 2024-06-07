"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import ButtonForm from "./ButtonForm";
import { RegisterUser } from "@/lib/action";
import { useFormState } from "react-dom";

const FormPageRegister = () => {

    const [state, formAction] = useFormState(RegisterUser, null);

    return ( 
        <form
            action={formAction} 
            className="max-w-[480px] w-full bg-slate-950/90 flex flex-col gap-y-2 shadow-xl rounded-lg py-10 px-5 border border-white">
            <div className="text-center">
                <h2 className="text-white font-semibold text-2xl">Next<span className="text-purple-700">Movies</span></h2>
            </div>

            <div>
              <Label className="text-white semibold" htmlFor="name">Nome</Label>
              <Input
                className="h-11 bg-neutral-800/20 text-white"
                type="text"
                name="name"
                id="name"
                placeholder="Digite o seu nome"
              />
            <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{state?.Error && state?.Error?.name ? state?.Error?.name?.[0] : null}</p>
            </div>
            </div>

            <div>
              <Label className="text-white semibold" htmlFor="email">Email</Label>
              <Input
                className="h-11 bg-neutral-800/20 text-white"
                type="text"
                name="email"
                id="email"
                placeholder="emailexample@example.com"
              />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
            </div>
            </div>

            <div>
              <Label className="text-white semibold" htmlFor="password">Senha</Label>
              <Input
                className="h-11 bg-neutral-800/20 text-white"
                type="password"
                name="password"
                id="password"
                placeholder="Informe sua senha"
              ></Input>
                        <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.password}</p>
            </div>
            </div>

            <div className="text-center mt-3">
              <ButtonForm textButton="Registrar"/>
            </div>

            <div>
              <p className="text-zinc-400 text-center">
                Já possui conta? <Link
                  className="text-zinc-500 hover:text-zinc-500/60 transition duration-200"
                  href={"/"}
                >
                  Conecte-se
                </Link>
              </p>
            </div>
          </form>
     );
}
 
export default FormPageRegister;