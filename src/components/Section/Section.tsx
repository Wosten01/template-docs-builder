import React, { useMemo } from "react";
import { Typography, Stack, Accordion, Box, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFormFieldsContext } from "../../context";
import { useHashScroll, useLocalStorage } from "../../hooks";
import { CONFIG_CONSTANTS } from "../../constants";
import type {
  Block as BlockType,
  StepItem,
  StringWithTemplate,
} from "../../utils";
import { Block } from "../Block";
import { Note } from "../Note";

interface Props {
  title: string;
  sectionIdx: number;
  blocks?: BlockType[];
  note?: StringWithTemplate;
}

export const Section: React.FC<Props> = ({
  title,
  blocks,
  sectionIdx,
  note,
}) => {
  const { fields } = useFormFieldsContext();

  const sectionId = useMemo(
    () => `section-${title.replace(/\s+/g, "-").toLowerCase()}`,
    [title]
  );

  const [expanded, setExpanded] = useLocalStorage(
    `${CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.SECTION_EXPANDED_PREFIX}${sectionId}`,
    true
  );

  const handleToggle = () => setExpanded((prev: boolean) => !prev);

  const { ref } = useHashScroll(sectionId);

  const renderBlocks = useMemo(
    () =>
      blocks?.map((block, idx) => {
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
          p: { xs: 0, sm: 3 },
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
          {title}
        </Typography>
      </Box>
      <Collapse in={expanded}>
        <Stack
          spacing={6}
          className="rounded-b-md"
          sx={{
            width: "100%",
            px: { xs: 4, sm: 8 },
            mb: 8,
          }}
        >
          {note && <Note title={note(fields)} />}
          {renderBlocks}
        </Stack>
      </Collapse>
    </Accordion>
  );
};
