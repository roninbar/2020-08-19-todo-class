const express = require('express');
const router = express.Router();
const { addTaskValidation } = require('../validations/task-validation');
const { addTask, fetchTasks } = require('../services/tasks-service');
const { badRequestHandler } = require('../utils');

router.post('/', addTaskValidation, async (req, res) => {
    try {
        // const payload = req.body;
        // payload.creator_name = req.user.username;
        // await addTask(payload);

        const { username: creator_name } = req.user;
        await addTask({ ...req.body, creator_name });
        return res.sendStatus(200);
    } catch (err) {
        return badRequestHandler(res);
    }
});


// body (request);
// router.post()
// router.patch()
// router.put()

//no body (request)
// router.get()
// router.delete()

// router.head()
// no body (response)

router.get('/', async (req, res) => {
    try {
        const { username } = req.user;
        const [rows] = await fetchTasks(username);
        return res.json(rows);
    } catch (err) {
        return badRequestHandler(res);
    }
});

module.exports = router;