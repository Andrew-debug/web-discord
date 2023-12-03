export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(inputDate: string) {
  const [year, monthStr, day] = inputDate.split("/");
  const month = months[parseInt(monthStr, 10) - 1];
  return `${parseInt(day, 10)} ${month} ${year}`;
}

export const userCollection = "user";
export const serverCollection = "servers";