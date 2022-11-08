import AssignmentIcon from "@mui/icons-material/Assignment";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { useState } from "react";
import Header from "../../components/header";
import DashBox from "../../components/dashBox";
import StatBox from "../../components/statBox";
import Topbar from "../../components/topBar";
import { getAppliCount } from "../../services/applicants";
import { getHiredSuccessCount } from "../../services/company";
import {
  getJobClosedCount,
  getJobCount,
  getRecentJobPosts,
  JobProps,
  RecentJobPostProp,
} from "../../services/jobs";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [jobCount, setJobCount] = useState(0);
  const [appliCount, setAppliCount] = useState(0);
  const [jobClosedCount, setJobClosedCount] = useState(0);
  const [hiredSuccessCount, setHiredSuccessCount] = useState(0);
  const [recentJobPosts, setRecentJobPosts] = useState([
    {} as RecentJobPostProp,
  ]);

  React.useEffect(() => {
    getJobCount().then((count: number) => setJobCount(count));
    getAppliCount().then((count: number) => setAppliCount(count));
    getJobClosedCount().then((count: number) => setJobClosedCount(count));
    getHiredSuccessCount().then((count: number) => setHiredSuccessCount(count));
    getRecentJobPosts().then((recentJobs: RecentJobPostProp[]) => {
      console.log(recentJobs);
      setRecentJobPosts(recentJobs);
    });
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, m: 0.2 }}>
      <Topbar />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          sx={{
            gridColumns: "span 3",
            backgroundColor: `${colors.greenAccent[200]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <StatBox
            title={jobCount}
            subtitle="Jobs Posted"
            icon={
              <PersonSearchIcon
                sx={{ color: colors.greenAccent[600], fontSize: "60px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumns: "span 3",
            backgroundColor: `${colors.blueAccent[200]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <StatBox
            title={appliCount}
            subtitle="Applicants"
            icon={
              <AssignmentIcon
                sx={{ color: colors.blueAccent[600], fontSize: "60px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumns: "span 3",
            backgroundColor: `${colors.redAccent[200]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <StatBox
            title={jobClosedCount}
            subtitle="Jobs Closed"
            icon={
              <EventBusyIcon
                sx={{ color: colors.redAccent[600], fontSize: "60px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumns: "span 3",
            backgroundColor: "#85c0f4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <StatBox
            title={hiredSuccessCount}
            subtitle="Hired Success"
            icon={
              <CelebrationIcon
                sx={{ color: colors.tintBlueAccent[100], fontSize: "60px" }}
              />
            }
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          backgroundColor: `${colors.primary[400]}`,
          p: "20px",
          mt: "40px",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Header title="" subtitle="Suggested Job Seekers" />
        </Box>
        {/* Suggested Job Seekers */}

        <Box display="grid" gridTemplateColumns="repeat(1, 1fr)">
          <Box
            sx={{
              gridColumns: "span 3",
              backgroundColor: `${colors.custom[100]}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              pt: "20px",
              pb: "20px",
              mr: "20px",
            }}
          >
            <Typography fontWeight="bold" fontSize="20px">
              Coming Soon!
            </Typography>
          </Box>
        </Box>

        {/* Recent Job Posts */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "20px",
          }}
        >
          <Header title="" subtitle="Recent Job Posts" />
        </Box>

        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
          {recentJobPosts.map((recentJobPost, index) => (
            <Box
              sx={{
                key: { index },
                gridColumns: "span 3",
                backgroundColor: `${colors.custom[100]}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                pt: "20px",
                pb: "20px",
                mr: "20px",
              }}
            >
              <DashBox
                title={recentJobPost.title}
                description={recentJobPost.description}
                minSalary={recentJobPost.minSalary}
                maxSalary={recentJobPost.maxSalary}
                salaryRate={recentJobPost.salaryRate}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
