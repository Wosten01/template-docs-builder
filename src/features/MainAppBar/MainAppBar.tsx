import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { AppBar } from "../../components/AppBar";
import { useContentConfig } from "../../hooks";

interface Props {
  onMenuClick?: () => void;
}

export const MainAppBar: React.FC<Props> = ({
  onMenuClick: onBurgerClick,
}: Props) => {
  const { title, description } = useContentConfig();

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
            fontSize: { xs: "1rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {title}
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
          {description}
        </Typography>
      </Box>
      <AppBar
        sx={{
          display: { xs: "block", lg: "none" },
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
        title={title}
        onClick={onBurgerClick}
      />
    </Fragment>
  );
};
