import axios from '../../utils/interceptors';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Searchservice = async (tasktitle: string, userId: number, accessToken: string) => {
    try {
        const response = await axios.get(`http://localhost:3000/todo/tasklist/${tasktitle}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
        });
        // eslint-disable-next-line no-console
        console.log(response);
        if (response.status === 200) {
            // eslint-disable-next-line no-console
            console.log('responsedata',response.data);
          return response.data;
        } else {
          throw new Error(`Unable to search for tasks. Response status: ${response.status}`);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        throw error;
        }
};



export default Searchservice;
