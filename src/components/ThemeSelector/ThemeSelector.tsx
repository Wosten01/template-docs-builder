import React, { Fragment, useCallback } from "react";
import {
  Code,
  Waves,
  Palette,
  Nature,
  AutoAwesome,
  Whatshot,
  LocalFireDepartment,
  Flag,
} from "@mui/icons-material";
import variants from "../../theme/variants";
import { useTheme } from "../../hooks/use-theme.hook";
import { Themes } from "../../enums";
import { useTranslation } from "react-i18next";
import { Selector } from "../Selector"; 

const getThemeIcon = (themeName: string) => {
  switch (themeName) {
    case Themes.Matrix:
      return <Code sx={{ fontSize: 16, mr: 1, color: "#00ff88" }} />;
    case Themes.Ocean:
      return <Waves sx={{ fontSize: 16, mr: 1, color: "#00d4ff" }} />;
    case Themes.MinimalLight:
      return <Palette sx={{ fontSize: 16, mr: 1, color: "#666" }} />;
    case Themes.LightBlue:
      return <Palette sx={{ fontSize: 16, mr: 1, color: "#6366f1" }} />;
    case Themes.MinimalDark:
      return <Palette sx={{ fontSize: 16, mr: 1, color: "#414144" }} />;
    case Themes.LightGreen:
      return <Nature sx={{ fontSize: 16, mr: 1, color: "#4caf50" }} />;
    case Themes.DarkPurple:
      return <AutoAwesome sx={{ fontSize: 16, mr: 1, color: "#a855f7" }} />;
    case Themes.OrangeBlue:
      return <Flag sx={{ fontSize: 16, mr: 1, color: "#ff6b35" }} />;
    case Themes.Eyeburning:
      return <Whatshot sx={{ fontSize: 16, mr: 1, color: "#ff0080" }} />;
    case Themes.Halloween:
      return (
        <LocalFireDepartment sx={{ fontSize: 16, mr: 1, color: "#ff6600" }} />
      );
    default:
      return <Palette sx={{ fontSize: 16, mr: 1 }} />;
  }
};

interface Props {
  title?: string;
}

export const ThemeSelector: React.FC<Props> = ({ title }) => {
  const { theme, setTheme } = useTheme();
  const { t: tCommon } = useTranslation("translation", {
    keyPrefix: "common",
  });

  const getLocalizedName = useCallback(
    (value: string) => tCommon("theme.names." + value.replace(" ", "")),
    [tCommon]
  );

  const options = variants.map((variant) => ({
    value: variant.name,
    label: getLocalizedName(variant.name),
    icon: getThemeIcon(variant.name),
  }));

  return (
    <Selector
      value={theme}
      onChange={setTheme}
      options={options}
      label={title}
      renderOption={(option) => (
        <Fragment>
          {option.icon}
          {option.label}
        </Fragment>
      )}
    />
  );
};