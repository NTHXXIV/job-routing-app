import * as React from "react";
import Card from "@mui/material/Card";
import { Typography, Chip, Stack, Button, Divider, Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function AppCard({ e }) {
  return (
    <Card
      sx={{
        width: "320px",
        height: "240px",
        padding: "16px",
        backgroundColor: "rgb(18, 18, 18)",
        color: "rgb(255, 255, 255)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "4px",
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
      }}
    >
      <Typography
        sx={{
          fontSize: "1rem",
          letterSpacing: "0.00938em",
          fontWeight: "400",
          lineHeight: "1.5",
        }}
        m="0"
        gutterBottom
      >
        {e.title}{" "}
      </Typography>
      <Divider
        sx={{ mb: "5px", border: "1px solid rgba(255, 255,255, 0.12)" }}
        m="0"
      />
      <Box sx={{ textAlign: "left", height: "100%" }}>
        <Stack direction="row" spacing={0.5} sx={{ textAlign: "left" }}>
          {e.skills.slice(0, 4).map((skill) => (
            <Chip
              sx={{
                backgroundColor: "rgb(215, 71, 66)",
                borderRadius: "16px",
                fontSize: "0.5rem",
                height: "16px",
              }}
              label={skill}
              key={skill}
            />
          ))}
        </Stack>
        <Typography
          paragraph={true}
          sx={{
            display: "inline-block",
            fontSize: "0.8rem",
            mt: "4px",
            width: "290px",
            height: "60px",
            overflow: "hidden",
          }}
        >
          {e.description}
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Link to={`/jobs/${e.id}`}>
            <Button
              sx={{
                mt: "20px",
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "rgb(255, 167, 38)",
                p: "4px 10px",
                "&:hover": {
                  backgroundColor: "rgb(245, 124, 0)",
                  boxShadow:
                    "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
                },
                "&:active": {
                  boxShadow:
                    "rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px}",
                },
                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
              }}
            >
              Learn more
            </Button>
          </Link>
        </Box>
      </Box>
    </Card>
  );
}
