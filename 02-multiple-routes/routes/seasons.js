module.exports = (app) => {
    app.get('/seasons', (req, res, next) =>  {
        const seasons = {firstSeason: "Winter",
            secondSeason: "Spring",
            thirdSeason: "Summer",
            fourthSeason: "Autumn"};

        res.json(seasons);
    });
};
