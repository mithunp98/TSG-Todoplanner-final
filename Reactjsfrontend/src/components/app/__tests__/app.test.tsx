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
            accessToken: {
                given_nameoups: 'Test',
            },
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

test('Test with pendingAPICount', async () => {
    const initialState = {
        common: {
            pendingAPICount: 1,
        },
    };
    render(<App />, { initialState });
    expect(screen.getAllByRole('loader'));
});
test('Test with out pendingAPICount', async () => {
    const initialState = {
        common: {
            pendingAPICount: 0,
        },
    };
    render(<App />, { initialState });
});

test('Test for store env', async () => {
    const initialState = {
        common: {
            env: {
                data: {
                    apiUrl: 'https://wwww.test.com',
                },
            },
        },
    };
    render(<App />, { initialState });
});
