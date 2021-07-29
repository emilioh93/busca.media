import React from "react";

const MyList = () => {
  return (
    <div>
      <span className="pageTitle">My List</span>
      {/* <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      ></Genres>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            ></SingleContent>
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination
          setPage={setPage}
          numOfPages={numOfPages}
        ></CustomPagination>
      )} */}
    </div>
  );
};

export default MyList;
