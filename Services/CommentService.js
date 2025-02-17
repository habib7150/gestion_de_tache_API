const Comment = require('./models/Comment');

class CommentService {
    async addComment(commentData) {
        return await Comment.create(commentData);
    }

    async getCommentsByTaskId(taskId) {
        return await Comment.findAll({ where: { taskId } });
    }
}

module.exports = new CommentService();