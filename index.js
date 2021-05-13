const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");
const notifier = require("node-notifier");

const app = express();
app.use(cors());

const getNewsData = async () => {
  const URL = "https://www.cricbuzz.com/cricket-news/latest-news";
  const response = await axios.get(URL);
  const { data } = response;
  return data;
};

const getDataFromRemoteLive = async () => {
  const URL =
    "https://www.cricbuzz.com/cricket-match/live-scores/upcoming-matches";
  const response = await axios.get(URL);
  const { data } = response;
  return data;
};

const getSchedule = async () => {
  const URL =
    "https://www.cricbuzz.com/cricket-schedule/upcoming-series/international";
  const response = await axios.get(URL);
  const { data } = response;
  return data;
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
  const html = await getDataFromRemoteLive();
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
  const scores = [];
  const $ = cheerio.load(html);
  $("#international-list").each(function (idx, parentElm) {
    $(parentElm)
      .children()
      .each((childIdx, childElm) => {
        const scheduleContainer = $("div:nth-child(1)", $(childElm))
          .text()
          .trim();
        scores.push(scheduleContainer);
      });
  });
  return scores;
};


// const notify = async () => {
//   const scores = await getScoresLive();
//   if (scores.length == 0) {
//     notifier.notify("No live matches.");
//     return;
//   }
//   for (let i = 0; i < scores.length; i++) {
//     notifier.notify({
//       title: "Duck!",
//       icon: path.join(__dirname, "ball.png"),
//       sound: true,
//       message: scores[i],
//     });
//   }
// };

app.get("/api/news-feed", async (req, res) => {
  try {
    const newsFeed = await getNewsFeed();
    return res.status(200).json({
      result: newsFeed,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
});

app.get("/api/scores-live", async (req, res) => {
  try {
    const scoresLive = await getScoresLive();
    return res.status(200).json({
      result: scoresLive,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
});

app.get("/api/match-schedule", async (req, res) => {
  try {
    const schedule = await getMatchSchedule();
    return res.status(200).json({
      "schedule": schedule,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
