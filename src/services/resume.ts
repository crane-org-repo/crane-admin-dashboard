import * as React from "react";
import * as config from "./config";

interface ResumeProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  whatsapp: string;
  skills: SkillProps[];
  languages: LangProps[];
  nationality: string;
  currentLocation: string;
  interestedCountry: string;
}

interface WorkProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface SkillProps {
  name: string;
  level: number;
}

interface LangProps {
  name: string;
  level: number;
}

export async function createResume(formData: any) {
  let skillsData = [{} as SkillProps];
  skillsData = [
    { name: formData["skill-1"], level: formData["skill-1-yoe"] },
    { name: formData["skill-2"], level: formData["skill-2-yoe"] },
    { name: formData["skill-3"], level: formData["skill-3-yoe"] },
  ];

  let langsData = [{} as LangProps];
  langsData = [
    { name: formData["language-1"], level: formData["language-1-yoe"] },
    { name: formData["language-2"], level: formData["language-2-yoe"] },
    { name: formData["language-3"], level: formData["language-3-yoe"] },
  ];

  const data: ResumeProps = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    phoneNumber: formData.phoneNumber,
    whatsapp: formData.whatsapp,
    nationality: formData.nationality,
    currentLocation: formData.currentLocation,
    interestedCountry: formData.interestedCountry,
    skills: skillsData,
    languages: langsData,
  };

  console.log(data);

  return fetch(config.RESUME_PATH, {
    method: "POST",
    body: JSON.stringify(data),

    headers: new Headers({
      Authorization: "Bearer " + config.ACCESS_TOKEN,
      "Content-Type": "application/json",
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
}
