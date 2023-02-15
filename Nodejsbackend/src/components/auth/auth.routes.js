/**
 * A function that sets up the authentication routes.
 * @param {Object} AuthRouter - An object containing the necessary components for setting up the authentication routes.
 * @param {ExpressRouter} AuthRouter.router - An Express Router instance.
 * @param {AuthController} AuthRouter.AuthController - An instance of the AuthController class.
 * @param {AuthValidator} AuthRouter.AuthValidator - An instance of the AuthValidator class.
 * @param {makeExpressCallback} AuthRouter.makeExpressCallback - A utility function to generate an Express callback.
 * @param {makeValidatorCallback} AuthRouter.makeValidatorCallback - A utility function to generate a validator callback.
 * @returns {ExpressRouter} The Express Router instance, with the authentication routes set up.
 */
 module.exports = ({ router, AuthController, AuthValidator, makeValidatorCallback, makeExpressCallback }) => {

  // Set up the login route
  router.post('/login', makeValidatorCallback(AuthValidator.validateLogin), makeExpressCallback(AuthController.login));

  // Set up the register route
  router.post('/register', makeValidatorCallback(AuthValidator.validateRegister), makeExpressCallback(AuthController.register));
  
  // Return the Express Router instance, with the authentication routes set up
  return router;
};

