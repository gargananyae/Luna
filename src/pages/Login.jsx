import { Box, Button, Checkbox, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import CustomInput from "../components/CustomInput";
import SigninPage from "../components/SigninPage";
import TitleBox from "../components/TitleBox";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "60vw",
            lg: "60vw",
            xl: "60vw",
          },
        }}
      >
        {/* GRID SYSTEM */}
        <Grid container height="90vh">
          <SigninPage />

          <TitleBox />
        </Grid>
        {/* GRID SYSTEM END */}
      </Box>
    </MainLayout>
  );
};

export default Login;
