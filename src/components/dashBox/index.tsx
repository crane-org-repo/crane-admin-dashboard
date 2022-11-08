import { Box, Chip, Typography, useTheme } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { tokens } from "../../theme";

interface DashBoxProps {
  title: string;
  description: string;
  minSalary: string;
  maxSalary: string;
  salaryRate: string;
}

const DashBox = ({
  title,
  description,
  minSalary,
  maxSalary,
  salaryRate,
}: DashBoxProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const size = "40";
  const salary = minSalary + " - " + maxSalary + " " + salaryRate;

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="left" alignItems="center" mb="5px">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[1000] }}
        >
          {title}
        </Typography>
      </Box>
      <Box mb="5px">
        <Chip
          icon={<AttachMoneyIcon />}
          label={salary}
          variant="outlined"
          size="small"
        ></Chip>
      </Box>

      <Box mb="5px">
        <Chip
          icon={<AttachMoneyIcon />}
          label="Poly"
          variant="outlined"
          size="small"
        ></Chip>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mt="2px">
        <Typography variant="subtitle1" sx={{ color: colors.grey[400] }}>
          {description} + {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default DashBox;
