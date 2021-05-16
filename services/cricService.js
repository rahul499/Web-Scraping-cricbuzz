const axios = require("axios");
const cheerio = require("cheerio");
const notifier = require("node-notifier");

const getNewsData = async () => {
  const newsUrl = "https://www.cricbuzz.com/cricket-news/latest-news";
  const newsResponse = await axios.get(newsUrl);
  const { data } = newsResponse;
  return data;
};

const getLiveCricketData = async () => {
  const cricUrl =
    "https://www.cricbuzz.com/cricket-match/live-scores/upcoming-matches";
  const cricResponse = await axios.get(cricUrl);
  const { data } = cricResponse;
  return data;
};

const getSchedule = async () => {
  const scheduleUrl =
    "https://www.cricbuzz.com/cricket-schedule/upcoming-series/international";
  const scheduleResponse = await axios.get(scheduleUrl);
  const { data } = scheduleResponse;
  return data;
};

var footballLive = {
  method: "GET",
  url: "https://live-score-api.p.rapidapi.com/scores/live.json",
  params: {
    key: "POQppudV0xZmqGUQ",
    secret: "EhT9bzCQ6jCXglQ6aHvzbIvcgvyHbtxP",
  },
  headers: {
    "x-rapidapi-key": "26e1770537mshf6d482af66fa36cp18be26jsn23bdd246ed44",
    "x-rapidapi-host": "live-score-api.p.rapidapi.com",
  },
};

const getNewsFeed = async () => {
  const html = await getNewsData();
  const newsArr = [];
  const elemSelector = "#news-list";
  const $ = cheerio.load(html);
  $(elemSelector).each((parentIdx, parentElm) => {
    $(parentElm)
      .children()
      .each((childIdx, childElm) => {
        let mainHeader = $("div:nth-child(1)", $(childElm)).text().trim();
        let content1 = $("div:nth-child(3)", $(childElm)).text();
        let content2 = $("div:nth-child(2)", $(childElm)).text();
        let days = $("div:nth-child(4)", $(childElm)).text();

        let newObj = {
          mainHeader: mainHeader,
          content1: content1,
          content2: content2,
          days: days,
        };
        if (newObj.mainHeader !== "") newsArr.push(newObj);
      });
  });
  return newsArr;
};

const getScoresLive = async () => {
  const scores = [];
  const html = await getLiveCricketData();
  const $ = cheerio.load(html);
  $("a.cb-lv-scrs-well-live").each(function (idx, elem) {
    const scoreContainer = $(elem).children().children();
    const score = $(scoreContainer).text();
    scores.push(score);
  });
  return scores;
};

const getMatchSchedule = async () => {
  const html = await getSchedule();
  const schedule = [];
  const $ = cheerio.load(html);
  $("#international-list").each(function (idx, parentElm) {
    $(parentElm)
      .children()
      .each((childIdx, childElm) => {
        const scheduleContainer = $("div:nth-child(1)", $(childElm))
          .text()
          .trim();
        schedule.push(scheduleContainer);
      });
  });
  return schedule;
};

module.exports = {
  getNewsFeed,
  getScoresLive,
  getMatchSchedule,
  footballLive
};
