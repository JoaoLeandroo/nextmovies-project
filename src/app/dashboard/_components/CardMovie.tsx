import Image from "next/image";

interface CardMovieProps {
  imageUrl: string;
  alt: string;
}

const CardMovie = ({ imageUrl, alt }: CardMovieProps) => {
  return (
    <div className="w-[160px] h-[240px] md:w-[200px] md:h-[280px] relative overflow-y-hidden hover:z-30 bg-zinc-500/70 opacity-85 hover:opacity-100 rounded-lg cursor-pointer transition duration-300 hover:scale-y-110 hover:scale-x-125">
      <Image
        src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
        width={200}
        height={280}
        alt={alt}
        className="object-cover w-full rounded-lg select-none"
      />
    </div>
  );
};

export default CardMovie;
