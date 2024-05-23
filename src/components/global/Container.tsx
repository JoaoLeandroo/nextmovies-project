import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return ( 
        <div className="max-w-[1920px] mx-auto px-4 md:px-10">
            {children}
        </div>
     );
}
 
export default Container;