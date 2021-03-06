'use strict';
const drawerData = require('./drawerData');
const drawer = require('./drawer');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(drawer);
  app.configure(drawerData);
};
