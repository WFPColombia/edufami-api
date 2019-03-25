console.log("models-update...");
var server = require("./server");
var mysqlDs = server.dataSources.mysqlDs;
var lbTables = [
  "AccessToken",
  "ACL",
  "RoleMapping",
  "Role",
  "StaffUser",
  "Training",
  "Unit",
  "Lesson",
  "Step",
  "Option",
  "UserAccount",
  "Language",
  "Version"
];

async function autoupdateModels() {
  await autoupdateTraining();
  mysqlDs.disconnect();
}

function autoupdateTraining() {
  return new Promise((resolve, reject) => {
    mysqlDs.isActual(lbTables, function(err, actual) {
      if (!actual) {
        mysqlDs.autoupdate(lbTables, function(err) {
          if (err) throw err;
          console.log("All models autoupdated sucessfully!!");
          console.log(
            "Loopback tables [" + lbTables + "] updated in ",
            mysqlDs.adapter.name
          );
          resolve();
        });
      } else {
        console.log("Nothing to update");
        resolve();
      }
    });
  });
}

autoupdateModels();
