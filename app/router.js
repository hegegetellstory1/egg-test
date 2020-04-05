'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.info);
  router.get('/user/tag/lig', controller.user.addName);
  router.get('mag', '/user/mag/tist', controller.user.getName);
  require('./router/api')(app);


};

