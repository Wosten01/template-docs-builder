import React, {
  useCallback,
  useMemo,
  useState,
  useEffect,
  Fragment,
} from "react";
import {
  Typography,
  useTheme,
  type SxProps,
  Box,
  Stack,
  Checkbox,
} from "@mui/material";
import { CodeBlock } from "../CodeBlock";
import { extractStepProperties, type CodeItem, type StepItem } from "../../utils";
import { CONFIG_CONSTANTS } from "../../constants";
import { useTranslation } from "react-i18next";

interface Props {
  title?: string;
  description?: string;
  note?: string;
  code?: CodeItem;
  steps?: StepItem[];
  sx?: SxProps;
  size?: "small" | "medium" | "large";
}

export const Block: React.FC<Props> = ({
  title,
  description,
  note,
  code,
  steps,
  sx,
  size = "medium",
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "main_page.feature",
  });

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [completedSteps, setCompletedSteps] = useState<boolean[]>(() => {
    if (!steps || !title) return [];
    const saved = localStorage.getItem(`steps-${title}`);
    return saved ? JSON.parse(saved) : new Array(steps.length).fill(false);
  });

  const handleStepToggle = useCallback((index: number) => {
    setCompletedSteps((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  }, []);

  const getSizeStyles = useCallback(() => {
    switch (size) {
      case "small":
        return { px: 2, py: 1, fontSize: "0.75rem" };
      case "large":
        return { px: 6, py: 5, fontSize: "1rem" };
      default:
        return { px: 5, py: 4, fontSize: "0.9rem" };
    }
  }, [size]);

  const sizeStyles = useMemo(() => getSizeStyles(), [getSizeStyles]);

  const renderedSteps = useMemo(() => {
    if (!steps) return null;

    return (
      <div>
        <Typography variant="body1">{`${t("templates_menu.section.block.steps")}:`}</Typography>
        <Box>
          {steps.map((step, index) => {
            const { stepText, codeText, showArrow, separateLines } =
              extractStepProperties(step);

            return (
              <Fragment key={index}>
                <Box
                  sx={{
                    ml: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    mb: 1.5,
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: completedSteps[index]
                      ? theme.palette.primary.main + "08"
                      : theme.palette.background.paper,
                    border: `1px solid ${
                      completedSteps[index]
                        ? theme.palette.primary.main + "30"
                        : theme.palette.divider
                    }`,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: completedSteps[index]
                        ? theme.palette.primary.main + "12"
                        : theme.palette.action.hover,
                    },
                  }}
                  onClick={() => handleStepToggle(index)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      py: 1,
                    }}
                  >
                    <Checkbox
                      checked={completedSteps[index] || false}
                      sx={{
                        p: 0,
                        mr: 2,
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                          borderRadius: "50%",
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: completedSteps[index]
                          ? "line-through"
                          : "none",
                        opacity: completedSteps[index] ? 0.7 : 1,
                        color: completedSteps[index]
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                        transition: "all 0.3s ease",
                        lineHeight: 1.4,
                      }}
                    >
                      {stepText}
                    </Typography>
                  </Box>
                </Box>
                {codeText && (
                  <div className="ml-8 mb-4">
                    <CodeBlock
                      id={`step-${title}-${index}`}
                      code={codeText}
                      showArrow={showArrow}
                      separateLines={separateLines}
                      sizeStyles={sizeStyles}
                      isCompleted={completedSteps[index]}
                    />
                  </div>
                )}
              </Fragment>
            );
          })}
        </Box>
      </div>
    );
  }, [steps, t, completedSteps, theme.palette.primary.main, theme.palette.background.paper, theme.palette.divider, theme.palette.action.hover, theme.palette.text.primary, title, sizeStyles, handleStepToggle]);

  useEffect(() => {
    if (steps && title) {
      localStorage.setItem(
        `${CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.STEPS_PREFIX}${title}`,
        JSON.stringify(completedSteps)
      );
    }
  }, [completedSteps, steps, title]);

  return (
    <div>
      {title && (
        <Typography
          variant="subtitle1"
          sx={
            sx
              ? sx
              : {
                  fontWeight: 600,
                  mb: 1,
                  color: theme.palette.primary.main,
                  textShadow: isDark
                    ? `0 0 8px ${theme.palette.primary.main}40`
                    : "none",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }
          }
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            color: theme.palette.text.secondary,
            lineHeight: 1.5,
          }}
        >
          {description}
        </Typography>
      )}

      <Stack sx={{ mt: 4 }} spacing={4}>
        {note && (
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: theme.palette.warning.main,
              lineHeight: 1.5,
              fontStyle: "italic",
              backgroundColor: theme.palette.warning.main + "10",
              padding: 1,
              borderRadius: 1,
              border: `1px solid ${theme.palette.warning.main}30`,
            }}
          >
            📝 {note}
          </Typography>
        )}

        {renderedSteps}

        {code && (
          <CodeBlock
            showTitle
            code={typeof code === "string" ? code : code.text}
            showArrow={typeof code === "object" ? code.showArrow : true}
            separateLines={
              typeof code === "object" ? code.separateLines || false : false
            }
            id={`main-${title}`}
            sizeStyles={sizeStyles}
          />
        )}
      </Stack>
    </div>
  );
};
