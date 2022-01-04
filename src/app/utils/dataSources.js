


const dataSources = {
    getGif:(search, page)=>{
        return `https://api.giphy.com/v1/gifs/search?api_key=izDaWHrvyNBCKNYtttCdFdsF5tpiZNsT&q=${search}&limit=25&offset=${page * 25}&rating=g&lang=en`
    },
    getTrendingGif:(page)=>{
        return `https://api.giphy.com/v1/gifs/trending?offset=${page * 25}&api_key=izDaWHrvyNBCKNYtttCdFdsF5tpiZNsT&pingback_id=17e1ea4b348e0cc2&rating=g`;    
    }
}

export default dataSources;