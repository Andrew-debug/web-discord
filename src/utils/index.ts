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

export const channlesObj = [
  {
    id: "league-of-legends",
    name: "League of Legends",
    img: "https://cdn.discordapp.com/embed/avatars/0.png",
  },
  {
    id: "dota",
    name: "Dota2",
    img: "https://cdn.discordapp.com/embed/avatars/1.png",
  },
  {
    id: "cs-go",
    name: "CS:GO",
    img: "https://cdn.discordapp.com/embed/avatars/2.png",
  },
];
