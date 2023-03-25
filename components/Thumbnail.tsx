import { Movie } from "@/typings";
import Image from "next/legacy/image";
import { baseUrlImg } from "@/constants/movie";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  const image = `${baseUrlImg}${movie?.backdrop_path || movie?.poster_path}`;
  return (
    <div className=" relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        loader={() => image}
        src={image}
        layout="fill"
        alt="image"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
};

export default Thumbnail;
