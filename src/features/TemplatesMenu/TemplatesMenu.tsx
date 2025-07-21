import React, { useMemo } from "react";
import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  type SxProps,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { InputField, ThemeSelector } from "../../components";

interface Props {
  username: string;
  setUsername: (value: string) => void;
  serverIp: string;
  setServerIp: (value: string) => void;
  newUser: string;
  setNewUser: (value: string) => void;
  sx?: SxProps;
  paperSx?: SxProps;
}

export const TemplatesMenu: React.FC<Props> = React.memo(
  ({
    username,
    setUsername,
    serverIp,
    setServerIp,
    newUser,
    setNewUser,
    sx,
    paperSx,
  }) => {
    const sidebarContent = useMemo(
      () => (
        <Stack spacing={3}>
          <Accordion defaultExpanded sx={{ borderRadius: 1, background: "rgba(0,0,0,0.02)" }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" fontWeight={600}>
                📝 Параметры сервера
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
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
              </Stack>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              "&::before": {
                display: "none",
              },
              borderRadius: 1,
              background: "rgba(0,0,0,0.02)",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" fontWeight={600}>
                🎨 Настройки
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ThemeSelector title="Teма"/>
            </AccordionDetails>
          </Accordion>
        </Stack>
      ),
      [newUser, serverIp, setNewUser, setServerIp, setUsername, username]
    );

    return (
      <Box
        sx={{
          position: "sticky",
          top: 20,
          alignSelf: "flex-start",
          ...sx,
        }}
      >
        <Paper elevation={3} sx={{ p: 2, ...paperSx }}>
          {sidebarContent}
        </Paper>
      </Box>
    );
  }
);
