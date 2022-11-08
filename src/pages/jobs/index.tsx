import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/header";
import React, { useCallback } from "react";
import { getJobs, JobProps } from "../../services/jobs";
import { jobFieldColumns } from "../../utils/constants";

const Jobs = () => {
  const [jobs, setJobs] = React.useState([{} as JobProps]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  React.useEffect(() => {
    getJobs().then((jobs) => setJobs(jobs));
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, m: 0.2 }}>
      <Header title="Jobs" subtitle="Manage your jobs here" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            width: "100%",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(job) => {
            if (typeof job.id !== "undefined") {
              return job.id;
            } else {
              return 0;
            }
          }}
          checkboxSelection
          rows={jobs}
          columns={jobFieldColumns}
        />
      </Box>
    </Box>
  );
};

export default Jobs;
