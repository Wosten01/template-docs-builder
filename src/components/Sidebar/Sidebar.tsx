import React from "react";
import { Box, Paper, Typography, Stack } from "@mui/material";
import { InputField, ThemeSelector } from "../";

interface SidebarProps {
  username: string;
  setUsername: (value: string) => void;
  serverIp: string;
  setServerIp: (value: string) => void;
  newUser: string;
  setNewUser: (value: string) => void;
  sx?: object;
  paperSx?: object;
}

export const Sidebar: React.FC<SidebarProps> = React.memo(
  ({
    username,
    setUsername,
    serverIp,
    setServerIp,
    newUser,
    setNewUser,
    sx = { flex: "0 0 280px" },
    paperSx = {
      p: { xs: 2, md: 3 },
      borderRadius: 4,
      background: "rgba(0,0,0,0.02)",
      position: "sticky",
      top: 20,
      border: "1px solid rgba(0,0,0,0.05)",
    },
  }) => (
    <Box sx={sx}>
      <Paper elevation={3} sx={paperSx}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 3 }}
          color="primary"
        >
          📝 Параметры сервера
        </Typography>
        <Stack spacing={3}>
          <InputField
            label="USERNAME"
            value={username}
            onChange={setUsername}
            placeholder="например, root"
          />
          <InputField
            label="SERVER_IP"
            value={serverIp}
            onChange={setServerIp}
            placeholder="например, 1.2.3.4"
          />
          <InputField
            label="NEWUSER"
            value={newUser}
            onChange={setNewUser}
            placeholder="например, admin"
          />
          <ThemeSelector />
        </Stack>
      </Paper>
    </Box>
  )
);
