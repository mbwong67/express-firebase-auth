module.exports = {
    error: (res, data) => {
        return res.status(data.code).json(data)
    },
    success: (res, data) => {
        return res.status(200).json(data)
    },
    created: (res) => {
        return res.status(201).json({})
    },
    updated: (res) => {
        return res.status(204).json({})
    },
    deleted: (res) => {
        return res.status(204).json({})
    }
}