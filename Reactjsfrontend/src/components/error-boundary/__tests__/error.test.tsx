import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../utils/test-utils';
import { setTestEnv } from '../../../utils/interceptors';
import Error from '../error';
import ErrorBoundary from '../error-boundary';
import Routes from '../../route/route';

beforeAll(() => {
    setTestEnv(true);
});
afterAll(() => {
    setTestEnv(false);
});

test('Error - Render', () => {
    render(<Error />);
});
