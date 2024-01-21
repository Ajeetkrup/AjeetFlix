import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        <Link href={"/"}>
          <li className="mx-2 my-5 text-slate-100">Home</li>
        </Link>
        <Link href={"/"}>
          <li className="mx-2 my-5 text-slate-100">About</li>
        </Link>
        <Link href={"/"}>
          <li className="mx-2 my-5 text-slate-100">Movie</li>
        </Link>
        <Link href={"/"}>
          <li className="mx-2 my-5 mr-4 text-slate-100">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
