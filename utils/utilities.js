export const getLocale = (locale) => {
  return locale === "ar"
    ? "ARABIC"
    : locale === "en"
    ? "ENGLISH"
    : locale === "fa"
    ? "FARSI"
    : locale === "az"
    ? "AZERI"
    : locale === "hi"
    ? "HINDI"
    : locale === "ur"
    ? "URDU"
    : locale === "id"
    ? "BAHASA"
    : "BANGLA";
};
