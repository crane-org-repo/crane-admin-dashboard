import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/header";
import React from "react";
import { applicantFieldColumns } from "../../utils/constants";
import { getApplicants, ApplicantProps } from "../../services/applicants";

const Applicants = () => {
  const [applicants, setApplicants] = React.useState([{} as ApplicantProps]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  React.useEffect(() => {
    getApplicants().then((applicants) => setApplicants(applicants));
  }, []);

  const hello = "hell0";
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, m: 0.2 }}>
      <Header title="Applicants" subtitle="Manage your applicants here" />
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
          getRowId={(user) => {
            if (typeof user.id !== "undefined") {
              return user.id;
            } else {
              return 0;
            }
          }}
          checkboxSelection
          rows={applicants}
          columns={applicantFieldColumns}
        />
      </Box>
    </Box>
  );
};

export default Applicants;
