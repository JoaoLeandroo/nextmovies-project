
interface SectionListMoviesProps {
    children: React.ReactNode;
    nameCategorie: string;
}

const SectionListMovies: React.FC<SectionListMoviesProps> = ({children, nameCategorie}) => {
    return ( 
        <section className="w-full mt-2">
        <h2 className="text-zinc-400 text-xl font-semibold">{nameCategorie}</h2>
        <div className="flex gap-x-4 overflow-x-scroll pt-4 pb-7 [&::-webkit-scrollbar]:hidden">
            {children}
        </div>
      </section>
     );
}
 
export default SectionListMovies;