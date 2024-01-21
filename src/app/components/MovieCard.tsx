import Image from "next/image";
import Link from "next/link";

const MovieCard = ({
  movie,
}: {
  movie: {
    id: string;
    title: string;
    synopsis: string;
    backgroundImage: { url: string };
  };
}) => {
  const imgUrl = movie?.backgroundImage?.url;
  return (
    <div className="w-[200px] h-[266px] rounded-md shadow-md m-2">
      <div>
        <Image src={imgUrl} alt="movie-img" height={128} width={200} />
      </div>
      <div className="flex justify-center flex-col">
        <div className="font-semibold my-1 mx-4">{movie?.title}</div>
        <div className="text-slate-300 my-1 mx-4 text-xs">
          {movie?.synopsis?.substring(0, 100) + "..."}
        </div>
        <Link href={`/movie/${movie?.id}`}></Link>
        <div className="flex justify-center py-1">
          <button className="p-2 bg-slate-950 text-slate-50 hover:bg-slate-100 hover:text-slate-950 hover:border-2 hover:border-slate-950 rounded-[1.5rem] text-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
