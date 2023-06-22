import { Box, Button, Checkbox, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import CustomInput from "./CustomInput";
import { BrowserRouter, Link, Route } from "react-router-dom";

const SigninPage = () => {
  //    const navigate = useNavigate();
  //    console.log(navigate);

  //   const gotoQuestion = useCallback(() => {
  //     navigate("./QuestionPage")
  // }, [navigate]);

  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: {
          xs: "",
          sm: "",
          md: "15px 2px 5px -5px",
          lg: "15px 2px 5px -5px",
          xl: "15px 2px 5px -5px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 24, 57, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 0 0 30px",
            lg: "30px 0 0 30px",
            xl: "30px 0 0 30px",
          },
        }}
      >
        <Box width="50%">
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* LOGO */}
            <Link to="/">
              <Box
                sx={{
                  mt: "60px",
                  width: "150px",
                  height: "50px",
                  bgcolor: "primary.main",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 20px ${colors.green[500]}`,
                }}
              >
                <Typography variant="h6" fontWeight="bold" color="white">
                  LUNA
                </Typography>
              </Box>
            </Link>
            {/* LOGO END */}

            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", marginTop: 4, marginBottom: 0 }}
              mt={7}
              mb={1}
            >
              Simplifies connecting, augmenting your career
            </Typography>
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", margin: 0 }}
              mt={7}
              mb={3}
            ></Typography>
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", marginTop: 4 }}
              mt={7}
              mb={3}
            >
              Sign in to our ConnectU
            </Typography>
          </Box>

          {/* INPUTS */}
          <CustomInput
            label="Login"
            placeholder="Enter your login..."
            isIconActive={false}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password..."
            isIconActive={true}
          />
          {/* <CustomInput
            label="MFA Code"
            placeholder="Enter your code..."
            isIconActive={true}
          /> */}
          {/* INPUT END */}

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mt={2}
            width="100%"
            color="white"
          >
            <div style={{ display: "flex" }}>
              <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
              <Typography>Remember me</Typography>
            </div>
            <a
              href="#yoyo"
              style={{
                color: colors.green[500],
                textDecoration: "none",
              }}
            >
              Forget password?
            </a>
          </Box>
          <Button
            //onClick={gotoQuestion}
            variant="contained"
            fullWidth
            sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SigninPage;