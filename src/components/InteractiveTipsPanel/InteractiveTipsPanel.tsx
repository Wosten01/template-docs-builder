import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Chip,
  IconButton,
  Fade,
  Divider,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import { PlayArrow, Pause, ExpandMore } from "@mui/icons-material";
import { tips } from "../../configs";
import { CommandBlock } from "../CommandBlock";

interface InteractiveTipsPanelProps {
  sx?: object;
  accordionSx?: object;
}

export const InteractiveTipsPanel: React.FC<InteractiveTipsPanelProps> = ({
  sx,
  accordionSx = {
    borderRadius: 4,
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    "&:before": { display: "none" },
  },
}: InteractiveTipsPanelProps) => {
  const [currentTip, setCurrentTip] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showTips, setShowTips] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const muiTheme = useTheme();

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentTip((current) => (current + 1) % tips.length);
          return 0;
        }
        return prev + 2;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTipClick = (index: number) => {
    setCurrentTip(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box sx={sx}>
      <Accordion
        expanded={showTips}
        onChange={() => setShowTips(!showTips)}
        sx={accordionSx}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">Интерактивные советы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              direction: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            />
            <IconButton size="small" onClick={togglePlay} sx={{ ml: 1 }}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
          </Box>

          <Fade in={true} key={currentTip}>
            <Box sx={{ mb: 3, textAlign: "center" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  p: 2,
                  borderRadius: "50%",
                  backgroundColor: muiTheme.palette.primary.main + "20",
                  color: muiTheme.palette.primary.main,
                  mb: 2,
                }}
              >
                {tips[currentTip].icon}
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {tips[currentTip].title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {tips[currentTip].text}
              </Typography>

              <Button
                size="small"
                onClick={() => setShowDetails(!showDetails)}
                endIcon={
                  showDetails ? (
                    <ExpandMore sx={{ transform: "rotate(180deg)" }} />
                  ) : (
                    <ExpandMore />
                  )
                }
              >
                Подробнее
              </Button>

              {showDetails && (
                <Box sx={{ mt: 2 }}>
                  <Divider sx={{ my: 2 }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, textAlign: "left" }}
                  >
                    {tips[currentTip].detailedText}
                  </Typography>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      variant="caption"
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      Полезные команды:
                    </Typography>
                    {tips[currentTip].commands?.map((cmd, idx) => (
                      <CommandBlock
                        key={idx}
                        text={cmd}
                        sx={{ mb: 1, py: 1, px: 2}}
                        size={"small"}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Fade>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {tips.map((tip, index) => (
              <Chip
                key={index}
                size="small"
                label={tip.title}
                onClick={() => handleTipClick(index)}
                variant={index === currentTip ? "filled" : "outlined"}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
