import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
// import { createMemoryHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from '../redux/reducers';
// const history = createMemoryHistory();

const customRender = (ui: any, { initialState, ...renderOptions }: any = {}) => {
    const store = configureStore({
        reducer: RootReducer,
        preloadedState: initialState,
    });

    const AllTheProviders = ({ children }: any) => {
        return (
            <Router>
                <Provider store={store}>{children}</Provider>
            </Router>
        );
    };
    return rtlRender(ui, { wrapper: AllTheProviders, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
