import React, { useCallback, useMemo } from "react";
import {
  Paper,
  Typography,
  IconButton,
  Tooltip,
  useTheme,
  type SxProps,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useCopy } from "../../hooks";

interface CommandBlockProps {
  text: string;
  title?: string;
  description?: string;
  sx?: SxProps;
  size?: "small" | "medium" | "large";
}

export const CommandBlock: React.FC<CommandBlockProps> = ({
  text,
  title,
  description,
  sx,
  size = "medium",
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { handleCopy, isCopied } = useCopy();
  const copied = isCopied(text);

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

  return (
    <div>
      {title && (
        <Typography
          variant="subtitle1"
          sx={
            sx
              ? sx
              : {
                  fontWeight: 700,
                  pl: 1,
                  mb: 1,
                  color: theme.palette.primary.main,
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
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
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          }}
        >
          {description}
        </Typography>
      )}
      <Paper
        variant="outlined"
        sx={{
          background: copied
            ? theme.palette.action.selected
            : theme.palette.background.paper,
          color: theme.palette.text.primary,
          px: sizeStyles.px,
          py: sizeStyles.py,
          fontSize: sizeStyles.fontSize,
          borderRadius: 2,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          position: "relative",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          border: copied
            ? `1px solid ${theme.palette.primary.main}`
            : `1px solid ${theme.palette.divider}`,
          boxShadow: copied
            ? isDark
              ? `0 8px 32px ${theme.palette.primary.main}25, inset 0 1px 0 ${theme.palette.primary.main}20`
              : `0 4px 16px ${theme.palette.primary.main}15`
            : theme.shadows[2],
          backdropFilter: "blur(10px)",
          "&::before": {
            content: '"❯ "',
            color: theme.palette.primary.main,
            fontWeight: "bold",
            opacity: 0.9,
            marginRight: "8px",
            textShadow: isDark
              ? `0 0 6px ${theme.palette.primary.main}80`
              : "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
            opacity: copied ? 1 : 0,
            transition: "opacity 0.3s ease",
          },
        }}
        onClick={() => handleCopy(text)}
        title="Click to copy command"
      >
        <span
          style={{
            whiteSpace: "pre-line",
            textShadow: isDark
              ? `0 0 4px ${theme.palette.primary.main}40`
              : "none",
            lineHeight: 1.4,
          }}
        >
          {text}
        </span>
        <Tooltip
          title={copied ? "Copied!" : "Copy to clipboard"}
          placement="top"
          arrow
          slotProps={{
            tooltip: {
              sx: {
                bgcolor: theme.palette.background.paper,
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.divider}`,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
              },
            },
          }}
        >
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: theme.palette.primary.main,
              opacity: 0.7,
              pointerEvents: "none",
              filter: isDark
                ? `drop-shadow(0 0 4px ${theme.palette.primary.main}60)`
                : "none",
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 1,
                transform: "translateY(-50%) scale(1.1)",
              },
            }}
            disableRipple
            tabIndex={-1}
          >
            {copied ? (
              <CheckCircleIcon fontSize="small" />
            ) : (
              <ContentCopyIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Paper>
    </div>
  );
};
