const CommentRoutes = require('./Services/CommentService');


class CommentController {

    async addComment(request, result) {
        try {
            const comment = await CommentRoutes.addComment(request.body);
            result.status(201).json(comment);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de l'ajout du commentaire" });
        }

    }

    async getCommentsByTaskId(request, result) {
        try {
            const comments = await CommentRoutes.getCommentsByTaskId(request.params.taskId);
            result.json(comments);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la récupération des commentaires" });
        }
    }



}

module.exports = new CommentController();