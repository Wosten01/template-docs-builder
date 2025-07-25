import { Box, Button } from "@mui/material";
import { RestartAlt } from "@mui/icons-material";
import { storageUtils } from "../../utils";
import { CONFIG_CONSTANTS } from "../../constants";

interface Props {
  title: string;
}

export const RestartProgressButton: React.FC<Props> = ({ title }) => {
  const handleResetProgress = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.STEPS_PREFIX)) {
        storageUtils.removeItem(key);
      }
      if (
        key.startsWith(CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.SETTINGS_ACCORDION)
      ) {
        storageUtils.removeItem(key);
      }
    });

    window.location.reload();
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Button
        variant="outlined"
        color="warning"
        startIcon={<RestartAlt />}
        onClick={handleResetProgress}
        fullWidth
        size="small"
      >
        {title}
      </Button>
    </Box>
  );
};
