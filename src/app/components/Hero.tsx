import Image from "next/image";
import Link from "next/link";

const Hero = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <div className="bg-gradient-to-r from-sky-500 from-25% via-sky-400 to-cyan-300 min-h-[25vw] flex justify-center">
      <div className="w-6/12 py-[5rem] px-6">
        <h1 className="uppercase font-normal text-xl tracking-widest mb-4 pt-4">
          {title}
        </h1>
        <p className="text-slate-200 my-4">
          From award-winning dramas to blockbuster action movies, we&apos;ve got
          you covered. Browse our selection of the latest and greatest movies,
          and find your new favorite today.
        </p>
        <Link href="/movies">
          <button className="p-2 rounded-[1.25rem] border-black border-2 bg-white hover:bg-slate-200 my-4">
            Explore Movies
          </button>
        </Link>
      </div>
      <div className="mx-20 py-[5rem]">
        <Image src={imageUrl} alt="hero-image" width={200} height={200} />
      </div>
    </div>
  );
};

export default Hero;
