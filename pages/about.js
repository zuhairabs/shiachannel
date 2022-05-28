import { useEffect } from "react";
import { About as AboutArea, Services } from "../components/About";
import { loadScripts } from "../utils/loadScripts";
import { Events, Breadcrumb } from "../components/common";

function About() {
  useEffect(() => {
    loadScripts();
  }, []);

  return (
    <>
      <Breadcrumb title="About Us" label="About" />
      <AboutArea />
      <Services />
      <Events />
    </>
  );
}

export default About;
