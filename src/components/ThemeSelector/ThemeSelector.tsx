import React from "react";
import { FormControl, Select, MenuItem, Typography, Box } from "@mui/material";
import { Code, Waves, Palette } from "@mui/icons-material";
import variants from "../../theme/variants";
import { useTheme } from "../../hooks/use-theme.hook";

const getThemeIcon = (themeName: string) => {
  switch (themeName.toLowerCase()) {
    case "matrix":
      return <Code sx={{ fontSize: 16, mr: 1, color: "#00ff88" }} />;
    case "ocean":
      return <Waves sx={{ fontSize: 16, mr: 1, color: "#00d4ff" }} />;
    case "minimal":
      return <Palette sx={{ fontSize: 16, mr: 1, color: "#666" }} />;
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
