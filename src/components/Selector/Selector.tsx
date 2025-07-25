import React, { type ReactNode } from "react";
import { FormControl, Select, MenuItem, Typography, Box } from "@mui/material";

interface SelectorOption {
  value: string;
  label?: ReactNode;
  icon?: ReactNode;
}

interface SelectorProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectorOption[];
  label?: ReactNode;
  renderOption?: (option: SelectorOption) => React.ReactNode;
  minWidth?: number | string;
}

export function Selector({
  value,
  onChange,
  options,
  label,
  renderOption,
  minWidth = 140,
}: SelectorProps) {
  return (
    <Box sx={{ top: 16, right: 16, minWidth }}>
      <FormControl size="small" fullWidth>
        {label && (
          <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
            {label}
          </Typography>
        )}
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          variant="outlined"
          renderValue={(selected) => {
            const selectedOption = options.find(opt => opt.value === selected);
            return renderOption && selectedOption
              ? <Box sx={{ display: "flex", alignItems: "center" }}>{renderOption(selectedOption)}</Box>
              : selectedOption?.label ?? selected;
          }}
        >
          {options.map((option) => (
            <MenuItem key={String(option.value)} value={option.value}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {renderOption ? renderOption(option) : option.label ?? option.value}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}