"use strict";

var version = require("./version");

module.exports = function (Option) {
  Option.beforeRemote("create", function (context, option, next) {
    context.args.data.created = Date.now();
    context.args.data.edited = Date.now();
    context.args.data.ownerId = 1;
    next();
  });

  Option.beforeRemote(
    "prototype.patchAttributes",
    function (context, option, next) {
      context.args.data.edited = Date.now();
      next();
    }
  );

  Option.afterRemote("create", function (ctx, option, next) {
    version.updateVersion("options");
    next();
  });

  Option.afterRemote("prototype.patchAttributes", function (ctx, option, next) {
    version.updateVersion("options");
    next();
  });
};
