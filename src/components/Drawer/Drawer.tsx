import React from "react";
import {
  Drawer as MuiDrawer,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  width?: number;
  showMenuButton?: boolean;
}

export const Drawer: React.FC<Props> = ({
  children,
  open,
  onToggle,
  width = 320,
  showMenuButton = true,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      {showMenuButton && isMobile && (
        <IconButton
          onClick={onToggle}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1200,
            backgroundColor: "background.paper",
            boxShadow: 2,
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <MuiDrawer
        anchor="left"
        open={open}
        onClose={onToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width,
            boxSizing: "border-box",
          },
          display: { lg: "none", xs: "block" },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton onClick={onToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          {children}
        </Box>
      </MuiDrawer>
    </>
  );
};
