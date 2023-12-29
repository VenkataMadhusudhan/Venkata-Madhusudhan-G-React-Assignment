import React from "react";
import { Image, Shimmer } from 'react-shimmer'// Make sure the import path is correct


interface MovieCardProps {
  title: string;
  imageSrc: string;
  rating: number;
  popularity:number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  imageSrc,
  rating,
  popularity
}) => {

  const truncatedPopularity = Math.floor(popularity).toString().slice(0, 4);
  
  return (
    <div className=" bg-white max-w-xs rounded-xl overflow-hidden shadow-lg">
      {/* <img className="w-full" src={imageSrc} alt={title} /> */}
      <Image className="w-full" src={imageSrc} alt={title}
        fallback={<Shimmer width={320} height={200} />}
      />

      <div className="px-6 py-4">
        <div className="flex justify-start items-start font-bold text-xl mb-2 h-14">
        <div className="line-clamp-2">{title}</div>
          </div>
        <div className="mt-3 h-16 flex flex-col justify-between">
          <span className="inline-block bg-gray-200 rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Rating: {rating}
          </span>
          <span className="inline-block bg-gray-200 rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Popularity: {truncatedPopularity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
