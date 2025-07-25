import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { ThemeSelector, LanguageSelector } from "../../components";
import { useTranslation } from "react-i18next";

interface SettingsProps {
  expanded: boolean;
  onChange: (_: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const Settings: React.FC<SettingsProps> = ({ expanded, onChange }) => {
  const { t: tSettings } = useTranslation("translation", {
    keyPrefix: "main_page.feature.settings",
  });

  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      sx={{
        "&::before": {
          display: "none",
        },
        borderRadius: 1,
        background: "rgba(0,0,0,0.02)",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1" fontWeight={600}>
          {`⚙️ ${tSettings("title")}`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          maxHeight: "20vh",
          overflow: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "6px",
            background: "rgba(0,0,0,0.05)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0,0,0,0.15)",
            borderRadius: "4px",
          },
        }}
      >
        <ThemeSelector title={tSettings("theme")} />
        <LanguageSelector title={tSettings("language")} />
      </AccordionDetails>
    </Accordion>
  );
};
