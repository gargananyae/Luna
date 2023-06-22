import { VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";


const CustomInput = ({ isIconActive, label, placeholder , email, setEmail, password, setPassword}) => {
  return (

    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="flex-start"
      mb={2}
    >
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Typography color="black" pb={1}>
          {label}
        </Typography>
        <Paper
          sx={{
            background: "#380027",
            width: "100%"
          }}
        >
          <InputBase

          value = {label=="Login"? email : password}
          onChange={(e)=> {label == "Login"? setEmail(e.target.value) : setPassword(e.target.value)}}
            placeholder={placeholder}
            fullWidth
            sx={{
              bgcolor: "#380027",
              p: 1,
              borderRadius: "5px",
            }}
            endAdornment={
              isIconActive && (
                <InputAdornment position="end" sx={{ pr: 1 }}>
                  <IconButton edge="end">
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default CustomInput;