let express = require("express");
let app = express();
const url = require("./routes/url");
const seasons = require("./routes/seasons");
const sevenoceans = require("./routes/sevenoceans");
const top5neareststars = require("./routes/top5neareststars");



app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//url(app);

/*app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});*/

seasons(app);

/*app.get("/seasons", (req, res, next) =>  {
const seasons = {firstSeason: "Winter",
    secondSeason: "Spring",
    thirdSeason: "Summer",
    fourthSeason: "Autumn"};

res.json(seasons);
});*/

sevenoceans(app);

/*app.get("/sevenoceans", (req, res, next) =>  {

    const oceans = {firstOcean: "Artic Ocean",
        secondOcean: "North Atlantic Ocean",
        thirdOcean: "South Atlantic Ocean",
        fourthOcean: "Indian Ocean",
        fifthOcean: "North Pacific Ocean",
        sixthOcean: "South Pacific Ocean",
        seventhOcean:"Southern or Antartic Ocean"};

    res.json(oceans);
});*/

top5neareststars(app);

/*app.get("/top5neareststars", (req, res, next) =>  {

    const top5NearestStars = {firstAndSecondNearestStars: ["Sun",
            "Proxima Centauri"],
        thirdFourthAndFifthNearestStars : {thirdNearestStar: "Alpha Centauri",
            fourthNearestStar: "Barnard\'s Star",
            fifthNearestStar:  "Wolf 359"}
    };
    res.json(top5NearestStars);
});*/

