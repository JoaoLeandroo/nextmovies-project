import type { Metadata } from "next";
import Container from "@/components/global/Container";
import BannerMovies from "@/components/global/BannerMovies";
import { loadApiGenrs } from "../../api/service";
import CardMovie from "../_components/CardMovie";
import SectionListMovies from "../_components/SectionListMovies";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NextMovies - Filmes",
};

export default async function DetailMovies() {


  const actionGenrs = await loadApiGenrs("28");
  const comedyGenrs = await loadApiGenrs("35");
  const romanceGenrs = await loadApiGenrs("10749");
  const crimeGenrs = await loadApiGenrs("80");
  const animationGenrs = await loadApiGenrs("16");
  const adventureGenrs = await loadApiGenrs("12");
  const warGenrs = await loadApiGenrs("10752");
  const fictionGenrs = await loadApiGenrs("878");
  const dramaGenrs = await loadApiGenrs("18");
  const familyGenrs = await loadApiGenrs("10751");
  const fantasyGenrs = await loadApiGenrs("14");
  const documentaryGenrs = await loadApiGenrs("99");
  const horrorGenrs = await loadApiGenrs("27");
  const musicGenrs = await loadApiGenrs("10402");
  const mysteryGenrs = await loadApiGenrs("9648");
  const westernGenrs = await loadApiGenrs("37");

  return (
    <div>
      <Container>
        <BannerMovies/>
        <SectionListMovies nameCategorie="Ação">
          {actionGenrs.results.map((movies: any) => (
            <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
              <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
            </Link>
          ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Comedia">
        {comedyGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Romance">
        {romanceGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Crimes">
        {crimeGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Guerra">
        {warGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Ficção ciêntifica">
        {fictionGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Animações">
        {animationGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Aventura">
        {adventureGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Drama">
        {dramaGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Familia">
        {familyGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Fantasia">
        {fantasyGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Documentarios">
        {documentaryGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Terror">
        {horrorGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Musicais">
        {musicGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Misterio">
        {mysteryGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

        <SectionListMovies nameCategorie="Ocidental">
        {westernGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/movies/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.title}/>
              </Link>
            ))}
        </SectionListMovies>

      </Container>
    </div>
  );
}
