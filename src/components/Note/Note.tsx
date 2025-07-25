import { Typography, useTheme } from "@mui/material";

interface Props {
  title: string;
}

export const Note: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  return (
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
        userSelect: "text",
        wordBreak: "break-word",
      }}
    >
      📝 {title}
    </Typography>
  );
};
