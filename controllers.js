const axios = require("axios");
const {
  getMatchSchedule,
  getNewsFeed,
  options,
  getScoresLive,
} = require("./services/cricService");

const liveSoccerHandler = async (req, res) => {
    axios
      .request(options)
      .then(function (response) {
        return res.status(200).json({
          result: response.data.data,
        });
      })
      .catch(function (err) {
        return res.status(500).json({
          err: err.toString(),
        });
      });
};

const newsHandler = async (req, res) => {
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
};

const liveCricketHandler = async (req, res) => {
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
};

const matchScheduleHandler = async (req, res) => {
  try {
    const schedule = await getMatchSchedule();
    return res.status(200).json({
      schedule: schedule,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
};

module.exports = {
  liveSoccerHandler,
  newsHandler,
  liveCricketHandler,
  matchScheduleHandler,
};
