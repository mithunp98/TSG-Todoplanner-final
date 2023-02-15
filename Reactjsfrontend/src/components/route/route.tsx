import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Addtask from '../../pages/Addtask/Addtask';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Search from '../../pages/Search/Search';
import Updatetask from '../../pages/Updatetask/Updatetask';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addtask" element={<Addtask userId={0} accessToken={''} />} />
            <Route path="/taskupdate/:id" element={<Updatetask userId={0} accessToken={''} />} />
            <Route
                path="/tasksearch/:tasktitle"
                element={
                    <Search
                        userId={0}
                        accessToken={''}
                        taskid={0}
                        tasktitle={''}
                        taskdescription={''}
                        taskstartdatetime={''}
                        taskenddatetime={''}
                        tasktypetitle={''}
                        prioritytype={''}
                        statustitle={''}
                    />
                }
            />
        </Routes>
    );
};

export default AppRoutes;
