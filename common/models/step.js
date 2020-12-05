"use strict";

var version = require("./version");

module.exports = function (Step) {
  Step.beforeRemote("create", function (context, step, next) {
    context.args.data.created = Date.now();
    context.args.data.edited = Date.now();
    context.args.data.ownerId = 1;
    next();
  });

  Step.beforeRemote(
    "prototype.patchAttributes",
    function (context, step, next) {
      context.args.data.edited = Date.now();
      next();
    }
  );

  Step.afterRemote("create", function (ctx, step, next) {
    version.updateVersion("steps");
    next();
  });

  Step.afterRemote("prototype.patchAttributes", function (ctx, step, next) {
    version.updateVersion("steps");
    next();
  });
};
