import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CONFIG_CONSTANTS } from "../constants";
import { initI18n } from "../i18n";
import {
  convertRawToParsedSections,
  type Documentation,
  type DocumentationRaw,
} from "../utils";

export const useContentConfig = (): Documentation => {
  const { i18n } = useTranslation();

  type SupportedLang = keyof typeof CONFIG_CONSTANTS.CONTENT;

  const contentConfig = useMemo(() => {
    const storedLang = localStorage.getItem(
      CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE
    ) as SupportedLang | null;
    const langToUse =
      storedLang && CONFIG_CONSTANTS.CONTENT[storedLang]
        ? storedLang
        : (i18n.language as SupportedLang);

    const langContent =
      CONFIG_CONSTANTS.CONTENT[langToUse] ||
      CONFIG_CONSTANTS.CONTENT[initI18n.fallbackLng as SupportedLang];

    return convertRawToParsedSections(langContent as DocumentationRaw);
  }, [i18n.language]);

  return contentConfig;
};
