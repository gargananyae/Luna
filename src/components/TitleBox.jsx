import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const TitleBox = () => {
  return (
    <Grid xs={0} sm={0} md={6} lg={6} xl={6} minHeight={550}>
      <Box
        sx={{

          backgroundImage: 'linear-gradient( 135deg, rgba(107, 50, 90, 0.65) , rgba(71, 0, 49, 1) , rgba(126, 76, 110, 1) , rgba(0, 0, 0, 1))',
          padding: "20px",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          borderRadius: "0px 30px 30px 0",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h4" fontWeight="bold" color="whitesmoke" mb={3}>
            Join Our <br /> Community
          </Typography>
          <Typography variant="body1" fontWeight="" color="whitesmoke">
            Customize your period from A to Z!
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default TitleBox;
