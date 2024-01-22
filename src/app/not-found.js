import Link from "next/link";

const NotFound = () => {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
      <h2 className="font-semibold my-2">Not Found</h2>
      <p className="my-2">Could not find requested resource</p>
      <Link href="/">
        <button className="p-2 bg-slate-950 text-slate-50 hover:bg-slate-100 hover:text-slate-950 hover:border-2 hover:border-slate-950 rounded-[1.5rem] text-sm">
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
