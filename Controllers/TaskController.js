const taskRoutes = require('./routes/taskRoutes');

class TaskController{
    async getAllTasks(request, result) {
        try {
            const tasks = await taskService.getAllTasks();
            result.status(200).json(tasks);
        }catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la récupération des tâches" });
        }
    }

    async getTaskById(request, result) {
        try {
            const taskId = parseInt(request.params.taskId);
            const task = await taskService.getTaskById(taskId);
            if (!task) {
                return result.status(404).json({ error: "La tâche demandée n'existe pas" });
            }
            result.status(200).json(task);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la récupération de la tâche" });
        }
    }

    async getTaskByUserId(request, result) {
        try {
            const userId = parseInt(request.params.userId);
            const tasks = await taskService.getTaskByUserId(userId);
            if (!tasks.length) {
                return result.status(404).json({ error: "Aucune tâche trouvée pour cet utilisateur" });
            }
            result.status(200).json(tasks);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la récupération des tâches pour cet utilisateur" });
        }
    }

    async updateTask(request, result) {
        try {
            const taskId = parseInt(request.params.taskId);
            const taskData = request.body;
            await taskService.updateTask(taskId, taskData);
            result.status(204).send();
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de la tâche" });
        }
    }

    async deleteTask(request, result) {
        try {
            const taskId = parseInt(request.params.taskId);
            await taskService.deleteTask(taskId);
            result.status(204).send();
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la suppression de la tâche" });
        }
    }
}

module.exports = new TaskController();