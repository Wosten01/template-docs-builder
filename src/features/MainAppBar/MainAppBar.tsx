import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { AppBar } from "../../components/AppBar";

interface Props {
  onMenuClick?: () => void;
}

export const MainAppBar: React.FC<Props> = ({onMenuClick: onBurgerClick}: Props) => {
  return (
    <Fragment>
      <Box
        sx={{
          mt: { xs: 1, sm: 4, md: 6 },
          textAlign: "center",
          mb: { xs: 2, sm: 4, md: 5 },
          display: { xs: "none", lg: "block" },
        }}
      >
        <Typography
          variant="h2"
          fontWeight={800}
          color="primary"
          sx={{
            mb: 1,
            px: { xs: 1, sm: 0 },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          🚀 Настройка VPS сервера
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{
            mb: { xs: 2, sm: 4, md: 5 },
            px: { xs: 1, sm: 1, md: 0 },
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          Быстрая настройка и конфигурация вашего VPS сервера
        </Typography>
      </Box>
      <AppBar
        sx={{
          display: { xs: "block", lg: "none" },
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
        title={"🚀 Настройка VPS сервера"}
        onClick={onBurgerClick}
      />
    </Fragment>
  );
};
