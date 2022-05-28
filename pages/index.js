import { useEffect } from "react";
import { Hero, About, Service, Pillars, Support } from "../components/Home";
import Events from "../components/common/Events";
import { loadScripts } from "../utils/loadScripts";

export default function Home() {
  useEffect(() => {
    loadScripts();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Service />
      <Pillars />
      <Events />
      <Support />
    </>
  );
}
