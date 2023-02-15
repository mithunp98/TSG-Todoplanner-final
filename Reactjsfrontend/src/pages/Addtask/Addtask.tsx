import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Content from '../../components/content/content';
import Header from '../../components/header/header';
import './addtask.css';
import { AppState } from '../../redux/store';
import Sidebar from '../../sidebar/sidebar';
import Addtaskservice from './addtaskservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    userId: number;
    accessToken: string;
}





const Addtask: React.FC<Props> = ({ userId, accessToken }) => {

    const [tasktitle, setTasktitle] = useState('');
    const [taskdescription, setTaskdescription] = useState('');
    const [startdatetime, setStartdatetime] = useState('');
    const [enddatetime, setEnddatetime] = useState('');
    const [tasktype, setTasktype] = useState('');
    const [taskpriority, setTaskpriority] = useState('');
    const [taskstatus, setTaskstatus] = useState('');
    const navigate = useNavigate();



    const Handleclick = (e: React.FormEvent) => {
        e.preventDefault();

        const currentDate = new Date();
        const taskStartDate = new Date(startdatetime);
        if (taskStartDate > currentDate) {
            Addtaskservice(tasktitle, taskdescription, startdatetime,
                enddatetime, tasktype, taskpriority, taskstatus, userId, accessToken);
            window.location.href = 'http://localhost:3001/home';
        } else {
            toast.error('DateTime should exceed current dateTime');
            // show error message for the user
            // alert('Start datetime should be greater than the current datetime');
        }


    };




    return (
        <>
        <ToastContainer />
            <Header taskid={0} tasktitle={''} taskdescription={''} taskstartdatetime={''}
            taskenddatetime={''} tasktypetitle={''} prioritytype={''} statustitle={''} />
            <Container fluid className="Main-content">
                <Row className="full-width row-lg-2">
                    <Col className="col-xs-0 col-md-2 SideBar" id="maincontent">
                        <Sidebar />
                    </Col>
                    <Col className=" col-xs-12 col-md-10 RightContent" id="contentofmain">
                        <div>
                            <form className="formcontentbox">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Task Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Enter title"
                                            value={tasktitle}
                                            onChange={(e) => setTasktitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Task Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Enter description"
                                            value={taskdescription}
                                            onChange={(e) => setTaskdescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress">Start DateTime</label>
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="start date-time"
                                        value={startdatetime}
                                        onChange={(e) => setStartdatetime(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress2">End DateTime</label>
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        id="inputAddress2"
                                        placeholder="End date-time"
                                        value={enddatetime}
                                        onChange={(e) => setEnddatetime(e.target.value)}
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">Task Type</label>
                                        <select id="inputState" value={tasktype} className="form-control"
                                        onChange={(e) => setTasktype(e.target.value)}>
                                            <option selected>Choose...</option>
                                            <option value="personal">Personal</option>
                                            <option value="professional">Professional</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">Task Priority</label>
                                        <select id="inputState" value={taskpriority} className="form-control"
                                        onChange={(e) => setTaskpriority(e.target.value)}>
                                            <option selected>Choose...</option>
                                            <option value="high">High</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">Task Status</label>
                                        <select id="inputState" value={taskstatus} className="form-control"
                                        onChange={(e) => setTaskstatus(e.target.value)}>
                                            <option selected>Choose...</option>
                                            <option value="completed">Completed</option>
                                            <option value="pending">Pending</option>
                                        </select>
                                    </div>
                                </div>
                                <button id="addingbtn" type="submit" className="btn btn-primary" onClick={Handleclick}>
                                    Add Task
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Addtask;
