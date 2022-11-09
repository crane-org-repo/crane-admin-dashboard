import * as React from "react";
import * as config from "./config";

export interface JobProps {
  id: string;
  title: string;
  description: string;
  isTravel: boolean;
  company: string;
  minSalary: number;
  maxSalary: number;
  limit: number;
  type: string;
  schedule: string;
  eduReq: string;
  salaryRate: string;
  startDate: string;
  url: string;
}

export interface RecentJobPostProp {
  title: string;
  description: string;
  minSalary: string;
  maxSalary: string;
  salaryRate: string;
}

export async function getJobs(): Promise<JobProps[]> {
  return fetch(config.JOBS_PATH, {
    headers: new Headers({
      Authorization: "Bearer " + config.ACCESS_TOKEN,
    }),
  }).then((data) => data.json());
}

export async function createJob(data: JobProps) {
  console.log("data");
  console.log(data);
  return fetch(config.JOBS_PATH, {
    method: "POST",
    body: JSON.stringify(data),

    headers: new Headers({
      Authorization: "Bearer " + config.ACCESS_TOKEN,
      "Content-Type": "application/json",
    }),
  }).then((data) => data.json());
}

export async function createJobs(data: JobProps[]) {
  return fetch(config.JOBS_BATCH_PATH, {
    method: "POST",
    body: JSON.stringify({
      data,
    }),

    headers: new Headers({
      Authorization: "Bearer " + config.ACCESS_TOKEN,
      "Content-Type": "application/json",
    }),
  }).then((data) => data.json());
}
export function getJobCount(): Promise<number> {
  return getJobs().then((data) => data.length);
}

export function getJobClosedCount(): Promise<number> {
  return fetch(config.JOBS_CLOSED_PATH, {
    headers: new Headers({
      Authorization: "Bearer " + config.ACCESS_TOKEN,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
}

export function getRecentJobPosts(): Promise<RecentJobPostProp[]> {
  return fetch(
    config.JOBS_COMPANY_PATH + "cla99iris00007343dan176a1" + "/recent",
    {
      headers: new Headers({
        Authorization: "Bearer " + config.ACCESS_TOKEN,
      }),
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
}
