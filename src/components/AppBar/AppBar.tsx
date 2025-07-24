import * as React from "react";
import { AppBar as MuiAppBar, type SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
interface Props {
  title: string;
  menu?: React.ReactNode;
  sx?: SxProps;
  onClick?: () => void;
}

export const AppBar: React.FC<Props> = ({
  title,
  menu,
  sx,
  onClick,
}: Props) => {
  return (
    <Box sx={{ flexGrow: 1, ...sx }}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 500 }}
          >
            {title}
          </Typography>
          {menu}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
