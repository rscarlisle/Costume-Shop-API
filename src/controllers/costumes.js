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

getById = (req, res, next) => {
    const id = req.params.id
    const costume = model.getById(id)
  
    if (costume.error) {
      return next({
        status: costume.status,
        message: costume.message,
        error: costume.error
      })
    }
    res.status(200).json({ costume })
  }

create = (req, res, next) => {
    const costume = model.create(req.body)

    if (costume.errors) {
        return next({
        status: costume.status,
        message: costume.message,
        errors: costume.errors
        })
    }
    res.status(201).json({ costume })
}

update = (req, res, next) => {
    const id = req.params.id
    const updatedCostume = model.update(id, req.body)
  
    if (updatedCostume.errors) {
      return next({
        status: updatedCostume.status,
        message: updatedCostume.message,
        errors: updatedCostume.errors
      })
    } else if (updatedCostume.error) {
      return next({
        status: updatedCostume.status,
        message: updatedCostume.message,
        error: updatedCostume.error
      })
    }
    res.status(200).json({ costume: updatedCostume })
}
  
deleteById = (req, res, next) => {
    const id = req.params.id
    const deletedCostume = model.deleteById(id)

    if (deletedCostume.error) {
        return next({
        status: deletedCostume.status,
        message: deletedCostume.message,
        error: deletedCostume.error
        })
    }
    res.status(204).json()
}

module.exports = { 
    getAll,
    getById,
    create,
    update,
    deleteById
};