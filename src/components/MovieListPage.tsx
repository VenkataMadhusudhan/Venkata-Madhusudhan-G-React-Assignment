import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import useFetch, { MovieData } from './useFetch'; // Assuming MovieData is a type/interface for the fetched movie data
import { ShimmerThumbnail } from 'react-shimmer-effects';
import DropDown from './DropDown';
import Header from './Header';
import Footer from './Footer';

const MovieListPage: React.FC = () => {
  const [sortedData, setSortedData] = useState<MovieData[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [sortType, setSortType] = useState<string>("");

  console.log("inputValue", inputValue);

  const query = inputValue.length<1 ? '/movie/popular' : `/search/multi?query=${inputValue}&&page=1`;
  const { data: moviesData, loading, error } = useFetch(query);

  useEffect(() => {
    if (moviesData) {
      setSortedData(moviesData.results);
    }
  }, [inputValue, moviesData]);

  console.log("sortedData", sortedData);

  useEffect(() => {
    if (sortedData && sortType !== '') {
      if (sortType === 'Popularity_Desc') {
        const sortedByPopularityDesc = [...sortedData].sort((a, b) => b.popularity - a.popularity);
        setSortedData(sortedByPopularityDesc);
      } else if (sortType === 'Popularity_Asc') {
        const sortedByPopularityAsc = [...sortedData].sort((a, b) => a.popularity - b.popularity);
        setSortedData(sortedByPopularityAsc);
      } else if (sortType === 'Release_Desc') {
        const sortedByReleaseDesc = [...sortedData].sort((a, b) => {
          const dateA = a.release_date || a.first_air_date;
          const dateB = b.release_date || b.first_air_date;
          return new Date(dateB).getTime() - new Date(dateA).getTime();
        });
        setSortedData(sortedByReleaseDesc);
      } else if (sortType === 'Release_Asc') {
        const sortedByReleaseAsc = [...sortedData].sort((a, b) => {
          const dateA = a.release_date || a.first_air_date;
          const dateB = b.release_date || b.first_air_date;
          return new Date(dateA).getTime() - new Date(dateB).getTime();
        });
        setSortedData(sortedByReleaseAsc);
      }
    }
  }, [sortType, sortedData]);
  

  return (
    <div className=' bg-black'>

    
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <DropDown setSortType={setSortType} />
      <div className=" bg-black min-h-screen flex flex-row justify-center flex-wrap gap-4  mb-5">
        {loading && [...Array(20)].map((_, index) => (
          <ShimmerThumbnail key={index} height={330} width={320} rounded />
        ))}
        {error && <p>{error}</p>}
        {sortedData &&
          sortedData.map((movie: MovieData) => (
            movie.backdrop_path && <MovieCard
              key={movie.id}
              title={movie.title ? movie.title : movie.name}
              imageSrc={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            
              rating={movie.vote_average}
              popularity={movie.popularity}
            />
          ))}
      </div>
      <Footer />
      </div>
  );
};

export default MovieListPage;
