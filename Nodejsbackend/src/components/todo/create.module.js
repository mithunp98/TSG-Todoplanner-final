const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

// validator
const CreateValidator = require('./create.validator');

// service
const CreateService = require('./create.service');

// controller
const CreateController = require('./create.controller');

// routes
const routes = require('./create.routes')({
  router,
  CreateController,
  CreateValidator,
  makeValidatorCallback,
  makeExpressCallback
});

module.exports = {
    CreateController,
    CreateService,
    CreateRoutes: routes
};