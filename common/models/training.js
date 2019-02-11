'use strict';

module.exports = function(Training) {
  Training.beforeRemote('create', function(context, user, next) {
    context.args.data.created = Date.now();
    //context.args.data.ownerId = context.req.accessToken.userId;
    context.args.data.ownerId = 1;
    next();
  });

};
