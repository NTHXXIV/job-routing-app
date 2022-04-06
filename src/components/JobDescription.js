import React from "react";
import { Typography, Box, Stack, Chip, Divider } from "@mui/material";

function JobDescription({ job }) {
  return (
    <div>
      <Typography
        sx={{
          fontSize: "2rem",
          letterSpacing: "0.00938em",
          fontWeight: "400",
          lineHeight: "1.5",
        }}
        m="0"
        gutterBottom
      >
        {job.title}
      </Typography>
      <Divider
        sx={{ mb: "5px", border: "1px solid rgba(255, 255,255, 0.12)" }}
        m="0"
      />
      <Box sx={{ textAlign: "center", height: "100%" }}>
        <Typography sx={{ fontSize: "0.8rem", mt: "4px" }}>
          {job.description}
        </Typography>
        <Typography>Skills:</Typography>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            textAlign: "left",
            flexWrap: "wrap",
          }}
        >
          {job.skills.map((skill) => (
            <Chip
              sx={{
                backgroundColor: "rgb(215, 71, 66)",
                borderRadius: "16px",
                fontSize: "0.5rem",
                height: "16px",
                mb: "5px",
              }}
              label={skill}
              key={skill}
            />
          ))}
        </Stack>
        <Typography>{`City: ${job.city}`}</Typography>
      </Box>
    </div>
  );
}

export default JobDescription;
