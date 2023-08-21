import jsonwebtoken from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

const jwt = {
    sign: (payload) => {
        return jsonwebtoken.sign(payload, secret, {expiresIn: 60 * 60 * 7, algorithm: 'HS256'});
    },
    verify: (token) => {
        return jsonwebtoken.verify(token, secret);
    }
}

module.exports = jwt;