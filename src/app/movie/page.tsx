import { resolve } from "path";
import MovieCard from "../components/MovieCard";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const RAPID_API_URL = process.env.RAPID_API_URL ?? "";
  const RAPID_API_KEY = process.env.RAPID_API_KEY ?? "";
  const RAPID_API_ENDPOINT = process.env.RAPID_API_ENDPOINT ?? "";
  const url = RAPID_API_URL ?? "";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_ENDPOINT,
    },
  };

  let movies;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    movies = data?.titles;
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="flex flex-wrap mx-[20rem] mt-4">
      {movies?.map(
        (movie: {
          jawSummary: {
            id: string;
            title: string;
            synopsis: string;
            backgroundImage: { url: string };
          };
        }) => {
          return (
            <MovieCard key={movie?.jawSummary?.id} movie={movie?.jawSummary} />
          );
        }
      )}
    </div>
  );
};

export default Movie;
