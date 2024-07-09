const User = require('./models/User');

class UserService {

    async getAllUsers() {
        return await User.finfAll();
    }

    async getUserByID(userId){
        return await Client.findByPK(userId);
    }

    async createUser(userData) {
        return await User.create(userData);
    }

}

module.exports = new UserService();