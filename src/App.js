import Sidebar from "./components/sideBar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Jobs from "./pages/jobs";
import Applicants from "./pages/applicants";
import Form from "./pages/form";
import Calendar from "./pages/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
