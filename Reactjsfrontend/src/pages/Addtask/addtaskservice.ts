import axios from '../../utils/interceptors';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Addtaskservice = async (tasktitle: string, taskdescription: string, taskstartdatetime: string,
    taskenddatetime: string, tasktypetitle: string, prioritytype: string,
    statustitle: string, userId: number, accessToken: string) => {
    try {
        const response = await axios.post('http://localhost:3000/todo/create', {
            tasktitle,
            taskdescription,
            taskstartdatetime,
            taskenddatetime,
            tasktypetitle,
            prioritytype,
            statustitle
        });
        const data = response.data;
        if (response.status !== 200) {
            throw new Error('Unauthorized');
        } else {
            return data;
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        throw error;
    }
};



export default Addtaskservice;
