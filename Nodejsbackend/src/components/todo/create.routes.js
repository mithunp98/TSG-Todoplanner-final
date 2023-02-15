/**
 *
 * @param {Object} CreateRouter
 * @param {ExpressRouter} CreateRouter.router
 * @param {CreateController} CreateRouter.CreateController
 * @param {CreateValidator} CreateRouter.CreateValidator
 * @param {makeExpressCallback} CreateRouter.makeExpressCallback
 * @param {makeValidatorCallback} CreateRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */
const Authorization = require('../../middlewares/auth');
module.exports = ({ router, CreateController, CreateValidator, makeValidatorCallback, makeExpressCallback }) => {
  console.log('dsfsdfs');
  router.post(
    '/create',
    Authorization,
    makeValidatorCallback(CreateValidator.validateCreate),
    makeExpressCallback(CreateController.create)
  );
  router.get(
    '/tasklist',
    Authorization,
    makeExpressCallback(CreateController.view)
  );
  router.get(
    '/tasklist/:tasktitle',
    Authorization,
    makeExpressCallback(CreateController.viewName)
  );  
  router.delete(
    '/taskdelete/:id',
    Authorization,
    makeExpressCallback(CreateController.delete)
  );
  router.put(
    '/taskupdate/:id',
    makeExpressCallback(CreateController.update)
  );
  router.get(
    '/tasklist/task/:id',
    makeExpressCallback(CreateController.viewId)
  );

  return router;
};
