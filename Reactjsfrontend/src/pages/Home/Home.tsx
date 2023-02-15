import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from '../../components/content/content';
import Header from '../../components/header/header';

import { AppState } from '../../redux/store';
import Sidebar from '../../sidebar/sidebar';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

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
                    <Col className="col-xs-12 col-md-10">
                        <Content />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Home;
