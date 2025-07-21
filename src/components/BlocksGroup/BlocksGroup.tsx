import React, { useCallback } from "react";
import { Typography, Stack, Accordion, Box, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { Command as block } from "../../configs";
import { CommandBlock } from "../Block";
import { useFormFieldsContext } from "../../context";

interface Props {
  group: string;
  block: block[];
  groupIdx: number;
}

export const BlocksGroup: React.FC<Props> = ({
  group,
  block: blocks,
  groupIdx,
}) => {
  const [expanded, setExpanded] = React.useState(true);
  const { fields } = useFormFieldsContext();

  const renderItems = blocks.map((block, idx) => {
    const id = `${groupIdx}-${idx}`;
    return (
      <CommandBlock
        key={id}
        code={block.code?.(fields)}
        steps={block.steps}
        note={block.note}
        title={block.title}
        description={block.description}
      />
    );
  });

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
        userSelect: "none",
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
          p: 3,
          backgroundColor: "rgba(0,0,0,0.02)",
          borderRadius: 2,
          minHeight: 56,
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
        <Typography variant="h4" color="primary" sx={{ fontWeight: 500 }}>
          {group}
        </Typography>
      </Box>
      <Collapse in={expanded}>
        <Stack
          spacing={6}
          className="px-8 mb-8 rounded-b-md"
          sx={{ width: "100%" }}
        >
          {renderItems}
        </Stack>
      </Collapse>
    </Accordion>
  );
};
