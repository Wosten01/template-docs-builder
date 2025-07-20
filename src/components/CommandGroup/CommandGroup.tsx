import React, { useCallback, useMemo } from "react";
import { Typography, Stack, Accordion, Box, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  groupIdx,
}) => {
  const [expanded, setExpanded] = React.useState(true);

  const renderItems = useMemo(
    () =>
      commands.map((cmd, cIdx) => {
        const cmdText = cmd.template(
          username || "{USERNAME}",
          serverIp || "{SERVER_IP}",
          newUser || "{NEWUSER}"
        );
        const id = `${groupIdx}-${cIdx}`;
        return (
          <CommandBlock
            key={id}
            text={cmdText}
            title={cmd.title}
            description={cmd.description}
          />
        );
      }),
    [commands, groupIdx, newUser, serverIp, username]
  );

  const accordionId = useCallback(
    () => `section-${group.replace(/\s+/g, "-").toLowerCase()}`,
    [group]
  );

  return (
    <Accordion
      id={accordionId()}
      defaultExpanded
      sx={{
        mt: "0 !important",
        mb: "2 !important",
        borderRadius: "4px !important",
        "&:before": { display: "none" },
        overflow: "hidden",
      }}
    >
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          p: 2,
          backgroundColor: "rgba(0,0,0,0.02)",
          borderRadius: 2,
          "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
        }}
      >
        <ExpandMoreIcon
          sx={{
            mr: 1,
            transform: expanded ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 0.2s ease",
          }}
        />
        <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
          {group}
        </Typography>
      </Box>
      <Collapse in={expanded}>
        <Stack spacing={4} className="px-5 py-2 rounded-b-md ">
          {renderItems}
        </Stack>
      </Collapse>
    </Accordion>
  );
};
