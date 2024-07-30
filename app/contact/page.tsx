import ContactCard from "../_components/contactCard";
import Menu from "../_components/menu";

const ContactPage = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-between bg-[url('./_assets/fundo-preto.jpg')] bg-cover bg-center">
      <ContactCard />
      <div className="mb-4 flex items-center justify-center">
        <Menu selected="contact" />
      </div>
    </div>
  );
};

export default ContactPage;
