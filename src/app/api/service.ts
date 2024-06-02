
const baseUrlImage = "https://image.tmdb.org/t/p/original/"

// Search Movies categories
const loadApiGenrs = async (gen: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.KEY_THEMOVIEDB}&with_genres=${gen}&language=pt-BR&page=1`)
    if(!response.ok) {
      return {message: "Error ao buscar os dados"}
    }

    return response.json()
}

// Search Series categories
const loadApiSeries = async(gen:string) => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.KEY_THEMOVIEDB}&with_genres=${gen}&language=pt-BR&page=1`)
  if(!response.ok) {
    return {message: "Error ao buscar os dados"}
  }

  return response.json()
}

// Details series
const loadDetailsSeries = async (detail: any) => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${detail}?api_key=${process.env.KEY_THEMOVIEDB}&language=pt-BR`)
  if(!response.ok) {
    return {message: "Error ao buscar os dados"}
  }

  return response.json()
}

const loadDetailsMovies = async (detail: any) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${detail}?api_key=${process.env.KEY_THEMOVIEDB}&language=pt-BR`)
  if(!response.ok) {
    return {message: "Error ao buscar os dados"}
  }

  return response.json()
}

const loadNowPlaying = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.KEY_THEMOVIEDB}&language=pt-BR`)
  if(!response.ok) {
    return {message: "Falha ao buscar dados"}
  }

  return response.json()
}


export { loadApiGenrs, loadApiSeries, loadDetailsSeries, loadDetailsMovies, baseUrlImage, loadNowPlaying }