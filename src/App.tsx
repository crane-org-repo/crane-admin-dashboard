import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import ResumeBuilder from "./pages/resumeBuilder";
import SignIn from "./pages/signIn";

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<ResumeBuilder />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
