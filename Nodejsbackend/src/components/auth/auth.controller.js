const AuthService = require('./auth.service');

// Define the AuthController object with login and register methods
const AuthController = {

  login: async (httpRequest) => {
    console.log('AA')
    // Call doLogin method from AuthService and store result in loginData
    const loginData = await AuthService.doLogin(httpRequest.body);

    // Return success status code and loginData as response
    return {
      statusCode: 200,
      body: {
        data: loginData
      }
    };
  },

  // Register method
  register: async (httpRequest) => {
    console.log('AA')
    // Call doRegister method from AuthService and store result in registerData
    const registerData = await AuthService.doRegister(httpRequest.body);

    // Return success status code and registerData as response
    return {
      statusCode: 200,
      body: {
        data: registerData
      }
    };
  }
};


module.exports = AuthController;