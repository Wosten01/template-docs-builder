import React, { useEffect } from "react";
import { Box, FormControl } from "@mui/material";
import { useTranslation } from "react-i18next";
import { initI18n, SUPPORTED_LANGUAGES } from "../../i18n";
import { useLocalStorage } from "../../hooks";
import { CONFIG_CONSTANTS } from "../../constants";
import { Selector } from "../Selector";

interface Props {
  title?: string;
}

export const LanguageSelector: React.FC<Props> = ({ title }) => {
  const { i18n, t: tCommon } = useTranslation("translation", {
    keyPrefix: "common",
  });

  const languages = SUPPORTED_LANGUAGES.map((lng) => ({
    value: lng,
    label: tCommon(`language.names.${lng}`),
  }));

  const [savedLanguage, setSavedLanguage] = useLocalStorage(
    CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE,
    initI18n.fallbackLng
  );

  useEffect(() => {
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [savedLanguage, i18n]);

  return (
    <Box sx={{ top: 16, right: 16, minWidth: 140 }}>
      <FormControl size="small" fullWidth>
        <Selector
          value={i18n.language}
          onChange={setSavedLanguage}
          options={languages}
          label={title}
        />
      </FormControl>
    </Box>
  );
};
