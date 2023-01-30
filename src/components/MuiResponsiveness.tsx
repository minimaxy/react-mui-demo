import React from "react";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  //   backgroundColor: theme.status.danger,
  // backgroundColor: theme.palette.neutral?.darker,
}));

export const MuiResponsiveness = () => {
  return (
    <>
      {/* ''か{}が使えるという意味。''はストリング、{}はオブジェクト */}
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, //0
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1536
          },
          // bgcolor: "primary.main",
          bgcolor: "secondary.light",
        }}
      >
        MuiResponsiveness
      </Box>
      <StyledBox />
    </>
  );
};
