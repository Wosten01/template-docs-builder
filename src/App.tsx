import React, { useState } from "react";
import { Container, Box, Typography, Stack, Paper } from "@mui/material";
import { CommandGroup, InputField, ThemeSelector } from "./components";
import { commandsConfig } from "./configs";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import createTheme from "./theme";
import { useTheme } from "./hooks/use-theme.hook";


export const App: React.FC = () => {
  const [username, setUsername] = useState("root");
  const [serverIp, setServerIp] = useState("");
  const [newUser, setNewUser] = useState("admin");
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);
  const { theme } = useTheme();

  const handleCopy = (cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd.trim());
    setCopiedIdx(id);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
     <MuiThemeProvider  theme={createTheme(theme)}>
    <Box minHeight="100vh" bgcolor="linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)" display="flex" alignItems="center" justifyContent="center">
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ borderRadius: 4, p: { xs: 2, md: 4 } }}>
           <ThemeSelector />
          <Typography variant="h4" fontWeight={700} color="primary" align="center" gutterBottom>
            Быстрая настройка VPS
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 3 }}>
            Введите параметры ниже — команды для копирования появятся автоматически.
          </Typography>
          <Stack spacing={2} sx={{ mb: 4 }}>
            <InputField label="USERNAME" value={username} onChange={setUsername} placeholder="например, root" />
            <InputField label="SERVER_IP" value={serverIp} onChange={setServerIp} placeholder="например, 1.2.3.4" />
            <InputField label="NEWUSER" value={newUser} onChange={setNewUser} placeholder="например, admin" />
          </Stack>
          <div>
            {commandsConfig.map((group, gIdx) => (
              <CommandGroup
                key={group.group}
                group={group.group}
                commands={group.commands}
                username={username}
                serverIp={serverIp}
                newUser={newUser}
                copiedIdx={copiedIdx}
                handleCopy={handleCopy}
                groupIdx={gIdx}
              />
            ))}
          </div>
        </Paper>
      </Container>
    </Box>
    </MuiThemeProvider>
  );
};
