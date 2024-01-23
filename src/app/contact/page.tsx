import Hero from "../components/Hero";
import contact from "../../../public/about1.svg";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Hero title={"Contact us"} imageUrl={contact} />
      <ContactCard />
      <ContactForm />
    </div>
  );
};

export default Contact;
