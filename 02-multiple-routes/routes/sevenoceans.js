module.exports = (app) => {
    app.get('/sevenoceans', (req, res, next) =>  {

        const oceans = {firstOcean: "Artic Ocean",
            secondOcean: "North Atlantic Ocean",
            thirdOcean: "South Atlantic Ocean",
            fourthOcean: "Indian Ocean",
            fifthOcean: "North Pacific Ocean",
            sixthOcean: "South Pacific Ocean",
            seventhOcean:"Southern or Antartic Ocean"};

        res.json(oceans);
    });
};
