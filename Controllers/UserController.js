const UserService = require('./services/UserService');

class UserController {

    async getAllUsers(request, result) {
        try {
            const userService = new UserService();
            const users = await userService.getAllUsers();
            result.status(200).json(users);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la récupération des users" });
        }

    }

    async getUserByID(request, result) {
        try {
            const { userId } = request.params;
            const userService = new UserService();
            const user = await userService.getUserByID(userId);
            if (!user) {
                return result.status(404).json({ error: "User introuvable" });
            }
            result.status(200).json(user);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la récupération du user" });
        }
    }

    async createUser(request, result) {
        try {
            const userData = request.body;
            const userService = new UserService();
            const createdUser = await userService.createUser(userData);
            result.status(201).json(createdUser);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la création du user" });
        }
    }

    



}


module.exports = new UserController();