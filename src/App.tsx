import React, { useCallback, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ContentContainer, InteractiveTipsPanel, Sidebar } from "./components";
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
          p: { xs: 1, sm: 2, md: 3, lg: 4 },
          minHeight: "100vh",
          position: "relative",
          backgroundColor: muiTheme.palette.background.default,
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            mt: { xs: 2, sm: 4, md: 6 },
            textAlign: "center",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            color="primary"
            sx={{
              mb: 1,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
              px: { xs: 1, sm: 0 },
            }}
          >
            🚀 Настройка VPS сервера
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              mb: { xs: 3, sm: 4, md: 5 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              px: { xs: 2, sm: 1, md: 0 },
            }}
          >
            Быстрая настройка и конфигурация вашего VPS сервера
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 2, sm: 3, md: 3 }}
          sx={{
            alignItems: { xs: "stretch", lg: "flex-start" },
            maxWidth: "100%",
          }}
        >
          <Sidebar
            username={username}
            setUsername={setUsername}
            serverIp={serverIp}
            setServerIp={setServerIp}
            newUser={newUser}
            setNewUser={setNewUser}
            sx={{
              flex: "0 0 260px",
              width: "260px",
            }}
            paperSx={{
              p: { xs: 2, md: 3 },
              borderRadius: 2,
              position: { xs: "static", lg: "sticky" },
              top: { lg: 20 },
            }}
          />

          <Box
            sx={{
              px: 5,
              flex: 1,
              maxWidth: "1200px",
            }}
          >
            <ContentContainer
              username={username}
              serverIp={serverIp}
              newUser={newUser}
              copiedIdx={copiedIdx}
              handleCopy={handleCopy}
              sx={{ flex: 1 }}
            />
          </Box>

          <InteractiveTipsPanel
            sx={{
              flex: 1,
              maxWidth: "300px",
              display: { xs: "none", lg: "block" },
            }}
            accordionSx={{
              borderRadius: 2,
              px: 2,
              py: 2,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              "&:before": { display: "none" },
            }}
          />
        </Stack>
      </Box>
    </MuiThemeProvider>
  );
};
