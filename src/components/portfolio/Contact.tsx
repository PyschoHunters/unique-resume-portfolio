
import ContactTitle from "./contact/ContactTitle";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-blue-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ContactTitle />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
