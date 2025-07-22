import React, { useState } from 'react';
import { Box, Typography, Paper, Tabs, Tab, type SxProps } from '@mui/material';
import { blocksConfig } from '../../configs/blocks';

interface ContentNavigationProps {
  sx?: SxProps;
  onSectionClick?: (sectionId: string) => void;
}

export const ContentNavigation: React.FC<ContentNavigationProps> = ({ sx, onSectionClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSectionClick = (groupName: string, index: number) => {
    setActiveTab(index);
    const element = document.getElementById(`section-${groupName.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onSectionClick?.(groupName);
  };

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
          🗺️ Навигация по контенту
        </Typography>
        
        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{
            '& .MuiTabs-flexContainer': {
              alignItems: 'stretch',
            },
            '& .MuiTabs-indicator': {
              left: 0,
              right: 'auto',
              width: 3,
            },
            '& .MuiTab-root': {
              textAlign: 'left',
              alignItems: 'flex-start',
              minHeight: 40,
              fontSize: '0.9rem',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: 1,
              mb: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(25, 118, 210, 0.12)',
              },
            },
          }}
        >
          {blocksConfig.map((group, index) => (
            <Tab
              key={index}
              label={group.group}
              onClick={() => handleSectionClick(group.group, index)}
            />
          ))}
        </Tabs>
      </Paper>
    </Box>
  );
};