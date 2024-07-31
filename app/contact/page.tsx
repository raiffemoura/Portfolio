import ContactCard from "../_components/contactCard";
import Menu from "../_components/menu";

const ContactPage = () => {
  return (
    <div className="scrollbar-hidden flex h-[100vh] w-[100vw] flex-col justify-between overflow-auto bg-[url('./_assets/colorfull.jpg')] bg-cover bg-center">
      <ContactCard />
      <div className="mb-4 flex items-center justify-center">
        <Menu selected="contact" />
      </div>
    </div>
  );
};

export default ContactPage;
