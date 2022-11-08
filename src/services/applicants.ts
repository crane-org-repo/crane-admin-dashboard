import * as React from "react";
import { USERS_PATH } from "./config";

const { APPLICANTS_PATH, ACCESS_TOKEN } = process.env;

export interface UsersProps {
  email: string;
  firstName: string;
  lastName: string;
}

export async function getApplicants(): Promise<UsersProps[]> {
  return fetch(USERS_PATH, {
    headers: new Headers({
      Authorization: "Bearer " + ACCESS_TOKEN,
    }),
  }).then((data) => data.json());
}

export async function createApplicants(data: UsersProps) {
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
