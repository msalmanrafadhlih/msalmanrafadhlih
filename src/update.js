import path from "path";
import template from "./template.js";
import fetch from "node-fetch";
import fs from "fs";

let stars = 0,
  page = 1;

let special;

const fetchStars = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/msalmanrafadhlih/starred?per_page=100&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    const starsData = await response.json();
    return starsData;
  } catch (error) {
    console.error(`Error fetching stars data: ${error.message}`);
    return [];
  }
};

const countStars = async () => {
  let starsData = await fetchStars();
  stars += starsData.length;
  page++;
  if (starsData.length === 100) {
    await countStars();
  } else {
    await writeReadMe();
  }
};

const fetchUserData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/msalmanrafadhlih");
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user data: ${error.message}`);
    return null;
  }
};

const writeReadMe = async () => {
  const readMePath = path.join(process.cwd(), "README.md");
  const date = new Date();
  const [dd, mm] = [date.getDate(), date.getMonth() + 1];

  if (mm === 12) special = ["⛄", "❄", "🎄"];
  else if (mm === 10 && dd === 31) special = ["👻", "🎃", "🍬"];
  else if (mm === 1 && dd === 1) special = ["🎉", "🥳", "🎆"];
  else if (mm === 9 && dd === 29) special = ["🎉", "🎈", "🎊"];
  else special = ["✨", "🚀", "✨"];

  const userData = await fetchUserData();
  if (!userData) return;

  const text = template ({ date, dd, mm, special, getDateSuffix }); 

  fs.writeFileSync(readMePath, text);
};

const getDateSuffix = (day) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};


(async () => {
  await countStars();
})();


export {};
