import React from "react";
import { Paper, Typography, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface CommandBlockProps {
  text: string;
  copied: boolean;
  onCopy: () => void;
  title?: string;
}

export const CommandBlock: React.FC<CommandBlockProps> = ({ text, copied, onCopy, title }) => (
  <div>
    {title && (
      <Typography variant="caption" sx={{ 
        fontWeight: 700, 
        pl: 1, 
        mb: 1,
        color: "#00ff88",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        textShadow: "0 0 8px rgba(0, 255, 136, 0.6)",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        fontSize: "0.75rem"
      }}>
        {title}
      </Typography>
    )}
    <Paper
      variant="outlined"
      sx={{
        background: copied 
          ? "linear-gradient(135deg, #001a0a 0%, #002a15 50%, #001a0a 100%)"
          : "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
        color: "#00ff88",
        px: 3,
        py: 2,
        borderRadius: 2,
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: "0.9rem",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        userSelect: "all",
        border: copied 
          ? "1px solid #00ff88" 
          : "1px solid rgba(0, 255, 136, 0.3)",
        boxShadow: copied 
          ? "0 8px 32px rgba(0, 255, 136, 0.25), inset 0 1px 0 rgba(0, 255, 136, 0.2)" 
          : "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        "&:hover": {
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
          boxShadow: "0 12px 40px rgba(0, 255, 136, 0.2), inset 0 1px 0 rgba(0, 255, 136, 0.3)",
          border: "1px solid rgba(0, 255, 136, 0.6)",
          transform: "translateY(-2px)",
        },
        "&::before": {
          content: '"❯ "',
          color: "#00ff88",
          fontWeight: "bold",
          opacity: 0.9,
          marginRight: "8px",
          textShadow: "0 0 6px rgba(0, 255, 136, 0.8)"
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00ff88, transparent)",
          opacity: copied ? 1 : 0,
          transition: "opacity 0.3s ease"
        }
      }}
      onClick={onCopy}
      title="Click to copy command"
    >
      <span style={{ 
        whiteSpace: "pre-line",
        textShadow: "0 0 4px rgba(0, 255, 136, 0.4)",
        lineHeight: 1.4
      }}>
        {text}
      </span>
      <Tooltip 
        title={copied ? "Copied!" : "Copy to clipboard"} 
        placement="top"
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "#001a0a",
              color: "#00ff88",
              border: "1px solid rgba(0, 255, 136, 0.3)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem"
            }
          }
        }}
      >
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#00ff88",
            opacity: 0.7,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 4px rgba(0, 255, 136, 0.6))",
            transition: "all 0.3s ease",
            "&:hover": {
              opacity: 1,
              transform: "translateY(-50%) scale(1.1)"
            }
          }}
          disableRipple
          tabIndex={-1}
        >
          {copied ? <CheckCircleIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
        </IconButton>
      </Tooltip>
    </Paper>
  </div>
);