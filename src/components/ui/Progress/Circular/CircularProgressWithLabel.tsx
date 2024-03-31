"use client";

import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CircularProgressWithLabel = (
  props: CircularProgressProps & {
    value: number;
    circleColor: string;
  }
) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        sx={{ color: props.circleColor }}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          component="div"
          color="white"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
