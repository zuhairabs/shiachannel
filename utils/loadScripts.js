import loadjs from "loadjs";

export const loadScripts = () => {
  loadjs(
    [
      "/assets/js/jquery-3.6.0.min.js",
      "/assets/js/circle-progress.min.js",
      "/assets/js/jquery-plugin-collection.js",
      "/assets/js/js-cookie.js",
      "/assets/js/switcher.js",
      "/assets/js/sal.js",
      "/assets/js/script.js",
      "https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js",
      "https://oss.maxcdn.com/respond/1.4.2/respond.min.js",
    ],
    { async: false }
  );
};
