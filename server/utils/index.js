const TASK_VALUES = ['todo', 'date'];
const badRequestHandler = res => res.sendStatus(400);

module.exports = {TASK_VALUES, badRequestHandler};