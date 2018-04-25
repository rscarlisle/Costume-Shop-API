const model = require('../models/tags')

getById = (req, res, next) => {
    const tag = model.getById(req.params.id);
    if (tag.error) {
    return next({
            status: tag.status,
            message: tag.message,
            error: tag.error
        })
    }
    res.status(200).json({ tag });
}

create = (req, res, next) => {
    const tag = model.create(req.params.id, req.body);
    if (tag.errors) {
        return next({
            status: tag.status,
            message: tag.message,
            errors: tag.errors
        })
    } else if (tag.error) {
            return next({
                status: tag.status,
                message: tag.message,
                error: tag.error
            })
        }
    res.status(201).json({ tag });
    }

update = (req, res, next) => {
    const tag = model.update(req.params.id, req.params.tagId, req.body);

    if (tag.errors) {
        return next({
            status: tag.status,
            message: tag.message,
            errors: tag.errors
        })
    } else if (tag.error) {
        return next({
            status: tag.status,
            message: tag.message,
            error: tag.error
        })
    }
    res.status(200).json({ tag });
}

deleteById = (req, res, next) => {
    const tag = model.deleteById(req.params.id, req.params.tagId);
    if (tag.error) {
        return next({
            status: tag.status,
            message: tag.message,
            error: tag.error
        })
    }
    res.status(204).json();
}

module.exports = { 
    getAll,
    getById,
    create,
    update,
    deleteById
};