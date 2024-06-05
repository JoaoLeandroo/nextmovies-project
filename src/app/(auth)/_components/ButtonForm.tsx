"use client"
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface Props {
    textButton: string;
}

const ButtonForm = ({ textButton }: Props) => {

    const { pending } = useFormStatus()

    return ( 
    <Button className="font-medium w-full" disabled={pending} type="submit">
        {pending ? <span className="loader"></span> : `${textButton}`}
    </Button> );
}
 
export default ButtonForm;