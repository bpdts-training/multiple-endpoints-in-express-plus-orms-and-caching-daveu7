module.exports = (app) => {
    app.get('/url', (req, res, next) => {
        res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
    });
};
