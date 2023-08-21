import jsonwebtoken from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

const jwt = {
    sign: (payload) => {
        return jsonwebtoken.sign(payload, secret, {expiresIn: 60 * 60 * 7});
    },
    verify: (token) => {
        return jsonwebtoken.verify(token, secret, (err, decoded) => {
            if (err) {
                throw new Error(err.message);
            }
            return decoded;
        });
    }
}

module.exports = jwt;