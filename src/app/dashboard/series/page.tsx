import Container from "@/components/global/Container";
import BannerMovies from "@/components/global/BannerMovies";
import { loadApiSeries } from "@/app/api/service";
import CardMovie from "../_components/CardMovie";
import SectionListMovies from "../_components/SectionListMovies";
import Link from "next/link";

export default async function Series() {

  const actionGenrs = await loadApiSeries("10759");
  const comedyGenrs = await loadApiSeries("35");
  const newsGenrs = await loadApiSeries("10763");
  const crimeGenrs = await loadApiSeries("80");
  const animationGenrs = await loadApiSeries("16");
  const realityGenrs = await loadApiSeries("10764");
  const warGenrs = await loadApiSeries("10768");
  const fictionGenrs = await loadApiSeries("10765");
  const dramaGenrs = await loadApiSeries("18");
  const familyGenrs = await loadApiSeries("10751");
  const documentaryGenrs = await loadApiSeries("99");
  const kidsGenrs = await loadApiSeries("10762");
  const mysteryGenrs = await loadApiSeries("9648"); 
  const westernGenrs = await loadApiSeries("37");


  return (
    <div>
      <Container>
        <BannerMovies/>

        <SectionListMovies nameCategorie="Ação e Aventura">
        {actionGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Comedia">
        {comedyGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="news">
        {newsGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Crimes">
        {crimeGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Guerra e Politica">
        {warGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Ficção ciêntifica e Fantasia">
        {fictionGenrs.results.map((movies: any) => (
              <Link href={"/dashboard/details"} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Animações">
        {animationGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Reality">
        {realityGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Drama">
        {dramaGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Familia">
        {familyGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Documentarios">
        {documentaryGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Kids">
        {kidsGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Misterio">
        {mysteryGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
        <SectionListMovies nameCategorie="Ocidental">
        {westernGenrs.results.map((movies: any) => (
              <Link href={`/dashboard/series/details/${movies.id}`} key={movies.id}>
                <CardMovie imageUrl={movies.poster_path} alt={movies.name}/>
              </Link>
            ))}
        </SectionListMovies>
      </Container>
    </div>
  );
}
