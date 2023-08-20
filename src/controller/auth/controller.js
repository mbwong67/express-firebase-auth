module.exports = {
    login: async (req, res) => {
        res.Send('Login')
    },
    register: async (req, res) => {
        console.log('register')
        res.Send('Register')
    }
}