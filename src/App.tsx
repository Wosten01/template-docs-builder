import React, { useCallback, useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { ContentContainer, ContentNavigation, Drawer } from "./components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import createTheme from "./theme";
import { useTheme } from "./hooks/use-theme.hook";
import { MainAppBar, TemplatesMenu } from "./features";

export const App: React.FC = () => {
  const [username, setUsername] = useState("root");
  const [serverIp, setServerIp] = useState("");
  const [newUser, setNewUser] = useState("admin");
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const muiTheme = createTheme(theme);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          <MainAppBar onMenuClick={() => setDrawerOpen(!drawerOpen)} />

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
                maxWidth: { xs: "100%", lg: "800px" },
                width: { xs: "100%" },
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

            <Drawer
              open={drawerOpen}
              onToggle={() => setDrawerOpen(!drawerOpen)}
              showMenuButton={false}
            >
              <TemplatesMenu
                username={username}
                setUsername={setUsername}
                serverIp={serverIp}
                setServerIp={setServerIp}
                newUser={newUser}
                setNewUser={setNewUser}
                sx={{ position: "static" }}
                paperSx={{ elevation: 0, boxShadow: "none" }}
              />
            </Drawer>
          </Stack>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
};
