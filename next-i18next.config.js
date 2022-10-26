const path = require("path");

/** @type {import("next-i18next").UserConfig} */
const nextI18nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "km"],
  },
  nsSeparator: ".",
  defaultNS: "common",
  fallbackLng: "en",
  compatibilityJSON: "v4",
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
  // debug: process.env.NODE_ENV === "development",
};

module.exports = nextI18nextConfig;
