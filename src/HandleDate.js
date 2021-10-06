import { intlFormat } from "date-fns";

export function handleDateCreated() {
  const tmpDate = intlFormat(Date.now(), {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return tmpDate;
}
