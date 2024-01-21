import Hero from "../components/Hero";
import about from "../../../public/about.svg";

const About = () => {
  return (
    <div>
      <Hero title={"Our Story"} imageUrl={about} />
    </div>
  );
};

export default About;
