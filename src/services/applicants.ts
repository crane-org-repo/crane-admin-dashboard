import * as React from "react";
import { USERS_PATH } from "./config";

const { APPLICANTS_PATH, ACCESS_TOKEN } = process.env;

export interface ApplicantProps {
  id: string;
  createdAt: string;
  userId: string;
  user: UserProps;
}

interface UserProps {
  firstName: string;
  lastName: string;
}

export async function getApplicants(): Promise<ApplicantProps[]> {
  return fetch(APPLICANTS_PATH, {
    headers: new Headers({
      Authorization: "Bearer " + ACCESS_TOKEN,
    }),
  }).then((data) => data.json());
}

export async function createApplicants(data: ApplicantProps) {
  return fetch(APPLICANTS_PATH, {
    method: "POST",
    body: JSON.stringify(data),

    headers: new Headers({
      Authorization: "Bearer " + ACCESS_TOKEN,
      "Content-Type": "application/json",
    }),
  }).then((data) => data.json());
}

export async function getAppliCount(): Promise<number> {
  const applicants = await getApplicants();
  return applicants.length;
}
