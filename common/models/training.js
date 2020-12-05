"use strict";

var version = require("./version");

module.exports = function (Training) {
  Training.beforeRemote("create", function (ctx, training, next) {
    ctx.args.data.created = Date.now();
    ctx.args.data.edited = Date.now();
    ctx.args.data.ownerId = 1;
    next();
  });

  Training.beforeRemote(
    "prototype.patchAttributes",
    function (ctx, training, next) {
      ctx.args.data.edited = Date.now();
      next();
    }
  );

  Training.afterRemote("create", function (ctx, training, next) {
    version.updateVersion("trainings");
    next();
  });

  Training.afterRemote(
    "prototype.patchAttributes",
    function (ctx, training, next) {
      version.updateVersion("trainings");
      next();
    }
  );
};
