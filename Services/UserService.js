const User = require('./models/User');

class UserService {

    async getAllUsers() {
        return await User.findAll();
    }

    async getUserByEmail(email){
        return await User.findOne({ where: { email: email } });
    }


    async getUserByID(userId){
        return await Client.findByPk(userId);
    }

    async createUser(userData) {
        return await User.create(userData);
    }

}

module.exports = new UserService();