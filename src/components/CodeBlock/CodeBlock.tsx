import {
  Paper,
  Typography,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useCopy } from "../../hooks";
import { useTranslation } from "react-i18next";

interface SingleCodeBlockProps {
  id?: string;
  showTitle?: boolean;
  showArrow?: boolean;
  code: string;
  sizeStyles: {
    px: number;
    py: number;
    fontSize: string;
  };
  isCompleted?: boolean;
}

type CodeBlockProps = SingleCodeBlockProps & {
  separateLines?: boolean;
};

const SingleCodeBlock: React.FC<SingleCodeBlockProps> = ({
  code,
  sizeStyles,
  showTitle,
  showArrow = true,
  id,
  isCompleted = false,
}) => {
  const theme = useTheme();
  const { t } = useTranslation("translation", {
    keyPrefix: "main_page.feature",
  });

  const isDark = theme.palette.mode === "dark";
  const { handleCopy, isCopied } = useCopy();

  const copyId = id || code;
  const copied = isCopied(copyId);

  const handleClick = () => {
    handleCopy(code, copyId);
  };

  return (
    <div>
      {showTitle && (
        <Typography variant="body1">
          {t("templates_menu.section.block.code")}:
        </Typography>
      )}
      <Paper
        variant="outlined"
        sx={{
          background: copied
            ? theme.palette.action.selected
            : isCompleted
            ? theme.palette.primary.main + "08"
            : theme.palette.background.paper,
          color: isCompleted
            ? theme.palette.primary.main
            : theme.palette.text.primary,
          px: sizeStyles.px,
          py: sizeStyles.py,
          fontSize: sizeStyles.fontSize,
          borderRadius: 2,
          position: "relative",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          border: copied
            ? `1px solid ${theme.palette.primary.main}`
            : isCompleted
            ? `1px solid ${theme.palette.primary.main}30`
            : `1px solid ${theme.palette.divider}`,
          boxShadow: copied
            ? isDark
              ? `0 8px 32px ${theme.palette.primary.main}25, inset 0 1px 0 ${theme.palette.primary.main}20`
              : `0 4px 16px ${theme.palette.primary.main}15`
            : theme.shadows[2],
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          "&::before": showArrow
            ? {
                content: '"❯ "',
                color: isCompleted
                  ? theme.palette.primary.main
                  : theme.palette.primary.main,
                opacity: 0.9,
                marginRight: "8px",
                textShadow: isDark
                  ? `0 0 6px ${
                      isCompleted
                        ? theme.palette.primary.main
                        : theme.palette.primary.main
                    }80`
                  : "none",
              }
            : undefined,
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
        onClick={handleClick}
        title="Click to copy command"
      >
        <span
          style={{
            flex: 1,
            minWidth: 0,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            textDecoration: isCompleted ? "line-through" : "none",
            opacity: isCompleted ? 0.7 : 1,
            textShadow: isDark
              ? `0 0 4px ${theme.palette.primary.main}40`
              : "none",
            lineHeight: 1.4,
            fontWeight: "400",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.85rem",
            marginRight: 1,
            marginLeft: showArrow ? 8 : 0,
          }}
        >
          {code}
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
              ml: 1,
              color: theme.palette.primary.main,
              opacity: 0.7,
              filter: isDark
                ? `drop-shadow(0 0 4px ${theme.palette.primary.main}60)`
                : "none",
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 1,
                transform: "scale(1.1)",
              },
            }}
            disableRipple
            tabIndex={-1}
            onClick={handleClick}
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

export const CodeBlock: React.FC<CodeBlockProps> = ({
  id,
  showTitle,
  showArrow,
  code,
  sizeStyles,
  isCompleted,
  separateLines,
}: CodeBlockProps) => {
  if (separateLines) {
    const codeLines = code.split("\n").filter((line) => line.trim() !== "");

    return codeLines.map((codeLine, index) => {
      return (
        <SingleCodeBlock
          id={id}
          key={`${id}-line-${index}`}
          sizeStyles={sizeStyles}
          isCompleted={isCompleted}
          showArrow={showArrow}
          showTitle={showTitle}
          code={codeLine}
        />
      );
    });
  }

  return (
    <SingleCodeBlock
      id={id}
      key={id}
      sizeStyles={sizeStyles}
      isCompleted={isCompleted}
      showArrow={showArrow}
      showTitle={showTitle}
      code={code}
    />
  );
};
