"use client"
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const SearchButton = () => {

    const [inputSearch, SetInputSearch] = useState<string>("")
    const router = useRouter();

    const buttonClick = () => {
        if(inputSearch === "") return
        SetInputSearch("")
        router.push(`/dashboard/search/${inputSearch}`)
    }

    const keyDownEnter = (e: any) => {
        if(e.key === "Enter") {
            if(inputSearch === "") return
            SetInputSearch("")
            router.push(`/dashboard/search/${inputSearch}`)
            return
        }
    }

    return ( 
        <div className="flex relative items-center justify-center">
            <Input type="text" placeholder="buscar..." onKeyDown={keyDownEnter} value={inputSearch} onChange={(e: any) => SetInputSearch(e.target.value)} className="h-8 pl-2 pr-6 w-24 md:w-[150px] bg-zinc-600/80 border border-zinc-300"/>
            
            <button className="absolute right-1" onClick={buttonClick}>
                <Search size={20} className="w-5 h-5 cursor-pointer text-white hover:text-purple-700 transition duration-200" />
            </button>
        </div>
     );
}
 
export default SearchButton;