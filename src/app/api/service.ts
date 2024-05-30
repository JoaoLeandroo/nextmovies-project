const API_BASE = "https://api.themoviedb.org/3/"

const loadTheMovieDbAPI = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY_THEMOVIEDB}&query=harry%potter&language=pt-BR&page=1`)
    if (!response.ok) {
        
      return {message: "erro ao buscar requisição"}
      }
  
      return response.json()
}

export { loadTheMovieDbAPI }
