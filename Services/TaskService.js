const Task = require('./models/Task');

class TasKservice {

    async addTask(taskData) {
        return await Task.create(taskData);
    }

    async getAllTasks() {
        return await Task.findAll();
    }

    async getTaskById(taskId) {
        return await Task.findByPk(taskId);
    }

    async getTaskByUserId(userId) {
        return await Task.findAll({ where: { userId } });
    }

    async updateTask(taskId, taskData) {
        
        return await Task.update(taskData, { where: { task_id: taskId } });
    
    }

    async deleteTask(taskId) {
        return await Task.destroy({ where: { task_id: taskId } });
    }
    


}

module.exports = new TasKservice();

