import React, { useCallback, useMemo } from "react";
import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  type SxProps,
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { InputField } from "../../components";
import { useFormFieldsContext } from "../../context";
import { getSetterName, toCamelCase } from "../../utils";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../hooks/use-local-storage.hook";
import { CONFIG_CONSTANTS } from "../../constants";
import { Settings } from "../Settings";

interface Props {
  title: string;
  sx?: SxProps;
  paperSx?: SxProps;
}

export const TemplatesMenu: React.FC<Props> = ({ sx, paperSx, title }) => {
  const { fields, setters, config, resetToDefaults } = useFormFieldsContext();

  const { t: tCommon } = useTranslation("translation", {
    keyPrefix: "common",
  });

  const [templatesExpanded, setTemplatesExpanded] = useLocalStorage<boolean>(
    CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.TEMPLATES_ACCORDION,
    true
  );

  const [settingsExpanded, setSettingsExpanded] = useLocalStorage<boolean>(
    CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.SETTINGS_ACCORDION,
    false
  );

  const handleReset = useCallback(() => {
    resetToDefaults();
  }, [resetToDefaults]);

  const content = useMemo(
    () => (
      <Stack
        spacing={2}
        sx={{
          overflow: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Accordion
          expanded={templatesExpanded}
          onChange={(_, isExpanded) => setTemplatesExpanded(isExpanded)}
          sx={{ borderRadius: 1, background: "rgba(0,0,0,0.02)" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1" fontWeight={600}>
              {`📝 ${title}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backdropFilter: "blur(10px)",
              maxHeight: "60vh",
              overflow: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {config.map((field) => {
              return (
                <InputField
                  key={field.key}
                  label={field.label}
                  value={fields[field.key]}
                  onChange={setters[getSetterName(toCamelCase(field.key))]}
                  placeholder={field.placeholder}
                />
              );
            })}
            <Button
              sx={{ mt: 4 }}
              variant="outlined"
              color="primary"
              fullWidth
              onClick={handleReset}
            >
              {tCommon("actions.reset")}
            </Button>
          </AccordionDetails>
        </Accordion>

        <Settings
          expanded={settingsExpanded}
          onChange={(_, isExpanded) => setSettingsExpanded(isExpanded)}
        />
      </Stack>
    ),
    [
      templatesExpanded,
      title,
      config,
      handleReset,
      tCommon,
      settingsExpanded,
      setTemplatesExpanded,
      fields,
      setters,
      setSettingsExpanded,
    ]
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: 20,
        alignSelf: "flex-start",
        ...sx,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          px: 2,
          msOverflowStyle: "none",
          ...paperSx,
        }}
      >
        {content}
      </Paper>
    </Box>
  );
};
