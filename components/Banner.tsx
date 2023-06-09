import { Movie } from "@/typings";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { baseUrl } from "@/constants/movie";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  const banner = `${baseUrl}${movie?.backdrop_path || movie?.poster_path}`;

  return (
    <div className=" flex flex-col space-y-2 py-24 md:space-y-4 md:h-[65vh] md:justify-end md:pb-12">
      <div className=" absolute top-0 left-0 min-h-[95vh] w-full -z-10">
        <Image
          loader={() => banner}
          src={banner}
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-5xl  font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className=" max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl text-shadow-lg">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <PlayIcon className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button className="bannerButton bg-[gray]/70"><InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/> More Info</button>
      </div>
    </div>
  );
};

export default Banner;
