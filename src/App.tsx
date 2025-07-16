import React, { useCallback, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import {
  ContentContainer,
  Sidebar,
} from "./components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import createTheme from "./theme";
import { useTheme } from "./hooks/use-theme.hook";

export const App: React.FC = () => {
  const [username, setUsername] = useState("root");
  const [serverIp, setServerIp] = useState("");
  const [newUser, setNewUser] = useState("admin");
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);
  const { theme } = useTheme();
  const muiTheme = createTheme(theme);


  const handleCopy = useCallback((cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd.trim());
    setCopiedIdx(id);
    setTimeout(() => setCopiedIdx(null), 1200);
  }, []);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          pl: { xs: 2, md: 2 },
          minHeight: "100vh",
          position: "relative",
          backgroundColor: muiTheme.palette.background.default,
        }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="primary"
            sx={{ mb: 1 }}
          >
            🚀 Настройка VPS сервера
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 5 }}>
            Быстрая настройка и конфигурация вашего VPS сервера
          </Typography>
        </Box>

        <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
          <Sidebar
            username={username}
            setUsername={setUsername}
            serverIp={serverIp}
            setServerIp={setServerIp}
            newUser={newUser}
            setNewUser={setNewUser}
          />
          <ContentContainer
            username={username}
            serverIp={serverIp}
            newUser={newUser}
            copiedIdx={copiedIdx}
            handleCopy={handleCopy}
          />
        </Stack>
      </Box>
    </MuiThemeProvider>
  );
};
