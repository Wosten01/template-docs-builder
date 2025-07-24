import React, { useMemo, useState, useEffect } from "react";
import { Typography, Stack, Accordion, Box, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { Block as block, StepItem } from "../../configs";
import { Block } from "../Block";
import { useFormFieldsContext } from "../../context";
import { useHashScroll } from "../../hooks";

interface Props {
  section: string;
  blocks: block[];
  sectionIdx: number;
}

export const Section: React.FC<Props> = ({ section, blocks, sectionIdx }) => {
  const { fields } = useFormFieldsContext();
  
  const sectionId = useMemo(
    () => `section-${section.replace(/\s+/g, "-").toLowerCase()}`,
    [section]
  );

  const [expanded, setExpanded] = useState(() => {
    const stored = localStorage.getItem(`section-expanded-${sectionId}`);
    return stored !== null ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem(`section-expanded-${sectionId}`, JSON.stringify(expanded));
  }, [expanded, sectionId]);

  const handleToggle = () => setExpanded((prev: boolean) => !prev);

  const { ref } = useHashScroll(sectionId);

  const renderBlocks = useMemo(
    () =>
      blocks.map((block, idx) => {
        const id = `${sectionIdx}-${idx}`;
        return (
          <Block
            key={id}
            code={block.code?.(fields)}
            steps={block.steps?.map((step): StepItem => {
              const result = step(fields);
              if (typeof result === "string") return result;
              return { text: result.text, code: result.code };
            })}
            note={block.note?.(fields)}
            title={block.title}
            description={block.description}
          />
        );
      }),
    [blocks, fields, sectionIdx]
  );

  return (
    <Accordion
      id={sectionId}
      ref={ref}
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
        onClick={handleToggle}
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
        <Typography variant="h5" color="primary" sx={{ fontWeight: 500 }}>
          {section}
        </Typography>
      </Box>
      <Collapse in={expanded}>
        <Stack
          spacing={6}
          className="px-8 mb-8 rounded-b-md"
          sx={{ width: "100%" }}
        >
          {renderBlocks}
        </Stack>
      </Collapse>
    </Accordion>
  );
};