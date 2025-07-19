import React from "react";
import { FormControl, Select, MenuItem, Typography, Box } from "@mui/material";
import { Code, Waves, Palette, Nature, AutoAwesome, Whatshot, LocalFireDepartment, Flag } from "@mui/icons-material";
import variants from "../../theme/variants";
import { useTheme } from "../../hooks/use-theme.hook";
import { Themes } from "../../enums";

const getThemeIcon = (themeName: string) => {
  switch (themeName) {
    case Themes.Matrix:
      return <Code sx={{ fontSize: 16, mr: 1, color: "#00ff88" }} />;
    case Themes.Ocean:
      return <Waves sx={{ fontSize: 16, mr: 1, color: "#00d4ff" }} />;
    case Themes.MinimalLight:
      return <Palette sx={{ fontSize: 16, mr: 1, color: "#666" }} />;
    case Themes.BlueLight:
      return <Palette sx={{ fontSize: 16, mr: 1, color: "#6366f1" }} />;
    case Themes.MinimalDark:
      return <Palette sx={{ fontSize: 16, mr: 1, color: "#414144" }} />;
    case Themes.GreenLight:
      return <Nature sx={{ fontSize: 16, mr: 1, color: "#4caf50" }} />;
    case Themes.PurpleDark:
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

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Box sx={{ top: 16, right: 16, minWidth: 140 }}>
      <FormControl size="small" fullWidth>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
          Тема
        </Typography>
        <Select
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
              borderWidth: "1px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
              borderWidth: "2px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
              borderWidth: "2px",
            },
          }}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          variant="outlined"
          renderValue={(selected) => (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {getThemeIcon(selected)}
              {selected}
            </Box>
          )}
        >
          {variants.map((variant) => (
            <MenuItem key={variant.name} value={variant.name}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {getThemeIcon(variant.name)}
                {variant.name}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
