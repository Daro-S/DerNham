import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { Namespace } from "react-i18next";

//Omit<Namespace, "common" | "login">;

export const serverTranslates = (
  locale: string,
  namespacesRequired?: Namespace
) => {
  if (!namespacesRequired) {
    return serverSideTranslations(locale, ["common", "login"]);
  }

  if (typeof namespacesRequired === "string") {
    return serverSideTranslations(locale, [
      ...["common", "login"],
      namespacesRequired,
    ]);
  }

  return serverSideTranslations(locale, [
    ...["common", "login"],
    ...namespacesRequired,
  ]);
};
