const { auth } = require('../../middlewares');
const CreateService = require('./create.service');

/**
 * Create Controller
 * @module CreateController
 */
const createController = {
  /**
   * Handle creating new data.
   * @async
   * @function
   * @param {Object} httpRequest - Express HTTP Request object
   * @returns {Promise<Object>} - Object containing status code and data
   */
  create: async (httpRequest) => {
    // Invoke the create method of the CreateService
    console.log('httpRequest.body', httpRequest.body);
    const createData = await CreateService.doCreate(httpRequest.body);

    // Return the status code and data in a JSON format
    return {
      statusCode: 200,
      body: {
        data: createData
      }
    };
  },

  update: async (httpRequest) => {
    // Invoke the update method of the CreateService
    console.log('httpRequest.body', httpRequest);
    const updateData = await CreateService.doUpdate(httpRequest);

    // Return the status code and data in a JSON format
    return {
      statusCode: 200,
      body: {
        data: updateData
      }
    };
  },

  view: async (httpRequest) => {
    // Invoke the update method of the CreateService
    console.log('httpRequest.body', httpRequest.body);
    const viewData = await CreateService.doView(httpRequest.body);

    // Return the status code and data in a JSON format
    return {
      statusCode: 200,
      body: {
        data: viewData
      }
    };
  },


  viewName: async (httpRequest) => {
    // Invoke the update method of the CreateService
    console.log('httpRequest', httpRequest);
    const viewNameData = await CreateService.doViewbyName(httpRequest);

    // Return the status code and data in a JSON format
    return {
      statusCode: 200,
      body: {
        data: viewNameData
      }
    };
  },

  viewId: async (httpRequest) => {
    // Invoke the update method of the CreateService
    console.log('httpRequest', httpRequest);
    const viewIdData = await CreateService.doViewbyId(httpRequest.params.id);

    // Return the status code and data in a JSON format
    return {
      statusCode: 200,
      body: {
        data: viewIdData
      }
    };
  },

  delete: async (httpRequest) => {
    // Invoke the update method of the CreateService
    console.log('httpRequestbody', httpRequest);
    const deletedData = await CreateService.doDelete(httpRequest.params.id);

    // Return the status code and data in a JSON format
    return {
      statusCode: 200,
      body: {
        data: deletedData
      }
    };
  },




};

module.exports = createController;
