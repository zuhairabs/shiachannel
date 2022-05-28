import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";

export default function Switcher() {
  return (
    <>
      <div className="my_switcher d-none d-lg-block">
        <ul>
          <li style={{ width: "25px", height: "40px" }} title="Light Mode">
            <a
              style={{ marginLeft: "10px" }}
              href={null}
              className="setColor light"
              data-theme="light"
            >
              <HiLightBulb size={30} />
            </a>
          </li>
          <li style={{ width: "25px", height: "40px" }} title="Dark Mode">
            <a
              style={{ marginLeft: "-15px" }}
              href={null}
              className="setColor dark"
              data-theme="dark"
            >
              <BsFillMoonStarsFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
