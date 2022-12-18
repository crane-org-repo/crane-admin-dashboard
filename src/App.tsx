import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import ResumeBuilder from "./pages/resumeBuilder";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<ResumeBuilder />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
