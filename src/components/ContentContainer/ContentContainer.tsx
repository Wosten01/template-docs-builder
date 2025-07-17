import React, { useMemo } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { CommandGroup } from "../CommandGroup";
import { commandsConfig } from "../../configs";

interface Props {
  username: string;
  serverIp: string;
  newUser: string;
  copiedIdx: string | null;
  handleCopy: (cmd: string, id: string) => void;
  sx?: object;
  spacing?: number;
}

export const ContentContainer: React.FC<Props> = React.memo(({
  username,
  serverIp,
  newUser,
  copiedIdx,
  handleCopy,
  sx
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
    <Box sx={sx}>
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