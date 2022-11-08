import * as config from "./config";
export function getHiredSuccessCount(): Promise<number> {
  console.log("Hello " + config.COMPAN_NAME_PATH);
  return fetch(config.COMPAN_NAME_PATH + "asd" + "/hired-count", {
    headers: new Headers({
      Authorization: "Bearer " + config.ACCESS_TOKEN,
    }),
  }).then((res) => {
    if (res.ok) {
      const data = res.json();
      return data;
    }
    throw res;
  });
}
