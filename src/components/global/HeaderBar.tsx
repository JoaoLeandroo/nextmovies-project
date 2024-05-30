import Container from "./Container";
import ButtonLogout from "./ButtonLogout";

const HeaderBar = () => {
    return ( 
        <header className=" shadow-xl border-b border-zinc-400 py-2">
            <Container>
                <div className="w-full h-11 flex text-white items-center justify-between">
                    <div>
                        <h2 className="font-bold">Next<span className="text-purple-700">MOVIES</span></h2>
                    </div>
                    <div>
                        <ButtonLogout/>
                    </div>
                </div>
            </Container>
        </header>
     );
}
 
export default HeaderBar;