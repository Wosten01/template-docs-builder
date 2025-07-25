import React, { useState, useMemo, useEffect } from "react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { Content, ContentNavigation, Drawer } from "./components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import createTheme from "./theme";
import { useTheme } from "./hooks/use-theme.hook";
import { MainAppBar, TemplatesMenu } from "./features";
import { FormFieldsProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CONFIG_CONSTANTS } from "./constants";
import { initI18n } from "./i18n";
import { useLocalStorage } from "./hooks";

export const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const muiTheme = useMemo(() => createTheme(theme), [theme]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "main_page.feature",
  });

  useEffect(() => {
    document.body.style.backgroundColor = muiTheme.palette.background.default;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [muiTheme.palette.background.default]);

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
      py: 2,
      mt: { xs: 0, lg: isScrolled ? 0 : 12 },
      borderRadius: 1,
      transition: "margin-top 0.3s ease",
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
      "& > div": {
        maxHeight: "80vh",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "&::-webkit-scrollbar-track": {
          background: "rgba(0,0,0,0.1)",
          borderRadius: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(0,0,0,0.3)",
          borderRadius: "3px",
          "&:hover": {
            background: "rgba(0,0,0,0.5)",
          },
        },
      },
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

  const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));

  const [savedLanguage] = useLocalStorage(
    CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE,
    initI18n.fallbackLng
  );

  useEffect(() => {
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [savedLanguage, i18n]);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
        <FormFieldsProvider>
          <Box sx={outerBoxSx}>
            <Box sx={innerBoxSx}>
              <MainAppBar onMenuClick={() => setDrawerOpen(!drawerOpen)} />

              <Stack direction={{ xs: "column", lg: "row" }} sx={stackSx}>
                <ContentNavigation
                  title={t("navigation.title")}
                  sx={contentNavigationSx}
                />

                <Box sx={contentBoxSx}>
                  <Content title={t("content.title")} sx={contentContainerSx} />
                </Box>

                {isMobile ? (
                  <Drawer
                    open={drawerOpen}
                    onToggle={() => setDrawerOpen(!drawerOpen)}
                    showMenuButton={false}
                  >
                    <TemplatesMenu
                      title={t("templates_menu.title")}
                      sx={drawerTemplatesMenuSx}
                      paperSx={drawerTemplatesMenuPaperSx}
                    />
                  </Drawer>
                ) : (
                  <TemplatesMenu
                    title={t("templates_menu.title")}
                    sx={templatesMenuSx}
                    paperSx={templatesMenuPaperSx}
                  />
                )}
              </Stack>
            </Box>
          </Box>
        </FormFieldsProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};
