// Base Url
const base_url =
  "https://cors-access-allow.herokuapp.com/https://api.rawg.io/api/";

// Get the dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popular_games = `games?key=d5d3d449792b475e8b98500f51879a31&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=d5d3d449792b475e8b98500f51879a31&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=d5d3d449792b475e8b98500f51879a31&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
// Game detials
export const gameDetailsURL = game_id =>
  `${base_url}games/${game_id}?key=d5d3d449792b475e8b98500f51879a31`;
// Game screenshots
export const gameScreenshotsURL = game_id =>
  `${base_url}games/${game_id}/screenshots?key=d5d3d449792b475e8b98500f51879a31`;

export const popularGamesURL = () => `${base_url}${popular_games}`;

export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

export const newGamesURL = () => `${base_url}${new_games}`;

// Searched game
export const searchGameURL = game_name =>
  `${base_url}games?key=d5d3d449792b475e8b98500f51879a31&search=${game_name}&page_size=9`;
