"use strict";

var version = require("./version");

module.exports = function(Lesson) {
  Lesson.beforeRemote("create", function(context, lesson, next) {
    context.args.data.created = Date.now();
    context.args.data.edited = Date.now();
    context.args.data.ownerId = 1;
    next();
  });

  Lesson.beforeRemote("prototype.patchAttributes", function(
    context,
    lesson,
    next
  ) {
    context.args.data.edited = Date.now();
    next();
  });

  Lesson.afterRemote("create", function(ctx, lesson, next) {
    version.updateVersion("lessons");
    next();
  });

  Lesson.afterRemote("prototype.patchAttributes", function(ctx, lesson, next) {
    version.updateVersion("lessons");
    next();
  });
};
