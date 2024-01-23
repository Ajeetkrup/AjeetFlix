import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        <Link href={"/"}>
          <li className="mx-2 my-5 text-slate-100 hover:text-slate-300">
            Home
          </li>
        </Link>
        <Link href={"/about"}>
          <li className="mx-2 my-5 text-slate-100 hover:text-slate-300">
            About
          </li>
        </Link>
        <Link href={"/movie"}>
          <li className="mx-2 my-5 text-slate-100 hover:text-slate-300">
            Movie
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className="mx-2 my-5 mr-4 text-slate-100 hover:text-slate-300">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
