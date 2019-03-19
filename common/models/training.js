"use strict";

module.exports = function(Training) {
  Training.beforeRemote("create", function(context, training, next) {
    context.args.data.created = Date.now();
    context.args.data.ownerId = 1;
    context.args.data.status = "Draft";
    context.args.data.visible = true;
    next();
  });

  Training.beforeRemote("prototype.patchAttributes", function(
    context,
    trainig,
    next
  ) {
    context.args.data.edited = Date.now();
    next();
  });
};
