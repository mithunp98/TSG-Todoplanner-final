import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import './content.css';
import { AppState } from '../../redux/store';
import React, { useState, useEffect } from 'react';
import getTaskList from './contentservice';
import image from './displaypicture.png';
import { AnyMap } from 'immer/dist/internal';
import taskDelete from './deleteservice';
import updatetaskservice from '../../pages/Updatetask/updatetaskservice';

interface Task {
    taskid: number;
    tasktitle: string;
    taskdescription: string;
    taskstartdatetime: string;
    taskenddatetime: string;
    tasktypetitle: string;
    prioritytype: string;
    statustitle: string;
}

const Content = (props: any) => {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    // const taskId = useParams();
    const [expandedTaskIndex, setExpandedTaskIndex] = useState<boolean[]>([]);

    const handleClick = (index: number) => {
        // eslint-disable-next-line no-console
        console.log('index',index);
        setExpandedTaskIndex(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleDelete = async (e: any, taskId: number) => {
        e.preventDefault();
        try {
          const response = await taskDelete(taskId);
          // eslint-disable-next-line no-console
          console.log('response',response);
          window.location.href= 'http://localhost:3001/home';
        //   alert(response);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      };

    useEffect(() => {
        const fetchTaskList = async () => {
            try {
                const response = await getTaskList();
                // eslint-disable-next-line no-console
                console.log('response', response);
                setTaskList(response.data);
                setExpandedTaskIndex(new Array(response.data.length).fill(false));
                // eslint-disable-next-line no-console
                console.log('taskList', taskList);
                navigate('/home');
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchTaskList();
    }, []);

    const handleUpdate = async (e: any, taskId: number) => {
        // eslint-disable-next-line no-console
        console.log(taskId);
        window.location.href=`http://localhost:3001/taskupdate/${taskId}`;
    };



    return (
        <>

                <Row>
                    {taskList.map((task: Task ,index: number) => (
                        <Col key={task.taskid} xs={12} sm={12} md={6} lg={4} id="columpad">
                            <div className={`${expandedTaskIndex[index] ? 'expand' : 'hide'}`}
                            onClick={() => handleClick(index)} id="boxshape">
                                <div className="upper">
                                    <p className="datehead">start date</p>
                                    <h3 className="upperdata">{task.taskstartdatetime}</h3>

                                    <p>Task Title</p>
                                    <h3 className="upperdata">{task.tasktitle}</h3>
                                    <Button className="mr-2" id="delete-button" variant="danger"
                                   onClick={(event) => handleDelete(event, task.taskid)}>
                                        <RiDeleteBin5Line />
                                    </Button>
                                    <span> &nbsp;&nbsp;</span>
                                    <Button className="mr-2" id="edit-button" variant="info"
                                    onClick={(event) => handleUpdate(event, task.taskid)}>
                                        <FaEdit />
                                    </Button>
                                </div>
                                <div className="lower">
                                    <p id="lowerheader">Task description</p>
                                    <h3>{task.taskdescription}</h3>

                                    <p id="lowerheader">end date</p>
                                    <h3>{task.taskenddatetime}</h3>
                                    <p id="lowerheader">Task Type</p>
                                    <h3>{task.tasktypetitle}</h3>
                                    <p id="lowerheader">Task Priority</p>
                                    <h3>{task.prioritytype}</h3>

                                    <p id="lowerheader">Task Status</p>
                                    <h3>{task.statustitle}</h3>
                                    <p id="lowerheader">Task Id</p>
                                    <h3>{task.taskid}</h3>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
        </>
    );
};
export default Content;
