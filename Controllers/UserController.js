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

    



}