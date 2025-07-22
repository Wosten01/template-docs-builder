import { useMemo } from "react";
import { Box, Typography, Stack, type SxProps } from "@mui/material";
import { BlocksGroup } from "../BlocksGroup";
import { blocksConfig } from "../../configs";

interface Props {
  title: string;
  sx?: SxProps;
  spacing?: number;
}

export const ContentContainer: React.FC<Props> = (({ sx, title }) => {
  const blocksGroups = useMemo(
    () =>
      blocksConfig.map((group, gIdx) => (
        <BlocksGroup
          key={group.group}
          group={group.group}
          blocks={group.blocks}
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
          p: { xs: 3, lg: 0 },
        }}
      >
        {blocksGroups}
      </Stack>
    </Box>
  );
});
