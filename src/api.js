// Base URL
const base_url = "https://api.rawg.io/api/";

// Current Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  console.log(month);
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Current Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current Year

const getYear = () => {
  return new Date().getFullYear();
};

const currentYear = getYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?dates${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Popular Games URL

export const popularGamesURL = () => {
  return `${base_url}${popular_games}`;
};

console.log(popularGamesURL());
console.log(lastYear);
