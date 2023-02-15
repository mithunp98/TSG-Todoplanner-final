const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const JwtService = require('./jwt.service');
const db = require('../../db/db.js');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const logger = require('../../support/logger');

const AuthService = {
  /**
   * Login a user and generate token.
   * @async
   * @method
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} When the user is not found.
   */

  doLogin: async (requestBody) => {
    try {
      // Destructure the requestBody to retrieve the username and password
      const { username, password } = requestBody;

      // Select the user from the userdetails table where the username is the same as the input username
      let queryObj = `SELECT * FROM userdetails WHERE username = '${username}';`;
      const resultObj = await db.promise(queryObj);

      // If no user is found, throw a BadRequestError
      if (resultObj.length == 0) {
        throw new BadRequestError('Username or Password is invalid!');
      } else {
        // If a user is found, compare the password to the hashed password stored in the database
        var logUsername = resultObj[0].username;
        var logPassword = resultObj[0].password;
        if (username == logUsername && bcrypt.compareSync(password, logPassword)) {
          // If the passwords match, create a payload to be used in the JWT
          payload = {
            userId: resultObj[0].uid,
            userRole: 'user', // no outher role in the system
            username: resultObj[0].username
          };
          // Generate the JWT using the payload
          const accessToken = await JwtService.generateJWT({
            payload
          });
          // Return the accessToken and the payload
          return {
            accessToken,
            ...payload
          };
        }
        logger.error('User loggeIn' + resultObj[0].username);
      }
    } catch (error) {
      // Log any errors that occur
      console.error(error);
      // Throw an InternalServerError if something goes wrong
      // throw new InternalServerError('Something went wrong. Please try again later.');
      logger.error(error);
    }
  },

  doRegister: async (requestBody) => {
    try {
      // Destructure the requestBody to retrieve all the necessary information for registration
      const { firstName, lastName, username, password, dateOfBirth, country } = requestBody;

      // Check if the provided username already exists in the database
      let checkUsernameQuery = `SELECT * FROM userdetails WHERE username = '${username}';`;
      const checkUsernameResult = await db.promise(checkUsernameQuery);

      // If the username already exists, throw a BadRequestError
      if (checkUsernameResult.length > 0) {
        return {
          statusCode: 400,
          body: {
            message: 'Username already exists!'
          }
        };
        // throw new BadRequestError('Username already exists!');
      } else {
        // If the username does not exist, hash the password using bcrypt
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);

        // Insert the new user information into the userdetails table
        let insertQuery = `INSERT INTO userdetails (firstname, lastname, username, password, dateofbirth, country) 
          VALUES ('${firstName}', '${lastName}', '${username}', '${hashedPassword}', '${dateOfBirth}', '${country}');`;
        await db.promise(insertQuery);

        // Select the newly created user from the database
        let selectQuery = `SELECT * FROM userdetails WHERE username = '${username}';`;
        const selectResult = await db.promise(selectQuery);

        const payload = {
          userId: selectResult[0].id,
          role: 'user',
          username: selectResult[0].username
        };
      }
    } catch (error) {
      // Throw an InternalServerError if something goes wrong
      // throw new InternalServerError('Something went wrong. Please try again later.');
      logger.error(error);
    }
  }
};

module.exports = AuthService;
