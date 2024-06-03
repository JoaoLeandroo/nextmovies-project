import Container from "@/components/global/Container";
import { loadDetailsMovies, baseUrlImage } from "@/app/api/service";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextMovies - Detalhes dos filmes",
};

const Details = async ({ params }: any) => {
  const details = await loadDetailsMovies(params.id);

  return (
    <Container>
      <div className="mb-11">
        {details ? (
          <div className="w-full max-w-[720px] mx-auto flex flex-col justify-center items-center mt-8 gap-3">
            
            <h2 className="text-3xl font-semibold text-white text-center">{details.title}</h2>
              <Image
                src={`${baseUrlImage}${details.backdrop_path}`}
                width={720}
                height={0}
                alt={details.title}
                className="h-auto object-cover rounded-lg w-full select-none"
              />

            <p className="text-white font-medium text-md text-center">
                {details.overview}
            </p>
            <Button className="w-full font-medium text-xl">
                <Link className="w-full h-full" href={`https://youtube.com/results?search_query=${details.title} trailer`} target="blank">
                View Trailler                           
                </Link>
            </Button>
          </div>
        ) : (          
          <div className="text-white text-7xl font-bold">carregando...</div>
        )}
      </div>
      
    </Container>
  );
};

export default Details;
