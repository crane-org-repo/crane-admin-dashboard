import {
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";

interface MutiSelectProps {
  value: any;
  handleChange: (event: SelectChangeEvent<[]>, child: React.ReactNode) => void;
  name: string;
  options: string[];
  touched: boolean | undefined;
  errors: string | string[] | undefined;
}

export const MultiSelect = ({
  value,
  handleChange,
  name,
  options,
  touched,
  errors,
}: MutiSelectProps) => {
  return (
    <Select
      multiple
      fullWidth
      value={value}
      onChange={handleChange}
      name={name}
      error={!!touched && !!errors}
      renderValue={(selected) => selected.join(", ")}
    >
      {options.map((option) => {
        return (
          <MenuItem key={option} value={option}>
            <Checkbox checked={value.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        );
      })}
    </Select>
  );
};
