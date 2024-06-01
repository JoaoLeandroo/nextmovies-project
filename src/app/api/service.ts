const API_BASE = "https://api.themoviedb.org/3/"

const loadTheMovieDbAPI = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY_THEMOVIEDB}&query=harry%potter&language=pt-BR&page=1`)
    if (!response.ok) {
        
      return {message: "Error ao buscar os dados."}
      }
  
      return response.json()
}

const loadApiGenrs = async (gen: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=da359e5e2f2da6874a02ea83beb3b3cf&with_genres=${gen}&language=pt-BR&page=1`)
    if(!response.ok) {
      return {message: "Error ao buscar os dados"}
    }

    return response.json()
}

export { loadTheMovieDbAPI, loadApiGenrs }
