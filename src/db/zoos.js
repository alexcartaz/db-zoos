const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get: function(id) {
    let query = db('zoos');

    if (id) {
      return query
        .where('id', id)
        .first()
        //.then(zoo => mappers.actionToBody(zoo));
    }

    return query/*.then(zoo => {
      return actions.map(zoo => mappers.actionToBody(zoo));
    });*/
  },
  insert: function(zoo) {
    return db('zoos')
      .insert(zoo)
      .then(([id]) => this.get(id));
  },
  update: function(id, changes) {
    return db('zoos')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db('zoos')
      .where('id', id)
      .del();
  },
};
