import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import SideBar from "../../components/sideBar";
import { createResume } from "../../services/resume";

// const schema = yup.object().shape({
//   firstName: yup.string().required("First Name is required"),
//   lastName: yup.string().required("Last Name is required"),
//   phoneNumber: yup
//     .number()
//     .typeError("Phone Number must be a number")
//     .required("Phone Number is required"),
//   whatsapp: yup
//     .number()
//     .typeError("Whatsapp Number must be a number")
//     .required("Whatsapp Number is required"),
//   skill1: yup.string().required("Skill 1 is required"),
//   skill2: yup.string().required("Skill 2 is required"),
//   skill3: yup.string().required("Skill 3 is required"),
//   language1: yup.string().required("Language 1 is required"),
//   language2: yup.string().required("Language 2 is required"),
//   language3: yup.string().required("Language 3 is required"),
//   nationality: yup.string().required("Nationality is required"),
//   currentLocation: yup.string().required("Current Location is required"),
//   interestCountry: yup.string().required("Interest Country is required"),
// });

export default function ResumeBuilder() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // const defaultValues = {
  //   firstName: "Shamsheer",
  //   lastName: "Ahamed",
  //   phoneNumber: "88923560",
  //   whatsapp: "88923560",
  //   nationality: "INdina",
  //   currentLocation: "Singapore",
  //   interestCountry: "New Zealand",
  //   skills: [],
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Input results: ");
    console.log(data);
    createResume(data).then((response: any) => {
      console.log(response);
    });
  };

  return (
    <Box>
      <SideBar />

      <Typography variant="h4" component="h1" gutterBottom>
        Resume Builder
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            type="text"
            label="firstName"
            placeholder="First Name"
            {...register("firstName", {})}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            type="text"
            label="lastName"
            placeholder="Last Name"
            {...register("lastName", {})}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            type="number"
            label="phoneNumber"
            placeholder="Phone Number"
            {...register("phoneNumber", {})}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            type="number"
            label="whatsapp"
            placeholder="Whatsapp Number (if different)"
            {...register("whatsapp", {})}
            sx={{ gridColumn: "span 2" }}
          />
          <Typography
            sx={{
              gridColumn: "span 4",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Skills and Years
          </Typography>
          {[1, 2, 3].map((i) => (
            <>
              <TextField
                fullWidth
                type="text"
                label={`Skill ${i}`}
                placeholder={`Skill ${i}: (e.g: BCA - Timber Formwork)`}
                {...register(`skill-${i}`, {})}
                sx={{ gridColumn: "span 3" }}
              />
              <Select
                placeholder="Years of experience"
                label={`skill-${i}-yoe`}
                sx={{ gridColumn: "span 1" }}
                {...register(`skill-${i}-yoe`, {})}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </>
          ))}
          <Typography
            sx={{ gridColumn: "span 4", fontWeight: "bold", fontSize: "25px" }}
          >
            Languages and Years
          </Typography>
          {[1, 2, 3].map((i) => (
            <>
              <TextField
                fullWidth
                type="text"
                placeholder={`Language ${i}: (e.g Bengali/Tamil)`}
                label={`language-${i}`}
                {...register(`language-${i}`, {})}
                sx={{ gridColumn: "span 3" }}
              />
              <Select
                label={`language-${i}-yoe`}
                {...register(`language-${i}-yoe`, {})}
                sx={{ gridColumn: "span 1" }}
                defaultValue={1}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </>
          ))}
          <Typography
            sx={{ gridColumn: "span 4", fontWeight: "bold", fontSize: "25px" }}
          >
            Geography
          </Typography>
          <TextField
            fullWidth
            type="text"
            placeholder="Nationality: (e.g Bangladeshi/Indian)"
            label="Nationality"
            {...register("nationality", {})}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Where are you based now? (e.g Singapore/UAE/Malaysia)"
            {...register("currentLocation", {})}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Which country do you want to migrate to?"
            {...register("interestedCountry", {})}
            sx={{ gridColumn: "span 4" }}
          />{" "}
          <Box
            display="flex"
            justifyContent="end"
            mt="20px"
            sx={{ gridColumn: "span 4" }}
          >
            <Button type="submit" color="secondary" variant="contained">
              Create New Resume
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
