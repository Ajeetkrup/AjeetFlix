import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/log.jpg";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="bg-indigo-500 min-h-12 flex justify-between">
      <div className="mx-3 py-2">
        <Link href={"/"}>
          <Image
            className="rounded-md"
            src={logo}
            width={50}
            height={50}
            alt={"logo"}
          />
        </Link>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
