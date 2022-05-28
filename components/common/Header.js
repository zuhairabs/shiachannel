/* eslint-disable @next/next/no-img-element */
// import Link from "next/link";
import { useRouter } from "next/router";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { LANGUAGES, SERVICES } from "../../constants/navigation";
import useTranslation from "next-translate/useTranslation";
import { getLocale } from "../../utils/utilities";

export default function Header() {
  const router = useRouter();
  const { asPath } = useRouter();
  const { t } = useTranslation("navigation");
  const currLocale = getLocale(router.locale);
  const [currLanguage, setCurrLanguage] = useState(currLocale);

  useEffect(() => {
    setCurrLanguage(currLocale);
  }, [currLocale]);

  return (
    <>
      {/* <!-- Start header --> */}
      <header id="header" className="wpo-site-header wpo-header-style-3">
        <nav
          className="navigation navbar navbar-default"
          data-sal="slide-down"
          data-sal-duration="1000"
          data-sal-delay="100"
        >
          <div className="container">
            <div className="navbar-header">
              <div className="my_switcher d-block d-lg-none">
                <ul>
                  <li title="Light Mode">
                    <a
                      href={null}
                      className="setColor light active"
                      data-theme="light"
                    >
                      <HiLightBulb size={20} />
                    </a>
                  </li>
                  <li title="Dark Mode">
                    <a href={null} className="setColor dark" data-theme="dark">
                      <BsFillMoonStarsFill size={20} />
                    </a>
                  </li>
                </ul>
              </div>
              <button type="button" className="open-btn">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link href="/">
                <div className="navbar-brand">
                  <img src="/assets/images/logo.png" alt="logo" />
                </div>
              </Link>
            </div>
            <div
              id="navbar"
              className="navbar-collapse collapse navbar-right navigation-holder"
            >
              <button className="close-navbar">
                <i className="ti-close"></i>
              </button>
              <ul
                // style={{ display: "flex", alignItems: "center" }}
                className="nav navbar-nav"
              >
                <li>
                  <Link href="/">{t("home")}</Link>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Services</a>
                  <ul className="sub-menu">
                    {SERVICES.map((service) => (
                      <li key={service.id}>
                        <a href={service.link}>
                          <img
                            width="30px"
                            height="30px"
                            alt={service.title}
                            src={service.img}
                          />{" "}
                          &nbsp;
                          {t(service.title)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="">
                  <a href="/prayer-time">{t("prayer")}</a>
                </li>
                <li>
                  <Link href="/about">{t("about")}</Link>
                </li>
                <li>
                  <Link href="/contact">{t("contact")}</Link>
                </li>
                <li className="hideD">
                  <Link href="/contribute">{t("contribute")}</Link>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">
                    {LANGUAGES.filter(
                      (language) => language.id === currLanguage
                    ).map((l) => (
                      <img
                        key={l.id}
                        id="currentLanguage"
                        src={l.img}
                        height="32"
                        width="32"
                        alt={l.title}
                      />
                    ))}
                  </a>
                  <ul className="sub-menu lang">
                    {LANGUAGES.filter(
                      (language) => language.id !== currLanguage
                    ).map((language) => (
                      <li key={language.id}>
                        <Link
                          href={asPath}
                          locale={language.locale}
                          title="Arabic"
                          passHref
                        >
                          <a>
                            <img
                              src={language.img}
                              height="32"
                              width="32"
                              alt={language.title}
                            />
                            &nbsp; {language.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              {/* </div><!-- end of nav-collapse --> */}
              <div className="cart-search-contact">
                <div className="btns">
                  <Link href="/contribute">
                    <div className="theme-btn">{t("contribute")}</div>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- end of container --> */}
          </div>
        </nav>
      </header>
      {/* <!-- end of header --> */}
    </>
  );
}
