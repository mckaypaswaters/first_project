module.exports = {
    getAllUsers: async (req, res) => {
        const db = req.app.get("db");
        const users = await db.users();
        res.status(200).send(users);
    },
};
