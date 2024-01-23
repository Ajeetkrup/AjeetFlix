import Image from "next/image";

const DynamicMovie = async ({ params }: { params: { id: string } }) => {
  const RAPID_API_MOVIE_URL = process.env.RAPID_API_MOVIE_URL ?? "";
  const RAPID_API_KEY = process.env.RAPID_API_KEY ?? "";
  const RAPID_API_ENDPOINT = process.env.RAPID_API_ENDPOINT ?? "";
  const url = RAPID_API_MOVIE_URL + `?ids=${params?.id}&lang=en` ?? "";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_ENDPOINT,
    },
  };

  let movie;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    movie = data[0]?.details;
  } catch (err) {
    console.log(err);
  }
  return (
    <div className="ml-20 my-8">
      <h4 className="my-4 text-slate-400 font-normal">
        Movie / {movie?.title}
      </h4>
      <div>
        <Image
          src={movie?.backgroundImage?.url}
          alt="movie-image"
          height={300}
          width={400}
        />
      </div>
      <div className="my-4">
        <div className="font-semibold my-2">{movie?.title}</div>
        <div>{movie?.synopsis}</div>
        <div>Release: {movie?.releaseYear}</div>
        <div>Episodes: {movie?.episodeCount ?? "0"}</div>
      </div>
    </div>
  );
};

export default DynamicMovie;
