"use server"
import { z } from "zod"
import { prisma } from './prisma';
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
import { cookies } from 'next/headers'

const UserSchema = z.object({
    name: z.string().min(3, {message: "Nome invalido"}),
    email: z.string().email({message: "Informe um email valido."}).transform(email => email.toLowerCase()),
    password: z.string().min(6, {message: "A senha deve ter no minimo 6 caracters."}),
})

type RegisterUserError = {
    name?: string[];
    email?: string[];
    password?: string[];
    general?: string;
};


export const RegisterUser = async (prevSate: any, formData: FormData): Promise<{ Error?: RegisterUserError }> => {
    try {
        const validateFields = UserSchema.safeParse(
          Object.fromEntries(formData.entries())
        );
    
        if (!validateFields.success) {
          return {
            Error: validateFields.error.flatten().fieldErrors,
          };
        }
      const { name, email, password } = validateFields.data;

      const existingUser = await prisma.registerUser.findUnique({
        where: { email },
      });
  
      if (existingUser) {
        return {
          Error: {
            email: ['Email já em uso.'],
          },
        };
      }

      const hashPassword = await bcrypt.hash(password, 10);

      await prisma.registerUser.create({
        data: {
          name,
          email,
          password: hashPassword,
        },
      });
  
    } catch (error) {
      console.error('Error registering user:', error);
      return {};
    }

    redirect("/")
  };
  

const LoginSchema = z.object({
    email: z.string().email({message: "Insira um email valido."}).transform(email => email.toLowerCase()),
    password: z.string().min(6, {message: "A senha deve ter no minimo 6 caracters."}),
})

type LoginUserError = {
    email?: string[];
    password?: string[];
};


export const LoginUser = async (prevSate: any, formData: FormData): Promise<{ Error?: LoginUserError }> => {

    try {
        const validatedFields = LoginSchema.safeParse(
            Object.fromEntries(formData.entries())
        );
        
          if(!validatedFields.success) {
            return {
                Error: validatedFields.error.flatten().fieldErrors,
            }
        }
    
        const { email, password } = validatedFields.data
    
        const user = await prisma.registerUser.findUnique({
            where: { email }
        })
    
        if(!user) {
            return {
                Error: {
                    email: ["Email ou senha incorretos."],
                    password: ["Email ou senha incorretos"]
                }
            }
        }
    
        const isValidPassword = await bcrypt.compare(password, user.password);
    
        if (!isValidPassword) {
            return {
                Error: {
                    password: ["Email ou senha incorretos."],
                    email: ["Email ou senha incorretos."]
                }
            } 
        }

    }catch(error) {
        console.error('Error ao fazer login:', error);
        return {};
    }


    cookies().set('movie_token', 'testingCookieApplication')
    redirect("/dashboard/movies")
}

