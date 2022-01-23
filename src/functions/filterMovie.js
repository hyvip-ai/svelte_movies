const filterMovie = (movie,val) => {
    return movie.filter((item) => {
      return item.title_english.toLowerCase().includes(val.toLowerCase());
    });
  };

  export {filterMovie}