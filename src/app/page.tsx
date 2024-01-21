import home from "../../public/home.svg";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero title={"Let's watch movie together"} imageUrl={home} />
    </main>
  );
}
