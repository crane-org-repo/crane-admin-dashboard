import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

interface StatBoxProps {
  title: number;
  subtitle: string;
  icon: React.ReactElement;
}

const StatBox = ({ title, subtitle, icon }: StatBoxProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const size = "40";

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[1000] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt="2px">
        <Typography variant="h5" sx={{ color: colors.grey[400] }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
