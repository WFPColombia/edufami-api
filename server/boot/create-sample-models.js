var async = require('async');
module.exports = function(app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  async.parallel({
    createStaffUsers: async.apply(createStaffUsers),
    trainings: async.apply(createTrainings),
  }, function(err, results) {
    if (err) throw err;
    console.log('> models created sucessfully');
  });

  //create Staff Members
  function createStaffUsers(cb) {
    mysqlDs.automigrate('StaffUser', function(err) {
      if (err) return cb(err);
      var StaffUser = app.models.StaffUser;
      StaffUser.create([{
        email: 'admin@admin.com',
        username: 'admin',
        password: 'qwe123'
      }], cb);
    });
  }
  //create App Users
  /*function createUserAccounts(cb) {
    mysqlDs.automigrate('UserAccount', function(err) {
      if (err) return cb(err);
      var UserAccount = app.models.UserAccount;
      UserAccount.create([{
        email: 'admin@admin.com',
        username: 'admin',
        password: 'qwe123'
      }], cb);
    });
  }*/
  //create trainings
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
        ownerId: 1
      }, {
        name: 'Nutrifami Senegal',
        created: Date.now(),
        ownerId: 1
      }, ], cb);
    });
  }
};