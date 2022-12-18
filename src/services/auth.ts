import * as React from "react";
import * as config from "./config";

export interface AuthReqProps {
  email: string;
  name: string;
  uidToken: string;
}

export async function postAuthReq(data: AuthReqProps) {
  return fetch(config.AUTH_FIREBASE_PATH, {
    method: "POST",
    body: JSON.stringify(data),

    headers: new Headers({
      Authorization: "Bearer " + config.ACCESS_TOKEN,
      "Content-Type": "application/json",
    }),
  }).then((data) => data.json());
}
