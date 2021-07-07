module.exports = (app) => {
    app.get('/top5neareststars', (req, res, next) => {
        const top5NearestStars = {firstAndSecondNearestStars: ["Sun",
                                                               "Proxima Centauri"],
                                  thirdFourthAndFifthNearestStars: {thirdNearestStar: "Alpha Centauri",
                                                                    fourthNearestStar: "Barnard\'s Star",
                                                                    fifthNearestStar: "Wolf 359"
                                                                   }
        };
        res.json(top5NearestStars);
    });
};
