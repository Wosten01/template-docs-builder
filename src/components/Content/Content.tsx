import { useMemo } from "react";
import { Box, Typography, Stack, type SxProps } from "@mui/material";
import { Section } from "../Section";
import { blocksConfig } from "../../configs";

interface Props {
  title: string;
  sx?: SxProps;
  spacing?: number;
}

export const Content: React.FC<Props> = (({ sx, title }) => {
  const sections = useMemo(
    () =>
      blocksConfig.map((section, gIdx) => (
        <Section
          key={section.title}
          title={section.title}
          blocks={section.blocks}
          sectionIdx={gIdx}
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
        {sections}
      </Stack>
    </Box>
  );
});
