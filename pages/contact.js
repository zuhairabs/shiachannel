import { useEffect } from "react";
import { Breadcrumb } from "../components/common";
import { ContactForm } from "../components/Contact";
import { loadScripts } from "../utils/loadScripts";

function Contact() {
  useEffect(() => {
    loadScripts();
  }, []);

  return (
    <>
      <Breadcrumb title="Contact Us" label="Contact" />
      <ContactForm />
    </>
  );
}

export default Contact;
