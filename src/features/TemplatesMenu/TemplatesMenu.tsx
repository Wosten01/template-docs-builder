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
import { InputField, ThemeSelector } from "../../components";
import { useFormFieldsContext } from "../../context";
import { getSetterName, toCamelCase } from "../../utils";

interface Props {
  sx?: SxProps;
  paperSx?: SxProps;
}

export const TemplatesMenu: React.FC<Props> = ({ sx, paperSx }) => {
  const { fields, setters, config, resetToDefaults } = useFormFieldsContext();

  const handleReset = useCallback(() => {
    resetToDefaults();
  }, [resetToDefaults]);

  const content = useMemo(
    () => (
      <Stack spacing={2}>
        <Accordion
          defaultExpanded
          sx={{ borderRadius: 1, background: "rgba(0,0,0,0.02)" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1" fontWeight={600}>
              📝 Параметры сервера
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
              🔄 Сбросить к дефолтным значениям
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion
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
              🎨 Настройки
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ThemeSelector title="Teма" />
          </AccordionDetails>
        </Accordion>
      </Stack>
    ),
    [config, fields, handleReset, setters]
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
