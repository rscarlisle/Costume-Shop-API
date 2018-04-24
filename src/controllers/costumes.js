const model = require('../models/costumes');

getAll = (req, res, next) => {
    const costumes = model.getAll(req.query.limit);

    if (costumes.error) {
        return next({
            status:costumes.status,
            message: costumes.message,
            error: costumes.error
        })
    }
    res.status(200).json({ costumes });
}

module.exports = { 
    getAll
    // create, getById, update, deleteById 
};