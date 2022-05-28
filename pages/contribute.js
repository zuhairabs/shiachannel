import { useEffect } from "react";
import { Breadcrumb } from "../components/common";
import { loadScripts } from "../utils/loadScripts";
import { Contribute as ContributeArea } from "../components/Contribute";

function Contribute() {
  useEffect(() => {
    loadScripts();
  }, []);

  return (
    <>
      <Breadcrumb title="Contribute" label="Contribute" />
      <ContributeArea />
    </>
  );
}

export default Contribute;
