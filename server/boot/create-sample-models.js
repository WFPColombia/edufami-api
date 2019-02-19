var async = require('async');
module.exports = function(app) {
  //data sources

  var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  async.parallel({
    createAccessToken: async.apply(createAccessToken),
    createStaffUsers: async.apply(createStaffUsers),
    trainings: async.apply(createTrainings),
  }, function(err, results) {
    if (err) throw err;
    console.log('> models created sucessfully');
  });

  // create AccessToken
  function createAccessToken(cb) {
    // [TODO] - Check how to implement autoupdate
    // Automigrate this model even if we don't add information,
    // We need to do this for when we are using other datasourcer different
    // than the default datasource
    mysqlDs.automigrate('AccessToken', function(err) {
      if (err) return cb(err);
      var AccessToken = app.models.AccessToken;
      AccessToken.create([], cb);
    });
  }

  //create Staff Members
  // Creating mock data for staff members
  function createStaffUsers(cb) {
    mysqlDs.automigrate('StaffUser', function(err) {
      if (err) return cb(err);
      var StaffUser = app.models.StaffUser;
      StaffUser.create([{
        email: 'admin@mail.com',
        username: 'admin',
        password: 'qwe123'
      }], cb);
    });
  }

  //create App Users
  // Creating mock data for createUserAccounts
  function createUserAccounts(cb) {
    mysqlDs.automigrate('UserAccount', function(err) {
      if (err) return cb(err);
      var UserAccount = app.models.UserAccount;
      UserAccount.create([{
        email: 'user@mail.com',
        username: 'user',
        password: 'qwe123'
      }], cb);
    });
  }
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