import Container from "@/components/global/Container";
import { loadTheMovieDbAPI } from "../api/service";
import CardMovie from "./_components/CardMovie";

export default async function Dashboard() {
  const data = await loadTheMovieDbAPI();
  const data2 = data.results;

  return (
    <div>
    <Container>
      <div className="px-14 mt-4 py-5 overflow-x-scroll overflow-hidden [&::-webkit-scrollbar]:hidden flex gap-x-3">

            {data2.map((items: any) => (
              <div key={items.id} className="w-[200px] h-[240px] flex items-center justify-center">

                  <CardMovie imageUrl={items.poster_path} alt={items.title} />
              </div>
            ))}
      </div>
    </Container>
    </div>
  );
}
