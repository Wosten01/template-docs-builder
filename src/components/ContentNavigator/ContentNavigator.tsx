import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Tabs, Tab, type SxProps } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContentConfig } from "../../hooks";

interface ContentNavigationProps {
  title: string,
  onSectionClick?: (sectionId: string) => void;
  sx?: SxProps;
}

export const ContentNavigation: React.FC<ContentNavigationProps> = ({
  title,
  onSectionClick,
  sx,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
   const { content }=  useContentConfig()

  useEffect(() => {
    const hashFromUrl = decodeURIComponent(location.hash.slice(1));
    if (hashFromUrl.startsWith("section-")) {
      const sectionName = hashFromUrl
        .replace("section-", "")
        .replace(/-/g, " ");
      const index = content?.findIndex(
        (section) => section.title.toLowerCase() === sectionName.toLowerCase()
      );
      if (index && index !== -1) {
        setActiveTab(index);
      }
    }
  }, [content, location.hash]);

  const handleSectionClick = (groupName: string, index: number) => {
    setActiveTab(index);
    const sectionId = `section-${groupName.replace(/\s+/g, "-").toLowerCase()}`;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
    onSectionClick?.(groupName);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId.startsWith("section-")) {
              const sectionName = sectionId
                .replace("section-", "")
                .replace(/-/g, " ");
              const index = content?.findIndex(
                (section) =>
                  section.title.toLowerCase() === sectionName.toLowerCase()
              );
              if (index && index !== -1) {
                setActiveTab(index);
                window.history.replaceState(null, "", `#${sectionId}`);
              }
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [content]);

  return (
    <Box sx={{ position: "sticky", top: 20, alignSelf: "flex-start", ...sx }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(0,0,0,0.02)",
          border: "1px solid rgba(0,0,0,0.05)",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 2 }}
          color="primary"
        >
          {`🗺️ ${title}`}
        </Typography>

        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{
            "& .MuiTabs-flexContainer": {
              alignItems: "stretch",
            },
            "& .MuiTabs-indicator": {
              left: 0,
              right: "auto",
              width: 3,
            },
            "& .MuiTab-root": {
              textAlign: "left",
              alignItems: "flex-start",
              minHeight: 40,
              fontSize: "0.9rem",
              fontWeight: 500,
              textTransform: "none",
              borderRadius: 1,
              mb: 0.5,
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.08)",
              },
              "&.Mui-selected": {
                backgroundColor: "rgba(25, 118, 210, 0.12)",
              },
            },
          }}
        >
          {content?.map((section, index) => (
            <Tab
              key={index}
              label={section.title}
              onClick={() => handleSectionClick(section.title, index)}
            />
          ))}
        </Tabs>
      </Paper>
    </Box>
  );
};
