import React from "react";
import { Typography, Stack } from "@mui/material";
import type { Command } from "../../configs";
import { CommandBlock } from "../CommandBlock";

interface CommandGroupProps {
  group: string;
  commands: Command[];
  username: string;
  serverIp: string;
  newUser: string;
  copiedIdx: string | null;
  handleCopy: (cmd: string, id: string) => void;
  groupIdx: number;
}

export const CommandGroup: React.FC<CommandGroupProps> = ({
  group,
  commands,
  username,
  serverIp,
  newUser,
  copiedIdx,
  handleCopy,
  groupIdx,
}) => (
  <section className="mb-8">
    <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 700 }}>
      {group}
    </Typography>
    <Stack spacing={2}>
      {commands.map((cmd, cIdx) => {
        const cmdText = cmd.template(username || '{USERNAME}', serverIp || '{SERVER_IP}', newUser || '{NEWUSER}');
        const id = `${groupIdx}-${cIdx}`;
        return (
          <CommandBlock
            key={id}
            text={cmdText}
            copied={copiedIdx === id}
            onCopy={() => handleCopy(cmdText, id)}
            title={cmd.title}
          />
        );
      })}
    </Stack>
  </section>
);
