import React, { useState, useEffect, useMemo } from "react";
import { Box, Stack } from "@mui/material";
import { ContentContainer, ContentNavigation, Drawer } from "./components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import createTheme from "./theme";
import { useTheme } from "./hooks/use-theme.hook";
import { MainAppBar, TemplatesMenu } from "./features";
import { FormFieldsProvider } from "./context";

export const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const muiTheme = useMemo(() => createTheme(theme), [theme]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const templatesMenuSx = useMemo(
    () => ({
      flex: { xs: "none", lg: "0 0 260px" },
      width: { xs: "100%", lg: "260px" },
      display: { xs: "none", md: "none", lg: "block" },
    }),
    []
  );

  const templatesMenuPaperSx = useMemo(
    () => ({
      mt: { xs: 0, lg: isScrolled ? 0 : 12 },
      borderRadius: 1,
      position: { xs: "static", lg: "sticky" },
      top: { lg: 20 },
      transition: "margin-top 0.3s ease",
      background: "rgba(0,0,0,0.02)",
    }),
    [isScrolled]
  );

  const drawerTemplatesMenuSx = useMemo(
    () => ({
      position: "static",
    }),
    []
  );

  const drawerTemplatesMenuPaperSx = useMemo(
    () => ({
      elevation: 0,
      boxShadow: "none",
    }),
    []
  );

  const contentNavigationSx = useMemo(
    () => ({
      maxWidth: "250px",
      display: { xs: "none", md: "none", lg: "block" },
    }),
    []
  );

  const contentBoxSx = useMemo(
    () => ({
      px: { xs: 1, sm: 3, md: 5 },
      flex: 1,
      maxWidth: { xs: "100%", lg: "1200px" },
      width: { xs: "100%" },
      mx: { xs: "auto", lg: 0 },
    }),
    []
  );

  const stackSx = useMemo(
    () => ({
      justifyContent: {
        xs: "center",
        lg: "space-between",
        xl: "center",
      },
      alignItems: "flex-start",
    }),
    []
  );

  const outerBoxSx = useMemo(
    () => ({
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: muiTheme.palette.background.default,
      display: "flex",
      justifyContent: "center",
    }),
    [muiTheme.palette.background.default]
  );

  const innerBoxSx = useMemo(
    () => ({
      minHeight: "100vh",
      position: "relative",
      width: "100%",
      backgroundColor: muiTheme.palette.background.default,
    }),
    [muiTheme.palette.background.default]
  );

  const contentContainerSx = useMemo(
    () => ({
      flex: 1,
    }),
    []
  );

  return (
    <MuiThemeProvider theme={muiTheme}>
      <FormFieldsProvider>
        <Box sx={outerBoxSx}>
          <Box sx={innerBoxSx}>
            <MainAppBar onMenuClick={() => setDrawerOpen(!drawerOpen)} />

            <Stack direction={{ xs: "column", lg: "row" }} sx={stackSx}>
              <ContentNavigation sx={contentNavigationSx} />

              <Box sx={contentBoxSx}>
                <ContentContainer
                  title="⚡ Команды для выполнения"
                  sx={contentContainerSx}
                />
              </Box>

              <TemplatesMenu
                sx={templatesMenuSx}
                paperSx={templatesMenuPaperSx}
              />

              <Drawer
                open={drawerOpen}
                onToggle={() => setDrawerOpen(!drawerOpen)}
                showMenuButton={false}
              >
                <TemplatesMenu
                  sx={drawerTemplatesMenuSx}
                  paperSx={drawerTemplatesMenuPaperSx}
                />
              </Drawer>
            </Stack>
          </Box>
        </Box>
      </FormFieldsProvider>
    </MuiThemeProvider>
  );
};
