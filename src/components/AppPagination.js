import React from "react";
import { Pagination } from "@mui/material";

function AppPagination({ setPage, numberOfPage }) {
  const handleChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  return (
    <Pagination
      sx={{
        display: "flex",
        justifyContent: "center",
        ".Mui-selected": {
          backgroundColor: "rgb(215, 71, 66)",
          "&:hover": {
            backgroundColor: "rgb(150, 49, 46)",
          },
        },
      }}
      count={numberOfPage}
      onChange={handleChange}
    ></Pagination>
  );
}

export default AppPagination;
