"use client";

import { useState } from "react";

import Box from "@mui/material/Box";

import { Paper } from "@mui/material";
import AppHeader, { headerAppHeight } from "@/components/layouts/AppHeader";
import AppDrawer from "@/components/layouts/AppDrawer";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const defaultProps = {
    open,
    toggleDrawer,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppHeader {...defaultProps} />
      <AppDrawer {...defaultProps} />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[300],
          flexGrow: 1,
          minHeight: "100vh",
          marginTop: headerAppHeight,
          overflow: "auto",
          paddingBlock: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            minHeight: "100vh",
            flexGrow: 1,
            maxWidth: 1200,
            paddingBlock: 4,
            paddingInline: 3,
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default AppLayout;
