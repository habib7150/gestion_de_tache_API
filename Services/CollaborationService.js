const Collaboration = require('./Models/Collaboration');

class CollaborationService {
    async getCollaborationsByTaskId(taskId) {
        return await Collaboration.findbyPK(taskId);
    }
}

module.exports = new CollaborationService();