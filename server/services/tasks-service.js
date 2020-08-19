const ADD_TASK_QUERY = 'insert into tasks (creator_name, todo, date, create_date) values (?,?,?,?)';
const FETCH_TASKS_QUERY = 'select id, todo as Task, date as `Due To` from tasks where creator_name = ?';

const addTask = (task) => {
    const now = new Date().toISOString();
    const { creator_name, todo, date } = task;
    return global.mysqlConnection.execute(ADD_TASK_QUERY, [creator_name, todo, date, now]);
};

const fetchTasks = username => global.mysqlConnection.execute(FETCH_TASKS_QUERY, [username]);

module.exports = { addTask, fetchTasks };







// async function foo() {
//     try {
//         const response = await('/fetch');
//         if (response.status === 200) {

//         }
//         if (response.status === 400) {

//         }
//     } catch (err) {
//         // 400
//         // 500
//     }
// }