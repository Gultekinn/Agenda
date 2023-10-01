const { body, validationResult } = require('express-validator')

const cardValidation = [
    body('title').notEmpty().withMessage('Title is required !'),

    body('price').notEmpty().withMessage('Price is required !'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(422).json({ message: errors.array()[0].msg })
        }
        next()
    },
]

module.exports = cardValidation