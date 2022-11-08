import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { Formik } from "formik";
import React from "react";
import Header from "../../components/header";
import { MultiSelect } from "../../components/multiSelect";
import { createJob, createJobs, JobProps } from "../../services/jobs";
import {
  jobEduOptions,
  jobRateOptions,
  jobScheduleOptions,
  jobTypeOptions,
} from "../../utils/constants";
import { OutlinedInput } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import * as xlsx from "xlsx";

//Temporary function
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs());
  const [successUpload, setSuccessUpload] = React.useState(false);
  const [jobUploadedCount, setJobUploadedCount] = React.useState(0);

  const handleDateChange = (newDate: Dayjs | null) => {
    setStartDate(newDate);
  };

  const readUploadFile = (e: any) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jobDataPoints = xlsx.utils.sheet_to_json(worksheet);
        createJobs(jobDataPoints as JobProps[]).then((job) => {
          setSuccessUpload(true);
          setJobUploadedCount(jobDataPoints.length);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, m: 0.2 }}>
      <Collapse in={successUpload}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccessUpload(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Success</AlertTitle>
          {jobUploadedCount} Jobs uploaded successfully!
        </Alert>
      </Collapse>
      <Header title="CREATE JOB" subtitle="or upload your jobs below " />
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        sx={{ mb: 3 }}
      >
        <OutlinedInput
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
      </Button>
      <Formik
        onSubmit={(values: any, setSubmitting: any) => {
          values = {
            ...values,
            title: values.title + " " + getRandomInt(1000),
            description: values.description + " " + getRandomInt(1000),
            startDate: startDate?.toISOString(),
            companyId: "cla3px41g00025a43z00lscfn",
          };
          createJob(values).then((jobs) => console.log(jobs));
        }}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
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
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />
              <InputLabel
                sx={{ gridColumn: "span 4", fontWeight: "bold", fontSize: 16 }}
              >
                Is travel required?
              </InputLabel>
              <Select
                fullWidth
                value={values.isTravel}
                onChange={handleChange}
                label="Travel required?"
                name="isTravel"
                error={!!touched.isTravel && !!errors.isTravel}
              >
                <MenuItem sx={{ gridColumn: "span 2" }} value={"true"}>
                  True
                </MenuItem>
                <MenuItem sx={{ gridColumn: "span 2" }} value={"false"}>
                  False
                </MenuItem>
              </Select>

              <InputLabel
                sx={{ gridColumn: "span 4", fontWeight: "bold", fontSize: 16 }}
              >
                What are your job preferences?
              </InputLabel>
              <Select
                value={values.type}
                onChange={handleChange}
                name="type"
                error={!!touched.type && !!errors.type}
              >
                {jobTypeOptions.map((option) => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>
              <Select
                value={values.schedule}
                onChange={handleChange}
                name="schedule"
                error={!!touched.schedule && !!errors.schedule}
              >
                {jobScheduleOptions.map((option) => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>

              <Select
                value={values.eduReq}
                onChange={handleChange}
                name="education"
                error={!!touched.eduReq && !!errors.eduReq}
              >
                {jobEduOptions.map((option) => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>

              <InputLabel
                sx={{ gridColumn: "span 4", fontWeight: "bold", fontSize: 16 }}
              >
                What is your salary range?
              </InputLabel>
              <TextField
                fullWidth
                type="number"
                label="Minmum Salary"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.minSalary}
                name="minSalary"
                error={!!touched.minSalary && !!errors.minSalary}
                helperText={touched.minSalary && errors.minSalary}
              />
              <TextField
                fullWidth
                type="text"
                label="Maximum Salary"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxSalary}
                name="maxSalary"
                error={!!touched.maxSalary && !!errors.maxSalary}
                helperText={touched.maxSalary && errors.maxSalary}
              />
              <Select
                fullWidth
                value={values.salaryRate}
                onChange={handleChange}
                label="Salary Rate"
                name="salaryRate"
                error={!!touched.salaryRate && !!errors.salaryRate}
              >
                {jobRateOptions.map((option) => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>
              <InputLabel
                sx={{ gridColumn: "span 4", fontWeight: "bold", fontSize: 16 }}
              >
                What is your start date?
              </InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Start date"
                  inputFormat="MM/DD/YYYY"
                  value={startDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <InputLabel
                sx={{ gridColumn: "span 4", fontWeight: "bold", fontSize: 16 }}
              >
                How many people do you need to hire?
              </InputLabel>
              <TextField
                fullWidth
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.limit}
                name="limit"
                error={!!touched.limit && !!errors.limit}
                helperText={touched.limit && errors.limit}
              />
              <InputLabel
                sx={{ gridColumn: "span 4", fontWeight: "bold", fontSize: 16 }}
              >
                Would you like to add an url to your company site?
              </InputLabel>
              <TextField
                fullWidth
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.url}
                name="url"
                error={!!touched.url && !!errors.url}
                helperText={touched.url && errors.url}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Job
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   title: yup.string().required("required"),
//   description: yup.string().required("required"),
//   isTravel: yup.boolean().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
//   limit: yup.number().required("required"),
// });
const initialValues = {
  title: "Sample title",
  description: "Sample Description",
  isTravel: false,
  minSalary: 2000,
  maxSalary: 3000,
  limit: 100,
  type: "PERMANENT",
  schedule: "DAYSHIFT",
  eduReq: "POLY",
  salaryRate: "Per Month",
  url: "example.com",
};

export default Form;
