var async = require('async');
module.exports = function(app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  async.parallel({
    userAccounts: async.apply(createUserAccounts),
    trainings: async.apply(createTrainings),
  }, function(err, results) {
    if (err) throw err;
    console.log('> models created sucessfully');
  });
  //create reviewers
  function createUserAccounts(cb) {
    mysqlDs.automigrate('UserAccount', function(err) {
      if (err) return cb(err);
      var UserAccount = app.models.UserAccount;
      UserAccount.create([{
        email: 'admin@admin.com',
        password: 'qwe123'
      }, {
        email: 'john@doe.com',
        password: 'johndoe'
      }, {
        email: 'jane@doe.com',
        password: 'janedoe'
      }], cb);
    });
  }
  //create coffee shops
  function createTrainings(cb) {
    mysqlDs.automigrate('Training', function(err) {
      if (err) return cb(err);
      var Training = app.models.Training;
      Training.create([{
        name: 'Nutrifami para todos',
        created: Date.now(),
        ownerId: 1
      }, {
        name: 'Nutrifami Pácifico',
        created: Date.now(),
        ownerId: 2
      }, {
        name: 'Nutrifami Senegal',
        created: Date.now(),
        ownerId: 3
      }, ], cb);
    });
  }
};