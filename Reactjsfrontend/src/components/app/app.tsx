import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '../error-boundary/error-boundary';
import Routes from '../route/route';
import Header from '../header/header';
import { useSelector } from 'react-redux';
import { AppState, useAppThunkDispatch } from '../../redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { sampleApi, updateCount } from '../../redux/actions/common';

const App = () => {
    const count = useSelector((state: AppState) => state.common.count);
    const dispatch = useAppThunkDispatch();

    return (
        <>
            <Router>
                <ErrorBoundary>
                </ErrorBoundary>
                <div>
                    <div>
                        <div>
                            <ErrorBoundary>
                                <Routes />
                            </ErrorBoundary>
                        </div>
                        {/* {count}
                        <button onClick={() => dispatch(updateCount())}>Add</button>
                        <button onClick={() => dispatch(sampleApi())}>API Check</button> */}
                    </div>
                </div>
            </Router>
        </>
    );
};
export default App as any;
