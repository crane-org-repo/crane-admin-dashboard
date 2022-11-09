import { GridColDef } from "@mui/x-data-grid";

export const jobTypeOptions = [
  "FULLTIME",
  "PARTTIME",
  "PERMANENT",
  "CONTRACT",
  "TEMPORARY",
  "FREELANCE",
  "INTERNSHIP",
  "FRESHGRAD",
  "STUDENT",
];

export const jobScheduleOptions = [
  "EARLYSHIFT",
  "DAYSHIFT",
  "LATESHIFT",
  "NIGHTSHIFT",
  "FLEXIBLE",
  "M2F",
  "HOLIDAYS",
  "WEEKEND",
  "OTHER",
  "NONE",
];

export const jobEduOptions = [
  "LOWERSEC",
  "OLEVEL",
  "ALEVEL",
  "POLY",
  "PROFESSIONAL",
  "DEGREE",
  "POSTGRAD",
  "MASTERS",
  "DOCTORATE",
];

export const jobRateOptions = [
  "Per Year",
  "Per Month",
  "Per Hour",
  "Per Week",
  "Per Day",
];

export const jobFieldColumns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  {
    field: "title",
    headerName: "Title",
    cellClassName: "title-column--cell",
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
  {
    field: "companyId",
    headerName: "Company Id",
    flex: 1,
  },
  {
    field: "ratings",
    headerName: "Ratings",
    type: "number",
    flex: 1,
  },
  {
    field: "url",
    headerName: "Job Url",
    flex: 1,
  },
  {
    field: "isTravel",
    headerName: "Travel?",
    flex: 1,
  },
  {
    field: "minSalary",
    headerName: "Minimum Salary",
    flex: 1,
  },
  {
    field: "maxSalary",
    headerName: "Maximum Salary",
    flex: 1,
  },
  {
    field: "limit",
    headerName: "Limit",
    flex: 1,
  },
  {
    field: "type",
    headerName: "Job Type",
    flex: 1,
  },
  {
    field: "schedule",
    headerName: "Job Schedule",
    flex: 1,
  },
  {
    field: "eduReq",
    headerName: "Education",
  },
];

export const applicantFieldColumns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  {
    field: "email",
    headerName: "Email",
    cellClassName: "email-column-cell",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    cellClassName: "created-at-column-cell",
  },
  {
    field: "firstName",
    headerName: "First Name",
    cellClassName: "first-name-column-cell",
  },
  {
    field: "lastName",
    headerName: "Last Name",
    cellClassName: "last-name-column-cell",
  },
];
