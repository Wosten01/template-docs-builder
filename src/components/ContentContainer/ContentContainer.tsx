import React, { useMemo } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { CommandGroup } from "../CommandGroup";
import { commandsConfig } from "../../configs";

interface ContentProps {
  username: string;
  serverIp: string;
  newUser: string;
  copiedIdx: string | null;
  handleCopy: (cmd: string, id: string) => void;
}

export const ContentContainer: React.FC<ContentProps> = React.memo(({
  username,
  serverIp,
  newUser,
  copiedIdx,
  handleCopy,
}) => {
  const commandGroups = useMemo(() => 
    commandsConfig.map((group, gIdx) => (
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
    )), [username, serverIp, newUser, copiedIdx, handleCopy]
  );

  return (
    <Box sx={{ flex: 1, maxWidth: "calc(100% - 300px)" }}>
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{ mb: 4 }}
        color="primary"
      >
        ⚡ Команды для выполнения
      </Typography>
      <Stack >
        {commandGroups}
      </Stack>
    </Box>
  );
});