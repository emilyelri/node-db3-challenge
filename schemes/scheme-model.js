db = require('../data/dbConfig.js');

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}

////////
function findSteps(id) {
    return db('schemes')
    .join("steps", "schemes.id", "steps.scheme_id")
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where({ scheme_id: id })
}
////////

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then((ids) => findById(ids[0]));
}

function update(update, id) {
    return db('schemes')
    .where({ id })
    .update(update)
    .then((ids) => findById(ids[0]))
}

function remove(id) {
    return db('schemes')
    .where({ id })
    .del();
}


////////
//STRETCH??
////////

// function addStep(step, scheme_id) {

// }

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}