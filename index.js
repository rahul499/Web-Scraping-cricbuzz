const express = require("express");
const cors = require("cors");
const {
  liveSoccerHandler,
  liveCricketHandler,
  newsHandler,
  matchScheduleHandler,
} = require("./controllers");

const app = express();
app.use(cors());

app.get("/api/liveScoreSoccer", liveSoccerHandler);

app.get("/api/news-feed", newsHandler);

app.get("/api/scores-live", liveCricketHandler);

app.get("/api/match-schedule", matchScheduleHandler);


app.listen(3000, () => {
  console.log("Running on port 3000");
});
