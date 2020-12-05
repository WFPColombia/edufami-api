"use strict";
var server = require("../../server/server");
var mysqlDs = server.dataSources.mysqlDs;

var version = (module.exports = function (Version) {});

version.updateVersion = function (key) {
  var Version = server.models.Version;
  var obj = {};
  obj[key] = Date.now();
  Version.upsertWithWhere({ id: 1 }, obj, () => {
    console.log(`Version ${key} updated`);
  });
};
