import {logger} from "../utils";

module.exports = {
    requestLogger: (req, res, next) => {
        const reqBody = req.body.hasOwnProperty('password') || req.body.hasOwnProperty('repeat_password') ? {...req.body, password: '***', repeat_password: '***'} : req.body;
        logger.info(`Method: ${req.method} | URL: ${req.url} | IP: ${req.ip}`, {
            body: reqBody,
            ip: req.ip,
        });

        next();
    }
};