"use strict";

var version = require("./version");

module.exports = function (Unit) {
  Unit.beforeRemote("create", function (context, unit, next) {
    context.args.data.created = Date.now();
    context.args.data.edited = Date.now();
    context.args.data.ownerId = 1;
    next();
  });

  Unit.beforeRemote(
    "prototype.patchAttributes",
    function (context, unit, next) {
      context.args.data.edited = Date.now();
      next();
    }
  );

  Unit.afterRemote("create", function (ctx, unit, next) {
    version.updateVersion("units");
    next();
  });

  Unit.afterRemote("prototype.patchAttributes", function (ctx, unit, next) {
    version.updateVersion("units");
    next();
  });
};
