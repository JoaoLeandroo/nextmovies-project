import Image from "next/image";
import { loadNowPlaying, baseUrlImage } from "@/app/api/service";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BannerMovies = async () => {
  const dados = await loadNowPlaying();

  return (
    <Carousel className="relative w-full overflow-x-hidden">
      <CarouselContent className="w-full">
        {dados.results.map((result: any) => (
                    <CarouselItem key={result.id}>
                    <div className="max-w-[1020px] w-full max-h-[400px] h-auto mx-auto rounded-lg mt-2 shadow-xl relative bg-zinc-700/60 overflow-hidden">
                      <Link href={`/dashboard/movies/details/${result.id}`}>
                        <div className="absolute z-10 w-[80%] lg:w-[70%] text-white left-3 top-10 md:top-20 md:left-10 p-3 rounded-lg bg-neutral-700/20 select-none">
                          <h2 className={`font-bold lg:text-4xl text-2xl`}>
                            {result.title}
                          </h2>
                          <p className="font-medium text-xs hidden md:block">
                            {result.overview}
                          </p>
                        </div>
                        <Image
                          src={`${baseUrlImage}${result.backdrop_path}`}
                          width={720}
                          height={0}
                          alt={result.title}
                          priority={true}
                          quality={100}
                          className="w-full h-auto relative top-0 object-cover lg:-top-20 select-none opacity-60"
                        />
                      </Link>
                    </div>
                  </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full h-11 relative">
        <CarouselPrevious className="absolute bottom-0 left-10"/>
        <CarouselNext className="absolute bottom-0 right-10"/>
      </div>
    </Carousel>
  );
};

export default BannerMovies;
