import { Typography, TextField } from "@mui/material";
import { useDeferredInput } from "../../hooks";

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
}) => {
  const { localValue, setLocalValue } = useDeferredInput(value, onChange);

  return (
    <div>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {label}
      </Typography>
      <TextField
        value={localValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLocalValue(e.target.value)
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
            },
          },
        }}
      />
    </div>
  );
};
