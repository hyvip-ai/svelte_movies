const fetchDataToShow = async (page) => {
  return fetch(
    `https://yts.mx/api/v2/list_movies.json?page=${page}`
  ).then(data=>data.json()).then(res=>{
    return res.data.movies
  })
};

export { fetchDataToShow };
