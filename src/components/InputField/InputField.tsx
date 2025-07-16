import React from "react";
import { Typography, TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
      {label}
    </Typography>
    <TextField
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      placeholder={placeholder}
      size="small"
      fullWidth
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "primary.main",
            borderWidth: "1px",
          }
        },
      }}
    />
  </div>
);
