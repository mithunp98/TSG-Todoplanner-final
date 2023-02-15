import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, waitFor, screen, getByRole } from '../../../utils/test-utils';
import App from '../app';
import { authProvider } from '../../../utils/authProvider';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';

jest.mock('../../../utils/authProvider', () => {
    const originalModule = jest.requireActual('../../../utils/authProvider');
    return {
        __esModule: true,
        ...originalModule,
        authProvider: () => ({
            clearSession: jest.fn(),
        }),
    };
});

jest.mock('../../../redux/actions/common', () => {
    const originalModule = jest.requireActual('../../../redux/actions/common');
    return {
        __esModule: true,
        ...originalModule,
        updatePendingAPIAction: () => ({
            common: {
                pendingAPICount: '1',
            },
        }),
    };
});
test('Test with out pendingAPICount', async () => {
    const initialState = {
        common: {
            pendingAPICount: 0,
        },
    };
    render(<App />, { initialState });
});
