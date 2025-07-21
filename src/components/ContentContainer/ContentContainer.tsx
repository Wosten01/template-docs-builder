import React, { useMemo } from "react";
import { Box, Typography, Stack, type SxProps } from "@mui/material";
import { CommandGroup } from "../CommandGroup";
import { commandsConfig } from "../../configs";

interface Props {
  title: string;
  sx?: SxProps;
  spacing?: number;
}

export const ContentContainer: React.FC<Props> = React.memo(
  ({  sx, title }) => {
    const commandGroups = useMemo(
      () =>
        commandsConfig.map((group, gIdx) => (
          <CommandGroup
            key={group.group}
            group={group.group}
            commands={group.commands}
            groupIdx={gIdx}
          />
        )),
      []
    );

    return (
      <Box sx={sx}>
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            p: { lg: 0, xs: 5 },
            mb: { lg: 4, xs: 0 },
            textAlign: { xs: "center", lg: "left" },
          }}
          color="primary"
        >
          {title}
        </Typography>
        <Stack
          sx={{
            justifyContent: {
              xs: "center",
            },
            p: { xs: 3, lg:0 },
          }}
        >
          {commandGroups}
        </Stack>
      </Box>
    );
  }
);
