import { loadSearch } from "@/app/api/service";
import Container from "@/components/global/Container";
import Link from "next/link";
import CardMovie from "../../_components/CardMovie";

const SearchPage = async ({ params }: any) => {
  const details = await loadSearch(params.id);

  return (
    <Container>
        <div className="flex flex-wrap justify-center mt-5 gap-7">
          {details.results.map((movies: any) => (
            <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id} className="border border-white rounded-lg">
              <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              
            </Link>
          ))}
        </div>
    </Container>
  )
};

export default SearchPage;
