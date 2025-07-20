import React, { useCallback, useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import {
  ContentContainer,
  ContentNavigation,
  TemplatesMenu,
} from "./components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import createTheme from "./theme";
import { useTheme } from "./hooks/use-theme.hook";

export const App: React.FC = () => {
  const [username, setUsername] = useState("root");
  const [serverIp, setServerIp] = useState("");
  const [newUser, setNewUser] = useState("admin");
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const muiTheme = createTheme(theme);

  const handleCopy = useCallback((cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd.trim());
    setCopiedIdx(id);
    setTimeout(() => setCopiedIdx(null), 1200);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: muiTheme.palette.background.default,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            position: "relative",
            width: "100%",
            backgroundColor: muiTheme.palette.background.default,
          }}
        >
          <Box
            sx={{
              mt: { xs: 1, sm: 4, md: 6 },
              textAlign: "center",
              mb: { xs: 2, sm: 4, md: 5 },
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography
              variant="h2"
              fontWeight={700}
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

          <Stack
            direction={{ xs: "column", lg: "row" }}
            sx={{
              justifyContent: {
                xs: "center",
                lg: "space-between",
                xl: "center",
              },
              alignItems: "flex-start",
            }}
          >
            <ContentNavigation
              sx={{
                maxWidth: "250px",
                display: { xs: "none", md: "none", lg: "block" },
              }}
            />

            <Box
              sx={{
                px: { xs: 1, sm: 3, md: 5 },
                flex: 1,
                maxWidth: { xs: "100%", md: "800px" },
                mx: { xs: "auto", lg: 0 },
              }}
            >
              <ContentContainer
                title="⚡ Команды для выполнения"
                username={username}
                serverIp={serverIp}
                newUser={newUser}
                copiedIdx={copiedIdx}
                handleCopy={handleCopy}
                sx={{ flex: 1 }}
              />
            </Box>

            <TemplatesMenu
              username={username}
              setUsername={setUsername}
              serverIp={serverIp}
              setServerIp={setServerIp}
              newUser={newUser}
              setNewUser={setNewUser}
              sx={{
                flex: { xs: "none", lg: "0 0 260px" },
                width: { xs: "100%", lg: "260px" },
                display: { xs: "none", md: "none", lg: "block" },
              }}
              paperSx={{
                mt: { xs: 0, lg: isScrolled ? 0 : 12 },
                borderRadius: 1,
                position: { xs: "static", lg: "sticky" },
                top: { lg: 20 },
                transition: "margin-top 0.3s ease",
                background: "rgba(0,0,0,0.02)",
              }}
            />
          </Stack>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
};
