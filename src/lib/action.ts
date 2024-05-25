"use server"

import { z } from "zod"
import { prisma } from './prisma';
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"

const UserSchema = z.object({
    name: z.string().min(3, {message: "Nome invalido"}),
    email: z.string().email({message: "Informe um email valido."}),
    password: z.string().min(6, {message: "A senha deve ter no minimo 6 caracters."}),
})

// Register user
export const register = async (prevSate: any, formData: FormData) => {
    const validateFields = UserSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if(!validateFields.success) {
        return {
            Error: validateFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validateFields.data

    const existingUser = await prisma.registerUser.findUnique({
        where: { email },
      })

    if(existingUser) {        
        return {
            Error: {
                email: ["Email já está em uso"]
            }
        }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await prisma.registerUser.create({
            data: {
                name: validateFields.data.name,
                email: validateFields.data.email,
                password: hashedPassword
            },
        })
    }catch(error) {
        return {
            message: "Failed to create new User."
        }
    }
    redirect("/")
}


export const loginUser = async (email: string, password: string) => {

    const user = await prisma.registerUser.findUnique({
        where: {
            email,
        }
    })

    if(!user) {
        return null
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return null; 
      }
    
    redirect("/dashboard") 
}